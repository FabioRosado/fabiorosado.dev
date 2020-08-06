import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimilarArticlesList from "../components/SimilarArticles/SimilarArticlesList"
import Webmentions from "../components/webmentions/webmentionsComponent"
import MentionsCounter from "../components/webmentions/counter"


const Template = (props) => {

    console.log(props.data)

    return (
        <Layout>
            <SEO title={`FabioRosado | ${frontmatter.title}`} description={frontmatter.excerpt} />
            Hi               
       </Layout>
    )
}


export default Template

