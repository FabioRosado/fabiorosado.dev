import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/books"


const Books = (props) => {
    const books = props.data.books.nodes
    const finishedBooks = []
    const currentlyReading = []
    const readingList = []
    books.map(book => {
        if (book.frontmatter.finished === true) {
            finishedBooks.push(book)
        } else if (book.frontmatter.progress === "0%" && book.frontmatter.finished === false) {
            readingList.push(book)
        } else {
            currentlyReading.push(book)
        }
    })

    return (
        <Layout>
            <SEO title="FabioRosado | Books" description="Books that I am currently reading." />
            <section className="blog-post">
                <div className="post-header">
                    <h1 className="large white-text">Books</h1>
                </div>

                <h2 className="green large center-text padding-top">Currently Reading</h2>
                <div className="projects-container">
                    {currentlyReading.map(book =>
                        <Book key={book.frontmatter.title} book={book} />
                    )}
                </div>
                <h2 className="green large center-text">Books finished</h2>
                <div className="projects-container m-0">
                    {finishedBooks.map(book => <Book key={book.frontmatter.title} book={book} />)}
                </div>
                <h2 className="green large center-text">Reading List</h2>
                <div className="projects-container">
                    {readingList.map(book => <Book key={book.frontmatter.title} book={book} />)}
                </div>

            </section>
        </Layout>
    )
}

export default Books

export const pageQuery = graphql`
    query {
        books: allMdx(filter: {frontmatter: {categories: {eq: "Books"}}}) {
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