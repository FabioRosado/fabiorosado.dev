import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import WritingCard from '../components/blog'


class Blog extends Component {
    render() {
        const posts = this.props.data.blog
        return(
            <Layout>
            <h1 className="section center-text white-text">Writings</h1>
                <section className="page-container">
                    {posts.nodes.map((post) => 
                      <WritingCard post={post} key={post.frontmatter.title} />  
                    )}
                </section>
            </Layout>
        )
    }
}

export default Blog


export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
      filter: {frontmatter: {categories: {ne: "Projects"}}}, 
      sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
      frontmatter {
        slug
        title
        subtitle
        categories
        excerpt
        category_icon
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`