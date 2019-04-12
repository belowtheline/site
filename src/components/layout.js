import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from './header'
import './reset.css'

const Layout = ({ children, noColumn }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto"
                        rel="stylesheet"
                    />
                </Helmet>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div
                    style={
                        noColumn
                            ? null
                            : {
                                  margin: `0 auto`,
                                  maxWidth: 960,
                                  padding: `0px 1.0875rem 1.45rem`,
                                  paddingTop: 0,
                              }
                    }
                >
                    {children}
                    <footer>
                        © 2018, Built with{' '}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
