import React from 'react'

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
    createToggleColumnSCommand,
    toggleLayoutColumnClass
} from './common/'
import {
    loadGifs,
    sleep
} from './fetch'
import Gif from './components/Gif'
import Layout from './components/Layout'
import { HeadBar } from './components/Headbar'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchedGif: '',
            urls: [],
            offset: 1,
            limit: 16,
            isOneColumn: false,
            initialPageState: true
        }
        this.container = React.createRef()
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

    dispatchCommand = (command) => {
        this.setState(handleCommand(command))
    }

    onInputChange = (e) => {
        this.dispatchCommand(createInputChangeCommand(e.target.value))
    }

    onToggleColumns = () => {
        this.dispatchCommand(createToggleColumnSCommand(!this.state.isOneColumn))
    }

    render() {
        const { urls, loading, searchedGif, isOneColumn, initialPageState } = processProps(this.state)

        return (
            <div ref={this.container}>
                <HeadBar searchedGif={searchedGif} urls={urls} {...this}/>
                <Layout isLoading={loading} classname={toggleLayoutColumnClass(isOneColumn)}>
                    <Gif urls={urls} initialPageState={initialPageState}/>
                </Layout>
            </div>)
    }
}

export default App
