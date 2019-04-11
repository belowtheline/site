import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const Li = styled.li`
    padding: 0.25em;
    border: 1px solid black;
    background-color: white;
`

const Option = ({ val, draggableId, index }) => (
    <Draggable draggableId={draggableId} index={index}>
        {provided => (
            <Li
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                key={draggableId}
            >
                {index + 1} {val.surname}, {val.given}
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
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Ul>
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
