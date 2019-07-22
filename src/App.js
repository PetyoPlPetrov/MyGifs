import React from 'react';
import {isEmpty} from 'ramda'
import {
    LOADING,
    SET_OFFSET
} from './constants/'
import {
    createInputChangeCommand,
    createParamsCommand,
    handleCommand,
    processProps,
    createSetSearchedGifsCommand,
    createResetGifsCommand
} from './common/'
import { Input} from './components/Input'
import { loadGifs } from './fetch'
import Gif from './components/Gif'


class App extends  React.Component{

    constructor(props){
        super(props)
        this.state={
            searchedGif: '',
            urls: [],
            offset:1,
            limit:8
        }
        this.container =  React.createRef();
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = async ()=>{
        const isScrolledtoTheBottom = this.container.current.getBoundingClientRect().bottom <= window.innerHeight
        if(isScrolledtoTheBottom){
             await this.searchGifs()
        }
    }

    onStartSearchClick = async ()=>{
        this.dispatchCommand(createResetGifsCommand())
        await this.searchGifs()
    }

    searchGifs = async () => {
        //TODO compose them with ramda
        const {searchedGif, offset,limit, loading} = this.state
        if(loading){
            return
        }
        this.dispatchCommand(createParamsCommand(LOADING)(true))
        const urls = await loadGifs({query:searchedGif, limit, offset})
        this.dispatchCommand(createParamsCommand(SET_OFFSET)(offset+ limit))
        this.dispatchCommand(createParamsCommand(LOADING)(false))
        this.dispatchCommand(createSetSearchedGifsCommand(urls))
    }

    dispatchCommand = (command) => {
        this.setState(handleCommand(command))
    }

    onInputChange = (e)=>{
        this.dispatchCommand(createInputChangeCommand(e.target.value))
    }

    render(){
        const { urls, loading, searchedGif} = processProps(this.state)
        return(
            <div style={{paddingLeft:200,paddingTop:100}} ref={this.container}>
            <Input placeholder='Search for giffs...' onChange={this.onInputChange} value={searchedGif}/>
            <button onClick={this.onStartSearchClick} disabled={isEmpty(searchedGif)}>Search</button>
            <Gif urls={urls} isLoading={loading}/>
        </div>)
    }
}

export default App;
