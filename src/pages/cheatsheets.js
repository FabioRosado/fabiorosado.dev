import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CheatsheetCard from "../components/cheatsheet"


const CheatSheets = (props) => {
    const cheatsheets = props.data.cheatsheets

    return (
        <Layout>
            <SEO title="FabioRosado | Projects" description="Projects done by FabioRosado" />
            <section className="blog-post">
                <div className="post-header">
                    <h1 className="large white-text">Cheatsheets</h1>
                </div>
                <section className="projects-container">
                    {cheatsheets.nodes.map((cheatsheet) =>
                        <CheatsheetCard post={cheatsheet} key={cheatsheet.frontmatter.title} />
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
                    tags
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