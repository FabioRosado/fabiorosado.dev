import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import { GatsbyImage } from "gatsby-plugin-image"

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
              <li><a href="https://twitch.tv/theflyingdev/" aria-label="Link to twitch profile"><i className="fab fa-2x fa-twitch" /></a></li>
              <li><a href="https://www.instagram.com/theflyingdev/" aria-label="Link to Instagram Profile"><i className="fab fa-2x fa-instagram" /></a></li>
            </ul>
          </div>
          <div className="pictures">
            <div className="box">
              <div className="shadow" />
              <div className="frame">
                <GatsbyImage
                  title="Code"
                  alt="Code"
                  image={props.data.desk.childImageSharp.gatsbyImageData} />
              </div>
            </div>
            <div className="box">
              <div className="shadow" />
              <div className="frame">
                <GatsbyImage
                  title="FabioRosado"
                  alt="FabioRosado"
                  image={props.data.fabiorosado.childImageSharp.gatsbyImageData} />
              </div>
            </div>
            <div className="box">
              <div className="shadow" />
              <div className="frame">
                <GatsbyImage
                  title="Photography"
                  alt="Photography"
                  image={props.data.michael.childImageSharp.gatsbyImageData} />
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
          <h1 className="white-text">Tools of Trade</h1>
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
            <p className="spaced-text">Tmux Terminal Tox</p>
            <p className="spaced-text">AdobeXD Postman Git</p>
            <p className="spaced-text">VSCode Docker AWS</p>
          </div>
          <div className="about-card drop-shadow">
            <i className="fas fa-3x fa-cogs"></i>
            <h2 className="white-text">Frameworks</h2>
            <p className="spaced-text">Django Bootstrap</p>
            <p className="spaced-text">Jekyll Bulma React</p>
            <p className="spaced-text">Bootstrap TailwindCSS</p>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="section center-text white-text">Articles</h1>
        <div className="four-by-four">
          {blog.nodes.map((post) => {
            return (
              <WritingCard post={post} key={post.frontmatter.title} />
            )
          })}

        </div>
      </section>
      <Contact />
      <footer className="navbar padding">
        <Link className="white-text margin-right" to="/">Home</Link>
        <Link className="white-text margin-right" to="/articles">Articles</Link>
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
      filter: {frontmatter: {categories: {nin: ["books", "Projects", "cheatsheet"]}}}, 
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
            gatsbyImageData
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
            gatsbyImageData
          }
        }
      }
    }
    }
    fabiorosado: file(relativePath: {eq: "fabiorosado.jpg" }) {
      childImageSharp {
            gatsbyImageData
      }
    }
    desk: file(relativePath: {eq: "desk.jpg"}) {
      childImageSharp {
            gatsbyImageData
      }
    }
    michael: file(relativePath: {eq: "michael-henry-284473-unsplash.jpg"}) {
      childImageSharp {
            gatsbyImageData
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
