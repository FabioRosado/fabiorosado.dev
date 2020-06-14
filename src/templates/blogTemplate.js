import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimilarArticlesList from "../components/SimilarArticles/SimilarArticlesList"
import Webmentions from "../components/webmentions/webmentionsComponent"
import MentionsCounter from "../components/webmentions/counter"


const Template = (props) => {
    const [totalMentions, setTotalMentions] = useState(0)
    const [show, setShow] = useState(false)
    const { markdownRemark } = props.data
    const { frontmatter, html, fields } = markdownRemark

    useEffect(() => {
        const fetchTotalMentions = async () => {
            const resp = await fetch(
                `https://webmention.io/api/count.json?target=https://fabiorosado.dev/${frontmatter.slug}/`
            )

        const { count } = await resp.json()

        setTotalMentions(count)
        }
        fetchTotalMentions()
    }, [frontmatter.slug])


    return (
        <Layout>
            <SEO title={`FabioRosado | ${frontmatter.title}`} description={frontmatter.excerpt} />
            <section className="blog-post">
                <div className="post-header">
                    <h3 className="white-text">{frontmatter.categories}</h3>
                    <h1 className="white-text larger">{frontmatter.title}</h1>
                    <p className="white-text metadata">
                        <span className="metadata-icons"><i className="far fa-user"/> {frontmatter.author || `FabioRosado`}</span>
                        <span className="metadata-icons"><i className="far fa-clock"/> {frontmatter.date}</span>
                        <span className="metadata-icons"><i className="far fa-eye"/> {fields.readingTime.text}</span>
                        <MentionsCounter postUrl={`https://fabiorosado.dev/${frontmatter.slug}`} styles="metadata-icons" />
                    </p>
                </div>
                <div className="background" />
                <div className="post-area">
                    <div className="text-container">
                        <div className="article">
                            <h1 className="dark-text">{frontmatter.subtitle}</h1>
                            <div dangerouslySetInnerHTML={{__html: html }} />
                    </div>
                    <div className="webmentions-container">
                        <h3>Webmentions</h3>
                        <div>
                            <MentionsCounter postUrl={`https://fabiorosado.dev/${frontmatter.slug}`} styles="padding-bottom" />
                        </div>
                        <button 
                            className="full-button" 
                            aria-label="Show all webmentions"
                            onClick={() => setShow(!show)}
                        >
                            Show {totalMentions} Mentions
                        </button>
                    </div>

                    <Webmentions slug={frontmatter.slug} show={`${show ? "visible" : "invisible"}`}/>

                    </div>
                </div>
                </section>
                {frontmatter.categories === "Projects" ? "" : <SimilarArticlesList categories={frontmatter.categories} tags={frontmatter.tags} currentArticlePath={frontmatter.slug} />}
                
        </Layout>
    )
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