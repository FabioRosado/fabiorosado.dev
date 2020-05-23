import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ContactForm from './contact-form';

const Contact = () => {
    const { contact } = useStaticQuery(
        graphql`
            query {
                contact: file(relativePath: {eq: "contact.jpg"}) {
                childImageSharp {
                    fluid(quality:100) {
                    ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return (
        <section className="contact-area">
        <Img fluid={contact.childImageSharp.fluid} style={{maxHeight: '500px'}} />
        <div className="contact-text">
            <ContactForm />
            <div className="contact">
                <h1><a href="#contact" name="contact">Contact Me</a></h1>
                <p>Want to get in touch with me? Request more information about myself or my experience? Would you like to know what is my favourite ice cream or pizza? Send me an email or find me on social media, I will reply as quick as possible. I'm always happy to have a chat!</p>
                <ul className="horizontal-list">
                    <li><a href="https://github.com/FabioRosado" aria-label="Link to github account"><i className="fab fa-2x fa-github-square" /></a></li>
                    <li><a href="https://dev.to/FabioRosado/" aria-label="Link to dev.to profile"><i className="fab fa-2x fa-dev" /></a></li>
                    <li><a href="https://twitter.com/FabioRosado" aria-label="Link to twitter profile"><i className="fab fa-2x fa-twitter-square" /></a></li>
                    <li><a href="https://www.linkedin.com/in/FabioRosado/" aria-label="Link to linkedin profile"><i className="fab fa-2x fa-linkedin" /></a></li>
                    <li><a href="https://twitch.tv/theflyingdev/" aria-label="Link to twitch profile"><i className="fab fa-2x fa-twitch"/></a></li>
                    <li><a href="https://www.instagram.com/FabioRosado/" aria-label="Link to instagram profile"><i className="fab fa-2x fa-instagram" /></a></li>
                </ul>
            </div>
        </div>
        </section>
    )
}

export default Contact