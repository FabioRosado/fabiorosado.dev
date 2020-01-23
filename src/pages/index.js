import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import "../styles/main.css"
import '../../static/css/all.min.css'

import Logo from '../images/logo.svg'
import SEO from "../components/seo"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      windowWidth: 1240,
    }
  }

  toggleMenu = () => this.setState(state => ({showMenu: !state.showMenu}))


 render() {
   const portfolio = this.props.data.portfolio
   const blog = this.props.data.blog
   return(
  <>
    <SEO title="Home" keywords={[`FabioRosado`, `developer`, `python`, `react`, `javascript`]} />
    <Img className="header-image" fluid={this.props.data.background.childImageSharp.fluid} />
    <header className="header-section">
      <nav className="navbar">
      <div className="navbar-brand">
          <Link to="/">
              <img src={Logo} width="50" height="50" alt="FabioRosado" />
          </Link>
      </div>
      <button className="full-button visible-xs" id="collapseBtn" type="button" aria-pressed="false" aria-expanded="false" aria-controls="navigation" onClick={this.toggleMenu}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
      </button>
      <ul className={`${this.state.showMenu ? "show" : "hidden"} navigation`}>
          <li>
              <Link to="/" aria-label="Link home">Home</Link>
          </li>
          <li>
              <Link to="/#about" aria-label="Link to about me">About</Link>
          </li>
          <li>
            <Link to="/blog" aria-label="Link to blog">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio" aria-label="Link to blog">Portfolio</Link>
        </li>
      </ul>
    </nav>
    <div className="header-container">
      <div className="intro">
        <h1>Hello,</h1>
        <p>I’m Fabio, a Portuguese expat living in the UK. I’m currently working for an airline as cabin crew and learning how to code in my free time.</p>
        <h1 className="margin-top">Let's Chat!</h1>
        <ul className="horizontal-list">
            <li><a href="mailto:fabiorosado@outlook.com"><button className="full-button">Say Hello</button></a></li>
            <li><a href="https://github.com/FabioRosado" target="_blank" rel="noopener noreferrer" aria-label="Link to Github Profile"><i className="fab fa-2x fa-github-square"></i></a></li>
            <li><a href="https://dev.to/FabioRosado/" target="_blank" rel="noopener noreferrer" aria-label="Link to dev.to Profile"><i className="fab fa-2x fa-dev"></i></a></li>
            <li><a href="https://twitter.com/FabioRosado_" target="_blank" rel="noopener noreferrer" aria-label="Link to Twitter Profile"><i className="fab fa-2x fa-twitter-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/FabioRosado/" target="_blank" rel="noopener noreferrer" aria-label="Link to Linkedin Profile"><i className="fab fa-2x fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/FabioRosado/" target="_blank" rel="noopener noreferrer" aria-label="Link to Instagram Profile"><i className="fab fa-2x fa-instagram"></i></a></li>
        </ul>
      </div>
        <div className="pictures">
            <div id="box">
              <div id="shadow" />
              <div id="frame">
                <Img 
                  title="Code"
                  alt="Code"
                  fixed={this.props.data.fabian.childImageSharp.fixed} />
              </div>
            </div>
            <div id="box">
              <div id="shadow" />
              <div id="frame">
                <Img
                  title="FabioRosado"
                  alt="FabioRosado"
                  fixed={this.props.data.fabiorosado.childImageSharp.fixed} />
              </div>
            </div>
            <div id="box">
              <div id="shadow" />
              <div id="frame">
                <Img
                  title="Photography"
                  alt="Photography"
                  fixed={this.props.data.michael.childImageSharp.fixed} />
              </div>
            </div>
        </div>
    </div>
    </header>
    <h1 className="section center-text white-text">Projects</h1>
    <section className="three-columns section">
      {portfolio.nodes.map((work) => {
        return (
          <div className="project-card drop-shadow" key={work.frontmatter.title}>
            <a href={work.frontmatter.path}>
            <div className="category small-font">
              <i className={work.frontmatter.tag_icon}></i> {work.frontmatter.tag}
            </div>
            <div className="project-name">
                <h3 className="white-text">{work.frontmatter.title}</h3>
            </div>
            <div className="description">
                <div className="white-text small-font margin-bottom">
                    {work.frontmatter.excerpt}
                </div>
            </div>
            <div className="buttons">
                <Link to={work.frontmatter.path} className="trans-button"><i className="fas fa-folder-open"></i> Read more</Link>
                <a href={work.frontmatter.source} className="trans-button margin-left" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Source Code</a>
            </div>
            <Img className="project-image" fluid={work.frontmatter.image.childImageSharp.fluid} alt={work.frontmatter.title} />
            <div className="tools-used spaced-text">
                <p>{work.frontmatter.tech}</p>
            </div>
            
            </a>
        </div>
        )
      })}

    </section> 
    <section className="section">
        <div className="container-middle center-text">
            <h1><a name="about">About Me</a></h1>
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
            <div className="post-card" key={post.frontmatter.title}>
            <a href={`/${post.frontmatter.path}`}>
            <div className="description">
                <p className="white-text small-font margin-bottom">{post.frontmatter.excerpt}</p>
                <span className="trans-button small-font">Read More <i className="fas fa-angle-double-right"></i></span>
            </div>
            <div className="card-title">
                <span className="category"><i className={post.frontmatter.category_icon}></i> {post.frontmatter.categories}</span>
                <h4 className="white-text">{post.frontmatter.title}</h4>
            </div>
            <Img className="post-image" fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} />
          </a>
          </div>
        )})}

      </div>
    </section>

    <section className="contact-area">
      <Img fluid={this.props.data.contact.childImageSharp.fluid} />
      <div className="contact-text">
        <h1>Contact Me</h1>
        <p>Want to get in touch with me? Request more information about myself or my experience? Would you like to know what is my favourite ice cream or pizza? Send me an email or find me on social media, I will reply as quick as possible. I'm always happy to have a chat!</p>
        <ul className="horizontal-list">
            <li><a href="mailto:fabiorosado@outlook.com"><button className="white-button">Say Hello</button></a></li>
            <li><a href="https://github.com/FabioRosado" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github-square"></i></a></li>
            <li><a href="https://dev.to/FabioRosado/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-dev"></i></a></li>
            <li><a href="https://twitter.com/FabioRosado" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-twitter-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/FabioRosado/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/FabioRosado/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-instagram"></i></a></li>
        </ul>
    </div>
  </section>
  </>
  )}
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
        path
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
        path
        excerpt
        title
        tech
        tag
        tag_icon
        source
        categories
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
    contact: file(relativePath: {eq: "annie-spratt-608001-unsplash.jpg"}) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
