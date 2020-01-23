import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Template extends React.Component {
    render() {
        const { markdownRemark } = this.props.data
        const { frontmatter, html } = markdownRemark
        return (
            <Layout>
                <SEO title={frontmatter.title} />
                <section class="blog-post">
                    <div class="image-container">
                        <img class="post-image" src={frontmatter.image}  alt={ frontmatter.title} />
                    </div>
                    <div class="post-header">
                        <h3 class="white-text">{frontmatter.categories}</h3>
                        <h1 class="white-text larger">{frontmatter.title}</h1>
                        <p class="white-text">
                            <span class="author"><i class="far fa-user"></i> {frontmatter.author || `FabioRosado`}</span>
                            <span class="time"><i class="far fa-clock"></i> {frontmatter.date}</span>
                        </p>
                    </div>
                    <div class="background"></div>
                    <div class="post-area">
                        <div class="text-container">
                        <h1 class="dark-text">{frontmatter.subtitle}</h1>
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
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                path
                title
                subtitle
                image
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
            }
            html
        }
    }
`