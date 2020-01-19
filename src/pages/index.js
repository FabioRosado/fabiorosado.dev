import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
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
   return(
  <Layout>
    <SEO title="Home" keywords={[`FabioRosado`, `developer`,]} />
    <Img fluid={this.props.data.background.childImageSharp.fluid} />
    <header className="header-section">
      <nav className="navbar">
      <div className="navbar-brand">
          <Link to="/">
              <img src="logo.svg" width="50" height="50" alt="FabioRosado" />
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
      </ul>
    </nav>
    <div className="header-container">
      <div className="intro">
        <h1>Hello,</h1>
        <p>I’m Fabio, a Portuguese expat living in the UK. I’m currently working for an airline as cabin crew and learning how to code in my free time.</p>
        <h1 className="margin-top">Let's Chat!</h1>
        <ul className="horizontal-list">
            <li><a href="mailto:"><button className="full-button">Say Hello</button></a></li>
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
    
                {/* <div className="container-middle center-text">
                    <h1>Projects</h1>
                </div>
                <div className="three-columns">
            
                    <div className="project-card drop-shadow">
                        <a href="{{project.url}}">
                        <div className="category small-font">
                            {{ project.tag-icon }} {{ project.tag }}
                        </div>
                        <div className="project-name">
                            <h3 className="white-text">{{project.title}}</h3>
                        </div>
                        <div className="description">
                            <div className="white-text small-font">
                                {{ project.excerpt | truncate: 165 }}
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="{{ project.url }}" className="trans-button"><i className="fas fa-folder-open"></i> Read more</a>
                            <a href="{{ project.source}}" className="trans-button margin-left" target="_blank"><i className="fab fa-github-square"></i> Source Code</a>
                        </div>
                        <img className="project-image" src="../assets/images/{{project.image}}">
                        <div className="tools-used spaced-text">
                            <p>{{ project.tech }}</p>
                        </div>
                        </div>
                        </a>
                </div>
        </div> */}

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
                    <p className="spaced-text">Bootstrap</p>
                </div>
            </div>
        </section>

        {/* <div className="section">
            <div className="container-middle center-text">
                <h1>Blog</h1>
            </div>
            <div className="four-by-four">
              <a href="{{post.url}}">
                  <div className="description">
                      <p className="white-text small-font margin-bottom">{{ post.excerpt | truncate:160 }}</p>
                      <span className="trans-button small-font">Read More <i className="fas fa-angle-double-right"></i></span>
                  </div>
                  <div className="card-title">
                      <span className="category">{{ post.category_icon }} {{ post.categories }}</span>
                      <h4 className="white-text">{{ post.title }}</h4>
                  </div>
                  <img className="post-image" src="{{site.url}}/assets/images/{{post.image}}" alt="{{post.title | escape}}">
              </a>
            </div>
        </div> */}

        {/* <div className="contact-area">
            <div className="contact-text">
                <h1>Contact Me</h1>
                <p>Want to get in touch with me? Request more information about myself or my experience? Would you like to know what is my favourite ice cream or pizza? Send me an email or find me on social media, I will reply as quick as possible. I'm always happy to have a chat!</p>
                <ul className="horizontal-list">
                    <li><a href="mailto:{{ site.email }}"><button className="white-button">Say Hello</button></a></li>
                    <li><a href="https://github.com/{{ site.github_username }}" target="_blank"><i className="fab fa-2x fa-github-square"></i></a></li>
                    <li><a href="https://dev.to/{{ site.dev_username }}/" target="_blank"><i className="fab fa-2x fa-dev"></i></a></li>
                    <li><a href="https://twitter.com/{{ site.twitter_username }}" target="_blank"><i className="fab fa-2x fa-twitter-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/{{ site.linkedin_username }}/" target="_blank"><i className="fab fa-2x fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/{{ site.instagram_username }}/" target="_blank"><i className="fab fa-2x fa-instagram"></i></a></li>
                </ul>
            </div>
        </div> */}
  </Layout>
  )}
}

export default IndexPage


export const pageQuery = graphql`
  query {
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
