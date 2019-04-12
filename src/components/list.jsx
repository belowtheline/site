import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import propTypes from 'prop-types'
import Option from './option'

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

List.propTypes = {
    voteData: propTypes.object.isRequired,
    order: propTypes.array.isRequired,
}

export default List
