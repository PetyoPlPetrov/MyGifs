import React from 'react';
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
        const bottom = this.container.current.getBoundingClientRect().bottom <= window.innerHeight
        if(bottom){
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
        const { urls, loading} = processProps(this.state)
        return(
            <div style={{paddingLeft:200,paddingTop:100}} ref={this.container}>
            <Input placeholder='Type gif...' onChange={this.onInputChange} value={this.state.searchedGif}/>
            <button onClick={this.onStartSearchClick}>Search</button>
             <Gif urls={urls} isLoading={loading}/>
        </div>)
    }
}

export default App;
