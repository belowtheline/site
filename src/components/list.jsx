import React, { Component } from 'react'
import styled from 'styled-components'

const ListData = [
    {
        name: 'Bob Doggy',
        id: 'dingo-party-bob-doggy',
        partyId: 'dingo-party',
        description: 'Some desc here blah',
    },
    {
        name: 'Frank Kangaroo',
        id: 'dingo-party-frank-doggy',
        partyId: 'dingo-party',
        description: 'Some desc here blah',
    },
    {
        name: 'Sue Koala',
        id: 'dingo-party-sue-doggy',
        partyId: 'dingo-party',
        description: 'Some desc here blah',
    },
]

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const ListItem = styled.li`
    padding: 0.25em;
    border: 1px solid black;
`

class List extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Ul>
                    {ListData.map((val, ind) => (
                        <ListItem key={ind}>{val.name}</ListItem>
                    ))}
                </Ul>
            </div>
        )
    }
}

export default List
