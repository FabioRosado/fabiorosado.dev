import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimilarArticlesList from "../components/SimilarArticles/SimilarArticlesList"
import Webmentions from "../components/webmentions/webmentionsComponent"
import MentionsCounter from "../components/webmentions/counter"
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
                    timeToRead
                    slug
                    frontmatter {
                        date(formatString: "dddd Mo, MMM YYYY")
                    }
                }
            }
         }
        `)

    const [totalMentions, setTotalMentions] = useState(0)
    const [show, setShow] = useState(false)
    const { frontmatter } = props.pageContext

    const [postInformation] = data.allMdx.nodes.filter(post => {
        if (post.slug === frontmatter.slug) {
            return post
        }
    })

    const { timeToRead } = postInformation
    const date = postInformation.frontmatter.date || "Thursday 7th, Jul 2020"

    useEffect(() => {
        const fetchTotalMentions = async () => {
            const resp = await fetch(
                `https://webmention.io/api/count.json?target=https://fabiorosado.dev/blog/${frontmatter.slug}/`
            )

            const { count } = await resp.json()

            setTotalMentions(count)
        }
        fetchTotalMentions()
    }, [frontmatter.slug])


    return (
        <Layout>
            <SEO
                title={`FabioRosado | ${frontmatter.title}`}
                description={frontmatter.excerpt}
                image={ogImageUrl("FabioRosado", "fabiorosado.dev", frontmatter.title)} />
            <section className="blog-post">
                <div className="post-header">
                    <h3 className="category-text">{frontmatter.categories}</h3>
                    <h1 className="white-text larger">{frontmatter.title}</h1>
                    <p className="white-text metadata">
                        <span className="metadata-icons"><i className="far fa-user orange-text" /> {frontmatter.author || `FabioRosado`}</span>
                        <span className="metadata-icons"><i className="far fa-clock orange-text" /> {date}</span>
                        <span className="metadata-icons"><i className="far fa-eye orange-text" /> {timeToRead > 1 ? `${timeToRead} mins to read` : `${timeToRead} min to read`} </span>
                        <MentionsCounter postUrl={`https://fabiorosado.dev/blog/${frontmatter.slug}`} styles="metadata-icons" />
                    </p>
                </div>
                <div className="background" />
                <article className="post-area">
                    <div className="text-container">
                        <div className="article">
                            <h1 className="dark-text">{frontmatter.subtitle}</h1>
                            {props.children}
                        </div>
                        <div className="webmentions-container">
                            <h3>Webmentions</h3>
                            <div>
                                <MentionsCounter postUrl={`https://fabiorosado.dev/blog/${frontmatter.slug}`} styles="padding-bottom" />
                            </div>
                            <button
                                className="full-button"
                                aria-label="Show all webmentions"
                                onClick={() => setShow(!show)}
                            >
                                Show {totalMentions} Mentions
                        </button>
                        </div>

                        <Webmentions slug={frontmatter.slug} show={`${show ? "visible" : "invisible"}`} />

                    </div>
                </article>
            </section>
            {frontmatter.categories === "Projects" ? "" : <SimilarArticlesList categories={frontmatter.categories} tags={frontmatter.tags} currentArticlePath={frontmatter.slug} />}

            <section className="profile-section">
                <div className="h-card">
                    <Img className="u-photo" fixed={data.fabiorosado.childImageSharp.fixed} alt="FabioRosado" />
                    <a className="p-name u-url" href="https://fabiorosado.dev">FabioRosado</a>
                </div>
                <div className="social">
                    <a href="https://github.com/FabioRosado" aria-label="Link to Github Profile"><i className="fab fa-2x fa-github-square" />FabioRosado</a>
                    <a href="https://twitter.com/FabioRosado_" aria-label="Link to Twitter Profile" rel="me"><i className="fab fa-2x fa-twitter-square" />FabioRosado_</a>
                    <a href="https://twitch.tv/theflyingdev/" aria-label="Link to twitch profile"><i className="fab fa-2x fa-twitch" />TheFlyingDev</a>
                    <a href="https://www.instagram.com/theflyingdev/" aria-label="Link to Instagram Profile"><i className="fab fa-2x fa-instagram" />TheFlyingDev</a>
                </div>
            </section>
        </Layout>
    )
}


export default Template