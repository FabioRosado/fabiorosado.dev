import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WritingCard from "../components/blog"


const CheatSheets = (props) => {
    const cheatsheets = props.data.cheatsheets

    console.log(cheatsheets)

    return (
        <Layout>
            <SEO title="FabioRosado | Projects" description="Projects done by FabioRosado" />
            <section className="blog-post">
                <div className="post-header">
                    <h1 className="large white-text">Projects</h1>
                </div>
                <section className="projects-container">
                    {cheatsheets.nodes.map((cheatsheet) =>
                        <WritingCard post={cheatsheet} key={cheatsheet.frontmatter.title} />
                    )}
                </section>
            </section>
        </Layout>
    )
}

export default CheatSheets

export const pageQuery = graphql`
    query {
        cheatsheets: allMdx(filter: {frontmatter: {categories: {eq: "cheatsheet"}}}) {
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