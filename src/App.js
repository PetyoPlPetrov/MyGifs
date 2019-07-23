import React from 'react'
import { isEmpty } from 'ramda'
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
    createResetGifsCommand,
    createToggleColumnSCommand
} from './common/'
import { Input } from './components/Input'
import {
    loadGifs,
    sleep
} from './fetch'
import Gif from './components/Gif'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchedGif: '',
            urls: [],
            offset: 1,
            limit: 16,
            columns: false
        }
        this.container = React.createRef()
        this.dispatchCommand = this.dispatchCommand.bind(this)
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = async () => {
        const isScrolledtoTheBottom = this.container.current.getBoundingClientRect().bottom <= window.innerHeight
        if (isScrolledtoTheBottom) {
            await this.searchGifs()
        }
    }

    onStartSearchClick = async () => {
        this.dispatchCommand(createResetGifsCommand())
        await this.searchGifs()
    }

    searchGifs = async () => {
        const { searchedGif, offset, limit, loading } = this.state
        if (loading) {
            return
        }
        this.dispatchCommand(createParamsCommand(LOADING)(true))
        await sleep(3000)
        const urls = await loadGifs({ query: searchedGif, limit, offset })
        this.dispatchCommand(createParamsCommand(SET_OFFSET)(offset + limit))
        this.dispatchCommand(createParamsCommand(LOADING)(false))
        this.dispatchCommand(createSetSearchedGifsCommand(urls))
    }

    dispatchCommand(command) {
        this.setState(handleCommand(command))
    }

    onInputChange = (e) => {
        this.dispatchCommand(createInputChangeCommand(e.target.value))
    }

    onToggleColumns = () => {
        this.dispatchCommand(createToggleColumnSCommand(!this.state.columns))

    }

    render() {
        const { urls, loading, searchedGif, columns } = processProps(this.state)
        return (
            <div ref={this.container}>
                <Input className='container' placeholder='Search for giffs...' onChange={this.onInputChange}
                       value={searchedGif}/>
                <button onClick={this.onStartSearchClick} disabled={isEmpty(searchedGif)}>Search</button>
                <button onClick={this.onToggleColumns} disabled={isEmpty(urls)}>Toggle columns</button>
                <Gif urls={urls} isLoading={loading} columns={columns}/>
            </div>)
    }
}

export default App
