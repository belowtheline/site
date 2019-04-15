import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import List from '../components/list'
import {
    initialCandidateData,
    initialPartyData,
    initialOrderData,
} from '../data/initial-data'
import Result from '../components/result'
import Layout from '../components/layout'

const FullWidth = styled.div`
    width: 100%;
    padding: 1em;
`

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;

    @media screen and (min-width: 50em) {
        flex-flow: row nowrap;
    }
`

const ColData = styled.div`
    width: 100%;
    padding: 0 0.5em 0.5em;

    @media screen and (min-width: 50em) {
        width: 15em;
    }
`

const ColResult = styled.div`
    width: 100%;

    @media screen and (min-width: 50em) {
        width: calc(100% - 15em);
    }
`

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            data: initialCandidateData,
            partyData: initialPartyData,
            order: initialOrderData,
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    onDragEnd(result) {
        const { source, destination, draggableId } = result

        if (!destination) return
        if (source.index === destination.index) return

        const orderedData = { ...this.state.data }
        const newOrder = Array.from(this.state.order)
        newOrder.splice(source.index, 1)
        newOrder.splice(destination.index, 0, draggableId)

        // Update order in data
        newOrder.map((val, ind) => (orderedData[val].order = ind + 1))

        const newState = {
            ...this.state,
            data: { ...orderedData },
            order: [...newOrder],
        }

        this.setState(newState)
    }

    render() {
        return (
            <Layout noColumn={true}>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <FullWidth>
                        <div>
                            <h1>Vote</h1>
                        </div>
                        <Container>
                            <ColData>
                                <h2>1. Set order here</h2>
                                <List
                                    voteData={this.state.data}
                                    order={this.state.order}
                                />
                            </ColData>
                            <ColResult>
                                <h2>2. What your vote looks like here</h2>
                                <Result
                                    voteData={this.state.data}
                                    partyData={this.state.partyData}
                                />
                            </ColResult>
                        </Container>
                    </FullWidth>
                </DragDropContext>
            </Layout>
        )
    }
}

// To Do - Wire in live data
// export const query = graphql`
//     query($slug: String!) {
//         statesYaml(fields: { slug: { eq: $slug } }) {
//             name
//         }
//     }
// `
