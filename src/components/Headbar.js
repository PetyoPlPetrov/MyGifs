import React from 'react'
import {
    Button,
    Container,
} from 'reactstrap'
import { Input } from './Input'
import { isEmpty } from 'ramda'

export const HeadBar = ({ urls, searchedGif, onInputChange, onStartSearchClick, onToggleColumns }) => {
    return <Container>
        <h1>My Giff</h1>
        <div className='header'>
            <Input className='search' placeholder='Search for giffs...'
                   onChange={onInputChange}
                   value={searchedGif}/>
            <div className='header-buttons'>
                <Button color='primary' onClick={onStartSearchClick}
                         disabled={isEmpty(searchedGif)}>Search!!</Button>
                <Button color='secondary' className='toggle-test' onClick={onToggleColumns}
                        disabled={isEmpty(urls)}>Toggle columns
                </Button>
            </div>
        </div>
    </Container>
}