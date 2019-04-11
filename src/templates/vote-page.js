import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import List from '../components/list'
import Result from '../components/result'

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
    width: 15em;
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

// Cells / candidate preferences
const initialData = {
    'dingo-party-bob-doggy': {
        given: 'Bob',
        surname: 'Doggy',
        id: 'dingo-party-bob-doggy',
        partyId: 'dpa',
        description: 'Some desc here blah',
        order: 1,
    },
    'dingo-party-frank-kangaroo': {
        given: 'Frank',
        surname: 'Kangaroo',
        id: 'dingo-party-frank-kangaroo',
        partyId: 'dpa',
        description: 'Some desc here blah',
        order: 2,
    },
    'akp-sue-koala': {
        given: 'Sue',
        surname: 'Koala',
        id: 'dingo-party-sue-koala',
        partyId: 'akp',
        description: 'Some desc here blah',
        order: 3,
    },
    'akp-marg-koala': {
        given: 'Marg',
        surname: 'Koala',
        id: 'dingo-party-marg-koala',
        partyId: 'akp',
        description: 'Some desc here blah',
        order: 4,
    },
    'akp-francois-budgie': {
        given: 'Francois',
        surname: 'Budgie',
        id: 'dingo-party-francois-budgie',
        partyId: 'akp',
        description: 'Some desc here blah',
        order: 5,
    },
}

// Columns
const initialPartyData = {
    akp: {
        name: 'Australian Koala Party',
        candidates: ['akp-francois-budgie', 'akp-marg-koala', 'akp-sue-koala'],
    },
    dpa: {
        name: 'The dingo party of Australia',
        candidates: ['dingo-party-bob-doggy', 'dingo-party-frank-kangaroo'],
    },
}

const initialOrder = [
    'dingo-party-bob-doggy',
    'dingo-party-frank-kangaroo',
    'akp-sue-koala',
    'akp-francois-budgie',
    'akp-marg-koala',
]

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            data: initialData,
            partyData: initialPartyData,
            order: initialOrder,
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
            <DragDropContext onDragEnd={this.onDragEnd}>
                <FullWidth>
                    <div>
                        <h1>Vote page</h1>
                    </div>
                    <Container>
                        <ColData>
                            <List
                                voteData={this.state.data}
                                order={this.state.order}
                            />
                        </ColData>
                        <ColResult>
                            <Result
                                voteData={this.state.data}
                                partyData={this.state.partyData}
                            />
                        </ColResult>
                    </Container>
                </FullWidth>
            </DragDropContext>
        )
    }
}

// export const query = graphql`
//     query($slug: String!) {
//         statesYaml(fields: { slug: { eq: $slug } }) {
//             name
//         }
//     }
// `
