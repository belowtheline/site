const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `StatesYaml`) {
        const slug = createFilePath({ node, getNode, basePath: `states` })
        createNodeField({ node, name: `slug`, value: slug })
    } else if (node.internal.type === `DivisionsYaml`) {
        const slug = createFilePath({ node, getNode, basePath: `divisions` })
        createNodeField({ node, name: `slug`, value: slug })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
        {
          allStatesYaml {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          },
          allDivisionsYaml {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
        ).then(result => {
            result.data.allStatesYaml.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/state-page.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                })
            })
            result.data.allDivisionsYaml.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/division-page.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                })
            })
            resolve()
        })
    })
}
