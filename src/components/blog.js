import React from "react"

import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"


const writingCard = (props) => {
    const { frontmatter } = props.post
    console.log(frontmatter)
    return (
        <div className="post-card" key={frontmatter.title}>
            <Link to={`/blog/${frontmatter.slug}`}>
                <div className="description">
                    <p className="white-text small-font margin-bottom">{frontmatter.excerpt}</p>
                    <span className="trans-button small-font">Read More <i className="fas fa-angle-double-right"></i></span>
                </div>
                <div className="card-title">
                    <span className="category"><i className={`${frontmatter.category_icon}`}></i> {frontmatter.categories}</span>
                    <h4 className="white-text">{frontmatter.title}</h4>
                </div>
                <GatsbyImage className="post-image" image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.title} />
            </Link>
        </div>
    )
}

export default writingCard