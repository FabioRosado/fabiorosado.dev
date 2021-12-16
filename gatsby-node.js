/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === `Mdx`) {
//         const slug = createFilePath({ node, getNode, basePath: "pages" })

//         createNodeField({
//             name: `slug`,
//             node,
//             value: slug
//         })
//     }
// }