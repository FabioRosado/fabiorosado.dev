import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import WritingCard from '../components/blog'
import SearchBar from "../components/search/search-bar"


const Blog = (props) => {

  const allArticles = props.data.blog.nodes
  const [articles, setArticles] = useState(allArticles)

  const filterArticles = (category) => {

    const filtered = allArticles.filter(article => {

      if (article.frontmatter.categories === category) {
        if (allArticles.length !== articles.length && !articles.includes(category)) {
          return article
        }
        return article
      }
    })

    setArticles(filtered)
  }

  const getAllArticles = () => {
    setArticles(allArticles)
  }
  const posts = props.data.blog

  return (
    <Layout>
      <SEO title="FabioRosado | Articles" description="I write about code and share quick coding tips." />
      <section className="blog-post">
        <div className="post-header">
          <h1 className="large white-text">Articles</h1>
          <SearchBar searchIndex={props.data.siteSearchIndex.index} />
          <div className="filter-search">
            <button onClick={() => getAllArticles()} className="full-button small-margin-right margin-top">All</button>
            {posts.allCategories.map(category =>
              <button key={category.fieldValue} onClick={() => filterArticles(category.fieldValue)} className="full-button small-margin-right margin-top">
                {category.fieldValue}
              </button>
            )}
          </div>
        </div>
        <section className="page-container">
          {articles.map(article => <WritingCard post={article} key={article.frontmatter.title} />)}
        </section>

      </section>
    </Layout>
  )
}


export default Blog


export const pageQuery = graphql`
  query {
    blog: allMdx(
      filter: {frontmatter: {categories: {nin: ["Books", "Projects", "Cheatsheet"]}}}, 
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
            gatsbyImageData
          }
        }
      }
    }
    allCategories: group(field: frontmatter___categories) {
      fieldValue
    }
  }
  siteSearchIndex {
    index
  }
}
`