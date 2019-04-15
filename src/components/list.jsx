import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import propTypes from 'prop-types'
import Option from './option'

const Ul = styled.ul`
    margin: 0;
    padding: 0.5em;
    list-style: none;
    background: ${props => (props.isDragging ? 'turquoise' : 'white')};
    transition: background-color 0.25s ease;
`

const List = ({ order, voteData }) => (
    <Droppable droppableId="basic">
        {(provided, snapshopt) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
                <Ul isDragging={snapshopt.isDraggingOver}>
                    {order.map((val, ind) => (
                        <Option
                            key={val}
                            draggableId={val}
                            index={ind}
                            val={voteData[val]}
                        />
                    ))}
                    {provided.placeholder}
                </Ul>
            </div>
        )}
    </Droppable>
)

List.propTypes = {
    voteData: propTypes.object.isRequired,
    order: propTypes.array.isRequired,
}

export default List
