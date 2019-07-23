import React from 'react'
import {Button, Col, Container, Row} from 'reactstrap'
import {Input} from "./Input";
import {isEmpty} from "ramda";

export const HeadBar = ({urls, searchedGif, onInputChange, onStartSearchClick, onToggleColumns}) => {
    return <Container>
        <Row>
            <Col><h1>My Giff</h1>
            </Col>
        </Row>
        <Row>
            <Col> <Input className='search' placeholder='Search for giffs...'
                         onChange={onInputChange}
                         value={searchedGif}/></Col>
            <Col>

                <Button color='primary' onClick={onStartSearchClick}
                        disabled={isEmpty(searchedGif)}>Search!!</Button>
                <Button color='secondary' className='toggle-test' onClick={onToggleColumns}
                        disabled={isEmpty(urls)}>Toggle columns
                </Button>
            </Col>
        </Row>
    </Container>
}