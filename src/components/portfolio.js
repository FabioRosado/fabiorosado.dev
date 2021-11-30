import React from "react"

import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

const PortfolioCard = (props) => {
    const { frontmatter } = props.project
    console.log(frontmatter)
    return (
        <div className="project-card drop-shadow" key={frontmatter.title}>
            <div className="category small-font">
                <i className={`${frontmatter.tag_icon}`}></i> {frontmatter.tag}
            </div>
            <div className="project-name">
                <h3 className="white-text">{frontmatter.title}</h3>
            </div>
            <div className="description">
                <p className="white-text small-font margin-bottom margin-top">
                    {frontmatter.excerpt}
                </p>
                <Link to={`/projects/${frontmatter.slug}`} className="trans-button"><i className="fas fa-folder-open"></i> Read more</Link>
                <a href={frontmatter.source} className="trans-button margin-left" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Source Code</a>
            </div>
            <Link to={`/projects/${frontmatter.slug}`}>
                <GatsbyImage className="project-image" image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.title} />
                <div className="tools-used spaced-text">
                    <p>{frontmatter.tech}</p>
                </div>
            </Link>
        </div>
    )
}

export default PortfolioCard