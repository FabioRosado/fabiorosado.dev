import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Navigation from "../components/navigation"
import PortfolioCard from "../components/portfolio"
import WritingCard from "../components/blog"
import Contact from "../components/contact"

import "../styles/main.css"
import '../../static/css/all.min.css'


const IndexPage = (props) => {
  const portfolio = props.data.portfolio
  const blog = props.data.blog

  return (
    <>
    <SEO title="Home" keywords={[`FabioRosado`, `developer`, `python`, `react`, `javascript`]} />
    <Img className="hero-image" fluid={props.data.background.childImageSharp.fluid} />
    <header className="header-section">
     <Navigation />
    <div className="header-container">
      <div className="intro">
        <h1>Hello,</h1>
        <p>I’m Fabio, a Portuguese expat living in the UK. I’m currently working for an airline as cabin crew and learning how to code in my free time.</p>
        <h1 className="margin-top">Let's Chat!</h1>
        <ul className="horizontal-list">
            <li><Link to="/#contact"><button className="full-button">Say Hello</button></Link></li>
            <li><a href="https://github.com/FabioRosado" target="_blank" rel="noopener noreferrer" aria-label="Link to Github Profile"><i className="fab fa-2x fa-github-square"></i></a></li>
            <li><a href="https://dev.to/FabioRosado/" target="_blank" rel="noopener noreferrer" aria-label="Link to dev.to Profile"><i className="fab fa-2x fa-dev"></i></a></li>
            <li><a href="https://twitter.com/FabioRosado_" target="_blank" rel="noopener noreferrer" aria-label="Link to Twitter Profile"><i className="fab fa-2x fa-twitter-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/FabioRosado/" target="_blank" rel="noopener noreferrer" aria-label="Link to Linkedin Profile"><i className="fab fa-2x fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/FabioRosado/" target="_blank" rel="noopener noreferrer" aria-label="Link to Instagram Profile"><i className="fab fa-2x fa-instagram"></i></a></li>
        </ul>
      </div>
        <div className="pictures">
            <div className="box">
              <div className="shadow" />
              <div className="frame">
                <Img 
                  title="Code"
                  alt="Code"
                  fixed={props.data.fabian.childImageSharp.fixed} />
              </div>
            </div>
            <div className="box">
              <div className="shadow" />
              <div className="frame">
                <Img
                  title="FabioRosado"
                  alt="FabioRosado"
                  fixed={props.data.fabiorosado.childImageSharp.fixed} />
              </div>
            </div>
            <div className="box">
              <div className="shadow" />
              <div className="frame">
                <Img
                  title="Photography"
                  alt="Photography"
                  fixed={props.data.michael.childImageSharp.fixed} />
              </div>
            </div>
        </div>
    </div>
    </header>
    <h1 className="section center-text white-text">Projects</h1>
    <section className="three-columns section">
      {portfolio.nodes.map((work) => 
        <PortfolioCard project={work} key={work.frontmatter.title} />
      )}

    </section> 
    <section className="section">
        <div className="container-middle center-text">
            <h1><a href="#about" name="about">About Me</a></h1>
            <p>
                I'm a self-taught developer who loves open source. When not flying for work, I spend a great amount of time either coding or learning new things.
                Some of my other passions include gaming, reading, photography and travelling - I've been to 15 different countries spread over 3 continents.
            </p>
        </div>
        <div className="three-columns">
            <div className="about-card drop-shadow">
                <i className="fas fa-3x fa-language"></i>
                <h2 className="white-text">Languages</h2>
                <p className="spaced-text">HTML CSS Python</p>
                <p className="spaced-text">Javascript SASS</p>
            </div>
            <div className="about-card drop-shadow">
                <i className="fas fa-3x fa-toolbox"></i>
                <h2 className="white-text">Dev Tools</h2>
                <p className="spaced-text">Pycharm Terminal Tox</p>
                <p className="spaced-text">AdobeXD Postman Git</p>
                <p className="spaced-text">VSCode</p>
            </div>
            <div className="about-card drop-shadow">
                <i className="fas fa-3x fa-cogs"></i>
                <h2 className="white-text">Frameworks</h2>
                <p className="spaced-text">VueJS Electron Bootstrap</p>
                <p className="spaced-text">Jekyll Bulma React</p>
                <p className="spaced-text">Bootstrap TailwindCSS</p>
            </div>
        </div>
    </section>
    <section className="section">
      <h1 className="section center-text white-text">Blog</h1>
      <div className="four-by-four">
        {blog.nodes.map((post) => {
          return(
            <WritingCard post={post} key={post.frontmatter.title} />
        )})}

      </div>
    </section>
    <Contact />

  </>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
      filter: {frontmatter: {categories: {ne: "Projects"}}}, 
      limit: 8, 
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
    portfolio: allMarkdownRemark(
      filter: {frontmatter: {categories: {eq: "Projects"}}}, 
      limit: 3,
      sort:{fields: [frontmatter___date], order: DESC}) {
      nodes {
      frontmatter {
        slug
        excerpt
        title
        tech
        tag
        tag_icon
        source
        categories
        image {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    fabiorosado: file(relativePath: {eq: "fabiorosado.jpg" }) {
      childImageSharp {
        fixed(width: 157) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fabian: file(relativePath: {eq: "fabian-grohs-597395-unsplash.jpg"}) {
      childImageSharp {
        fixed(width: 157) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    michael: file(relativePath: {eq: "michael-henry-284473-unsplash.jpg"}) {
      childImageSharp {
        fixed(width: 157) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    background: file(relativePath: {eq: "header.jpg"}) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
