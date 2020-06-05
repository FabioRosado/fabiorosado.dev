import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { SimilarArticlesFactory } from './SimilarArticlesFactory'

import WritingCard from "../blog"


const getPostsFromQuery = (posts) => {
    if (posts) {
        return posts.nodes
            .map(edge => edge)
            .map(node => Object.assign({}, node, node.fields))
    }
    return []
}

const SimilarArticlesComponent = ({ articles }) => 
    <section className="section">
        <h3 className="margin-bottom">You might also like these</h3>
        <div className="similar-articles">
            {articles.map((article, i) => {
                return (
                    <WritingCard  post={article.article} key={i} />  
                )}
            )}
        </div>
    </section>

export default (props) => (
    <StaticQuery
        query={
            graphql`
                query {
                    posts: allMarkdownRemark(
                    filter: {frontmatter: {categories: {ne: "Projects"}}}, 
                    sort: {fields: [frontmatter___date], order: DESC}) {
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
                            fluid {
                            ...GatsbyImageSharpFluid
                            }
                        }
                        }
                    }
                    }
                }
            }
        `}
        render={data => {
            const {categories, currentArticlePath} = props
            
            const articles = getPostsFromQuery(data.posts)

            const SimilarArticles = new SimilarArticlesFactory(
                articles, currentArticlePath
            )
            .setCategories(categories)
            .getArticles()
            
            return (
                <SimilarArticlesComponent articles={SimilarArticles} />
            )
        }}
    />
)