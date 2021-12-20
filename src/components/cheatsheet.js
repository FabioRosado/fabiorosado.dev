import React from "react"

import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"


const CheatsheetCard = (props) => {
    const { frontmatter } = props.post
    return (
        <div className="cheatsheet-card" key={frontmatter.title}>
            <Link to={`/cheatsheets/${frontmatter.slug}`}>
                <div className="card-title">
                    <span className="category"><i className={`${frontmatter.category_icon}`}></i> {frontmatter.categories}</span>
                    <h4 className="white-text">{frontmatter.title}</h4>
                </div>
                <GatsbyImage className="image" image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.title} />
            </Link>
        </div>
    )
}

export default CheatsheetCard