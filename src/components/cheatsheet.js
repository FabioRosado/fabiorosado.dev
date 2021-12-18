import React from "react"

import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"


const CheatsheetCard = (props) => {
    const { frontmatter } = props.post
    return (
        <div className="post-card" key={frontmatter.title}>
            <Link to={`/cheatsheets/${frontmatter.slug}`}>
                <div className="description cheatsheet">
                    <p className="white-text small-font margin-top margin-left">{frontmatter.excerpt}</p>
                    <span className="trans-button small-font">Read More <i className="fas fa-angle-double-right"></i></span>
                </div>
                <div className="card-title">
                    <span className="category"><i className={`${frontmatter.category_icon}`}></i> {frontmatter.tags[0]}</span>
                    <h4 className="white-text">{frontmatter.title}</h4>
                </div>
                <GatsbyImage className="post-image" image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.title} />
            </Link>
        </div>
    )
}

export default CheatsheetCard