import React from 'react'

import DivisionSelector from '../components/division-selector'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Vote your way!</h1>
    <p>Some verbiage about voting here.</p>
    <DivisionSelector />
  </Layout >
)

export default IndexPage
