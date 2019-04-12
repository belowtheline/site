import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Ul = styled.ul`
    margin: 0;
    padding: 0.5em;
    list-style: none;
    background: ${props => (props.isDragging ? 'turquoise' : 'white')};
    transition: background-color 0.25s ease;
`

const Li = styled.li`
    display: flex;
    padding: 0.25em;
    border: 1px solid black;
    background-color: ${props => (props.isDragging ? 'purple' : 'white')};
    color: ${props => (props.isDragging ? 'white' : 'black')};
    align-items: center;
    transition: background-color 0.25s ease;
`

const PrefNumber = styled.span`
    display: inline-block;
    width: 2em;
    height: 2em;
    border: 2px solid black;
    margin-right: 0.25em;
    text-align: center;
`

const Name = styled.span``

const Option = ({ val, draggableId, index }) => (
    <Draggable draggableId={draggableId} index={index}>
        {(provided, snapshot) => (
            <Li
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                key={draggableId}
                isDragging={snapshot.isDragging}
            >
                <PrefNumber>{index + 1}</PrefNumber>
                {val.surname}, {val.given}
            </Li>
        )}
    </Draggable>
)

class List extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Droppable droppableId="basic">
                {(provided, snapshopt) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Ul isDragging={snapshopt.isDraggingOver}>
                            {this.props.order.map((val, ind) => (
                                <Option
                                    key={val}
                                    draggableId={val}
                                    index={ind}
                                    val={this.props.voteData[val]}
                                />
                            ))}
                            {provided.placeholder}
                        </Ul>
                    </div>
                )}
            </Droppable>
        )
    }
}

export default List
