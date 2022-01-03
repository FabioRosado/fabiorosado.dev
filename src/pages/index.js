import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"

import SEO from "../components/seo"
import Navigation from "../components/navigation"
import PortfolioCard from "../components/portfolio"
import WritingCard from "../components/blog"
import Contact from "../components/contact"
import SearchBar from "../components/search/search-bar"
import Book from "../components/books"

import "../styles/main.css"
import '../../static/css/all.min.css'

const IndexPage = (props) => {
  const portfolio = props.data.portfolio
  const blog = props.data.blog
  const books = props.data.books.nodes
  const book = books[Math.floor(Math.random() * books.length)]
  const cheatsheets = props.data.cheatsheets

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
      <section className="section">
        <h1 className="section center-text white-text">Articles</h1>
        <div className="search-container">
          <p className="font-large white-text padding-left">Looking for something?</p>
          <SearchBar searchIndex={props.data.siteSearchIndex.index} center={false} />
        </div>
        <div className="four-by-four">
          {blog.nodes.map((post) => {
            return (
              <WritingCard post={post} key={post.frontmatter.title} />
            )
          })}

        </div>
      </section>

      <section className="two-columns section grid-gap">
        <div className="reading-section">
          <h2 className="white-text ml-5 margin-bottom">Currently Reading</h2>
          <div className="about-card dropshadow">
            <Book key={book.frontmatter.title} book={book} />
          </div>
        </div>
        <div>
          <h2 className="white-text ml-5 margin-bottom">Latest Cheatsheets</h2>
          <div className="about-card dropshadow margin-bottom">
            <ul className="list-none">
              {cheatsheets.nodes.map((cheatsheet) =>
                <li key={cheatsheet.frontmatter.title}>
                  <Link to={`/cheatsheets/${cheatsheet.frontmatter.slug}`}>{cheatsheet.frontmatter.title}</Link>
                </li>
              )}
            </ul>
          </div>
          <h2 className="white-text margin-bottom ml-5">Tools of Trade</h2>
          <div className="about-card dropshadow">
            <img className="pr-1" src="https://img.shields.io/badge/OS-MacOS-informational?style=flat&logo=apple&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/OS-Manjaro-informational?style=flat&logo=manjaro&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Editor-VSCode-informational?style=flat&logo=visual-studio-code&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Editor-Vim-informational?style=flat&logo=vim&Color=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Terminal-Tmux-informational?style=flat&logo=tmux&logoColor=white&Color=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Shell-Zsh-informational?style=flat&logo=powershell&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Code-Python-informational?style=flat&logo=python&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Code-bash-informational?style=flat&logo=gnu-bash&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=docker&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=git&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=postman&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Tools-Gatsby-informational?style=flat&logo=gatsby&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Tools-TailwindCss-informational?style=flat&logo=tailwind-css&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Tools-NextJS-informational?style=flat&logo=next.js&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Tools-Django-informational?style=flat&logo=postman&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Cloud-Netlify-informational?style=flat&logo=netlify&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Cloud-Digital_Ocean-informational?style=flat&logo=digitalocean&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Cloud-AWS-informational?style=flat&logo=amazon-aws&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Cloud-GCP-informational?style=flat&logo=google-cloud&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Other-Adobe_XD-informational?style=flat&logo=adobe-XD&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Other-Photoshop-informational?style=flat&logo=adobe-photoshop&logoColor=white&color=FC354C" alt="" />
            <img className="pr-1" src="https://img.shields.io/badge/Other-Audition-informational?style=flat&logo=adobe-audition&logoColor=white&color=FC354C" alt="" />
          </div>
        </div>
      </section>

      <h1 className="section center-text white-text">Projects</h1>
      <section className="three-columns section">
        {portfolio.nodes.map((work) =>
          <PortfolioCard project={work} key={work.frontmatter.title} />
        )}

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
      filter: {frontmatter: {categories: {nin: ["Books", "Projects", "Cheatsheet"]}}}, 
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
    books: allMdx(filter: {frontmatter: {categories: {eq: "Books"}, progress: {ne:"0%"}, finished:{ne: true}}}) {
        nodes {
            frontmatter {
                author
                progress
                title
                amazon
                slug
                finished
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
    cheatsheets: allMdx(
        filter: {frontmatter: {categories: {eq: "Cheatsheet"}}}, 
        limit: 5,
        sort: {fields: [frontmatter___date], order: DESC}) {
        nodes {
            frontmatter {
                slug
                title
                subtitle
                categories
                excerpt
                tags
                category_icon
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
    siteSearchIndex {
      index
    }
  }
`

