import React from 'react';
import { SET_GIFS, INPUT_CHANGE } from './constants/'
import {
    handleCommand,
    processProps
} from './common/'
import { Input} from './components/Input'
import { loadGifs } from './fetch'
import { Gif } from './components/Gif'

export const setSearchedGifs = (args) => ({
    commandName: SET_GIFS,
    args
})

export const createInputChangeCommand = (args) => ({
    commandName: INPUT_CHANGE,
    args
})

class App extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            searchedGif: '',
            urls: []
        }
    }

    searchGifs = async () => {
        const value = this.state.searchedGif
        const urls = await loadGifs(value)
        this.dispatchCommand(setSearchedGifs(urls))
    }

    dispatchCommand = (command) => {
        this.setState(handleCommand(command))
    }

    onInputChange = (e)=>{
        this.dispatchCommand(createInputChangeCommand(e.target.value))
    }

    render(){
        const { urls} = processProps(this.state)
        return(
            <div style={{paddingLeft:200,paddingTop:100}}>
            <Input placeholder='Type gif...' onChange={this.onInputChange} value={this.state.searchedGif}/>
            <button onClick={this.searchGifs}>Search</button>
             <Gif urls={urls}/>
        </div>)
    }

}
export default App;
