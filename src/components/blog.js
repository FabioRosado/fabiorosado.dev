import React from "react"

import { Link } from 'gatsby'
import Img from "gatsby-image"


const writingCard = (props) => {
    const { frontmatter } = props.post
    return (
        <div className="post-card" key={frontmatter.title}>
            <Link to={`/${frontmatter.slug}`}>
            <div className="description">
                <p className="white-text small-font margin-bottom">{frontmatter.excerpt}</p>
                <span className="trans-button small-font">Read More <i className="fas fa-angle-double-right"></i></span>
            </div>
            <div className="card-title">
                <span className="category"><i className={`${frontmatter.category_icon}`}></i> {frontmatter.categories}</span>
                <h4 className="white-text">{frontmatter.title}</h4>
            </div>
                <Img className="post-image" fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} />
            </Link>
        </div>
    )
}

export default writingCard