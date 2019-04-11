import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
    const state = data.statesYaml
    return (
        <Layout>
            <div>
                <h1>{state.name}</h1>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        statesYaml(fields: { slug: { eq: $slug } }) {
            name
        }
    }
`
