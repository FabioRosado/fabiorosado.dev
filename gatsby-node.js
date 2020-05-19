/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)

    return graphql(`
    {
        allMarkdownRemark(
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
                }
            }
        }
    }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogTemplate,
                context: {
                    slug: node.frontmatter.slug
                }
            })
        })

    })
}
