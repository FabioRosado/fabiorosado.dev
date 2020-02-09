import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'


class Portfolio extends Component {

    render() {
        const projects = this.props.data.projects
        return(
            <Layout>
            <h1 className="section center-text white-text">Portfolio</h1>
                <section className="projects-container">
                    {projects.nodes.map((project) => {
                        return (
                            <div className="project-card drop-shadow" key={project.frontmatter.title}>
                            <div className="category small-font">
                                <i className={ project.frontmatter.tag_icon }></i> {project.frontmatter.tag}
                            </div>
                            <div className="project-name">
                                <h3 className="white-text">{project.frontmatter.title}</h3>
                            </div>
                            <div className="description">
                                <div className="white-text small-font">
                                    { project.frontmatter.excerpt }
                                </div>
                            </div>
                            <div className="buttons">
                                <Link to={ project.frontmatter.path } className="trans-button"><i className="fas fa-folder-open"></i> Read more</Link>
                                <a href={ project.frontmatter.source} className="trans-button margin-left" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Source Code</a>
                            </div>
                            <Img className="project-image" fluid={project.frontmatter.image.childImageSharp.fluid} alt={project.frontmatter.title} />
                            <div className="tools-used spaced-text">
                                <p>{project.frontmatter.tech }</p>
                            </div>
                            </div>
                        )
                    } )}
                </section>
            </Layout>
        )
    }
}

export default Portfolio


export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
      filter: {frontmatter: {categories: {eq: "Projects"}}}, 
      sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
      frontmatter {
        path
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
        date(formatString: "dddd Mo, MMM YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`