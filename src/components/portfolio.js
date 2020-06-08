import React from "react"

import { Link } from 'gatsby'
import Img from "gatsby-image"

const PortfolioCard = (props) => {
    const { frontmatter } = props.project

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
                <Link to={`/${frontmatter.slug}`} className="trans-button"><i className="fas fa-folder-open"></i> Read more</Link>
                <a href={frontmatter.source} className="trans-button margin-left" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Source Code</a>
            </div>
            <Link to={`/${frontmatter.slug}`}>
            <Img className="project-image" fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} />
            <div className="tools-used spaced-text">
                <p>{frontmatter.tech}</p>
            </div>
            </Link>
        </div>
    )}

export default PortfolioCard