import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
    const division = data.divisionsYaml
    return (
        <Layout>
            <div>
                <h1>{division.name}</h1>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        divisionsYaml(fields: { slug: { eq: $slug } }) {
            name
        }
    }
`
