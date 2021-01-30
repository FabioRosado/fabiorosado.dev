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
        <p>I'm the flying dev, a flight attendant by day and a developer by night. I build projects live on twitch, contribute to open source and talk with devs about their journey into tech at <a href="https://landingintech.com">Landing in Tech</a> podcast.</p>
        <h1>Let's Chat!</h1>
        <ul className="horizontal-list">
            <li><Link to="/#contact"><button className="full-button">Say Hello</button></Link></li>
            <li><a href="https://github.com/FabioRosado" aria-label="Link to Github Profile"><i className="fab fa-2x fa-github-square" /></a></li>
            <li><a href="https://dev.to/FabioRosado/" aria-label="Link to dev.to Profile"><i className="fab fa-2x fa-dev" /></a></li>
            <li><a href="https://twitter.com/FabioRosado_" aria-label="Link to Twitter Profile" rel="me"><i className="fab fa-2x fa-twitter-square" /></a></li>
            <li><a href="https://www.linkedin.com/in/FabioRosado/" aria-label="Link to Linkedin Profile"><i className="fab fa-2x fa-linkedin" /></a></li>
            <li><a href="https://twitch.tv/theflyingdev/" aria-label="Link to twitch profile"><i className="fab fa-2x fa-twitch"/></a></li>
            <li><a href="https://www.instagram.com/FabioRosado/" aria-label="Link to Instagram Profile"><i className="fab fa-2x fa-instagram" /></a></li>
        </ul>
      </div>
        <div className="pictures">
            <div className="box">
              <div className="shadow" />
              <div className="frame">
                <Img 
                  title="Code"
                  alt="Code"
                  fixed={props.data.desk.childImageSharp.fixed} />
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
            <h1>Tools of Trade</h1>
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
      <h1 className="section center-text white-text">Articles</h1>
      <div className="four-by-four">
        {blog.nodes.map((post) => {
          return(
            <WritingCard post={post} key={post.frontmatter.title} />
        )})}

      </div>
    </section>
    <Contact />
    <footer className="navbar padding">
      <Link className="white-text margin-right" to="/">Home</Link>
      <Link className="white-text margin-right" to="/writings">Writings</Link>
      <Link className="white-text margin-right" to="/portfolio">Portfolio</Link>
      <Link className="white-text margin-right" to="/contact">Contact</Link>
    </footer>

  </>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    blog: allMdx(
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
    portfolio: allMdx(
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
    desk: file(relativePath: {eq: "desk.jpg"}) {
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
