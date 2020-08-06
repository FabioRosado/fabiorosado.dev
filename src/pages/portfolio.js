import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolio"


class Portfolio extends Component {

    render() {
        const projects = this.props.data.projects
        return(
            <Layout>
            <SEO title="FabioRosado | Portfolio" description="Projects done by FabioRosado" />
            <section className="blog-post">
              <div className="post-header">
                <h1 className="large white-text">Portfolio</h1>
              </div>
                <section className="projects-container">
                    {projects.nodes.map((project) => 
                      <PortfolioCard project={project} key={project.frontmatter.title} /> 
                      )}
                </section>
                </section>
            </Layout>
        )
    }
}

export default Portfolio


export const pageQuery = graphql`
  query {
    projects: allMdx(
      filter: {frontmatter: {categories: {eq: "Projects"}}}, 
      sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
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