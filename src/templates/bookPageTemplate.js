import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Placeholder from "../components/placeholderText"
import { ogImageUrl } from "../components/utils"


const Template = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                fabiorosado: file(relativePath: {eq: "FabioRosado.png"}) {
                    childImageSharp {
                        fixed(width: 200, height: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            allMdx {
                nodes {
                    slug
                    frontmatter {
                        date(formatString: "dddd Mo, MMM YYYY")
                    }
                }
            }
         }
        `)

    const { frontmatter } = props.pageContext
    console.log(data.allMdx.nodes)
    const [postInformation] = data.allMdx.nodes.filter(post => {
        if (post.slug === frontmatter.slug) {
            return post
        }
    })


    return (
        <Layout>
            <SEO
                title={`FabioRosado | ${frontmatter.title}`}
                description={`Book notes on ${frontmatter.title}}`}
                image={ogImageUrl("FabioRosado", "fabiorosado.dev", `Book notes on ${frontmatter.title}`)} />
            <section className="blog-post">
                <div className="post-header">
                    <h3 className="category-text">{frontmatter.author}</h3>
                    <h1 className="white-text larger">{frontmatter.title}</h1>
                    <p className="white-text metadata">
                        <span className="metadata-icons"><i className="fas fa-book-open orange-text" />Progress: {frontmatter.progress}</span>
                        <span className="metadata-icons"><i className="far fa-clock orange-text" />Last update: {postInformation.frontmatter.date}</span>
                    </p>
                </div>
                <div className="background" />
                <article className="post-area">
                    <div className="text-container">
                        <div className="article">
                            {props.children ? props.children :
                                <Placeholder
                                    message={
                                        frontmatter.progress === "0%" ?
                                            "This book doesn't contain any notes because it's still in my to read list. If you think I should pick this one next, please let me know!" :
                                            "This notes section is currently empty. They will be uploaded soon..."} />}
                        </div>
                    </div>
                </article>

            </section>


        </Layout>
    )
}


export default Template