import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import WritingCard from '../components/blog'


class Blog extends Component {
    render() {
        const posts = this.props.data.blog
        return(
            <Layout>
            <SEO title="FabioRosado | Writings" description="I write about code and share quick coding tips." />
              <section className="blog-post">
                <div className="post-header">
                  <h1 className="large white-text">Writings</h1>
                </div>
                  <section className="page-container">
                    {posts.nodes.map((post) => 
                      <WritingCard post={post} key={post.frontmatter.title} />  
                    )}
                  </section>
              
              </section>
            </Layout>
        )
    }
}

export default Blog


export const pageQuery = graphql`
  query {
    blog: allMdx(
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
            gatsbyImageData
          }
        }
      }
    }
  }
}
`