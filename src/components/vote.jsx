import React, { Component } from 'react'
import styled from 'styled-components'
import Result from './result'
import List from './list'

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;

    @media screen and (min-width: 50em) {
        flex-flow: row nowrap;
    }
`

const ColData = styled.div`
    width: 15em;
    padding: 0 0.5em 0.5em;
`

const ColResult = styled.div`
    width: calc(100% - 15em);
`

class Vote extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container>
                <ColData>
                    <List />
                </ColData>
                <ColResult>
                    <Result />
                </ColResult>
            </Container>
        )
    }
}

export default Vote
