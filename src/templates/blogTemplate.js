import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Template extends React.Component {
    render() {
        const { markdownRemark } = this.props.data
        const { frontmatter, html, fields } = markdownRemark
        return (
            <Layout>
                <SEO title={`FabioRosado | ${frontmatter.title}`} description={frontmatter.excerpt} />
                <section className="blog-post">
                    <div className="post-header">
                        <h3 className="white-text">{frontmatter.categories}</h3>
                        <h1 className="white-text larger">{frontmatter.title}</h1>
                        <p className="white-text">
                            <span className="author"><i className="far fa-user"/> {frontmatter.author || `FabioRosado`}</span>
                            <span className="time"><i className="far fa-clock"/> {frontmatter.date}</span>
                            <span className="time"><i className="far fa-eye"/> {fields.readingTime.text}</span>
                        </p>
                    </div>
                    <div className="background"></div>
                    <div className="post-area">
                        <div className="text-container">
                        <h1 className="dark-text">{frontmatter.subtitle}</h1>
                        <div dangerouslySetInnerHTML={{__html: html }} />
                        </div>
                    </div>
                    </section>
            </Layout>
        )
    }
}

export default Template


export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
                        fluid(maxWidth: 1250, maxHeight: 400) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            fields {
                readingTime {
                    text
                }
            }
            html
        }
    }
`