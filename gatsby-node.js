/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogTemplate = path.resolve(`src/templates/blog.js`)

    return graphql(`
    {
        allMdx(
            sort: { order: DESC, fields: frontmatter___date}
        ){
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        subtitle
                        categories
                        excerpt
                        category_icon
                        author
                        source
                        tag
                        tag_icon
                        tags
                        tech
                    }
                    id
                    body
                    timeToRead
                }
            }
        }
    }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        const posts = result.data.allMdx.edges

        posts.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                }
            })
        })

    })
}

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === `Mdx`) {
//         const value = createFilePath({ node, getNode})

//         createNodeField({
//             name: `slug`,
//             node,
//             value: value
//         })
//     }
// }