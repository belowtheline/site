import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Vote from '../components/vote'
import styled from 'styled-components'

const FullWidth = styled.div`
    width: 100%;
    padding: 1em;
`

export default ({ data }) => {
    // const state = data.statesYaml
    return (
        <FullWidth>
            <div>
                <h1>Vote page</h1>
            </div>

            <Vote />
        </FullWidth>
    )
}

export const query = graphql`
    query($slug: String!) {
        statesYaml(fields: { slug: { eq: $slug } }) {
            name
        }
    }
`
