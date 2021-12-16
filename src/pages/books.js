import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/books"


const Books = (props) => {
    const books = props.data.books.nodes

    return (
        <Layout>
            <SEO title="FabioRosado | Books" description="Books that I am currently reading." />
            <section className="blog-post">
                <div className="post-header">
                    <h1 className="large white-text">Books</h1>
                </div>
                <section className="page-container">
                    {books.map(book => <Book key={book.frontmatter.title} book={book} />)}
                </section>
            </section>
        </Layout>
    )
}

export default Books

export const pageQuery = graphql`
    query {
        books: allMdx(filter: {frontmatter: {categories: {eq: "books"}}}) {
            nodes {
                frontmatter {
                    author
                    progress
                    title
                    amazon
                    slug
                    finished
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