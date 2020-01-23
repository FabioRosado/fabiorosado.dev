import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from '../components/layout'


class Blog extends Component {

    render() {
        const posts = this.props.data.blog
        return(
            <Layout>
            <h1 className="section center-text white-text">Blog</h1>
                <section class="page-container">
                    {posts.nodes.map((post) => {
                        return (
                            <div class="post-card" key={post.frontmatter.title}>
                            <Link to={post.frontmatter.path}>
                                <div class="description">
                                    <p className="white-text small-font margin-bottom">{ post.frontmatter.excerpt }</p>
                                    <span className="trans-button small-font">Read More <i className="fas fa-angle-double-right"></i></span>
                                </div>
                                <div className="card-title">
                                    <span className="category"><i className={post.frontmatter.category_icon}></i> {post.frontmatter.categories}</span>
                                    <h4 className="white-text">{post.frontmatter.title}</h4>
                                </div>
                                <Img className="post-image" fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} />
                            </Link>
                        </div>
                        )
                    } )}
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
        path
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