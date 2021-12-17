import React from "react";

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Book = (props) => {
    const { frontmatter } = props.book

    return (
        <div className="flex book">
            <div className="book-cover">
                <GatsbyImage className="book-cover" image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.title} />
            </div>
            <div className="flex flex-col pl-6">
                <p className="my-0 red">Title:</p>
                <p className="my-0">{frontmatter.title}</p>
                <p className="my-0 red">Author:</p>
                <p className="my-0">{frontmatter.author}</p>
                {frontmatter.progress === "0%" ? "" : <>
                    <p className="red my-0">Progress:</p>
                    <div className="mt-0">
                        <div className="progress-bar-background">
                            <span style={{ width: frontmatter.progress }} className="progress-bar" />
                        </div>
                        {frontmatter.progress}
                    </div>
                    <div className="flex flex-col mt-2">
                        <Link to={frontmatter.slug} className="full-button flex justify-center">Read my notes</Link>
                    </div>
                </>
                }

            </div>
        </div>
    )
}

export default Book