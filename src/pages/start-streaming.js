import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

const StartStreaming = (props) => {
    const [sent, setSent] = useState(null)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        fetch('./.netlify/functions/book', {
            method: "POST",
            body: JSON.stringify({
                first_name: data.name,
                email: data.email,
            })
        })
        .then(() => {
            setDisabled(true)
            setSent(true)
        })
        .catch(e => setError(e))

    }

    return (
        <Layout>
        <SEO title="Pre-order Start Streaming eBook | FabioRosado" description="Your guide to OBS and live streaming." />
        <section className="blog-post">
            <div className="post-header">
                <h1 className="white-text larger">Start Streaming Pre-Order</h1>
            </div>
            <div className="background"/>
            <div className="post-area">
                <div className="text-container">
                    <div style={{margin: "0 auto", maxWidth:"400px" }}>
                        <Img fluid={props.data.cover.childImageSharp.fluid} alt="Start Streaming Book Cover" />
                    </div>
                    
                    <p>Start Streaming is an ebook that I am writing about using OBS for streaming. The book will also contain some overall view of the streaming platforms available, tips related to streaming, services that you can use while streaming such streamelements and chat bots available.</p>

                    <p className="bold">What to expect?</p>
                    <p>In this book, I am going to share my experience while streaming using OBS. I will provide you with videos that you can watch. You will also get a freebie overlay with the book so you can get starting streaming straight away!</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form centered padding-top">
                        <label htmlFor="name">Name</label>
                        <input className="bg-primary  padding border-color" id="name" name="name" aria-label="Your Name" ref={register({ required: "Please enter your name."})} placeholder="Streamy McStream" autoComplete="name" />
                        <label htmlFor="email">Email</label>
                        <input className="bg-primary padding border-color" id="email" name="email" aria-label="Your Email" ref={register({ required: true, pattern: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/})} placeholder="john.doe@example.com" autoComplete="email" />
                        <button type="submit" className="full-button bold" disabled={disabled}> Pre-Order Now!</button>
                        {sent && <p><i className="fas fa-thumbs-up" />Thank you, for pre-ordering the book! As soon as the book is available, you will receive the discount count and url so you can buy the book.</p>}
                        {error && <p>An error occurred when sending the form. Please try again.</p>}
                        {errors.name && errors.name.message}<br />
                        {errors.email && "Please enter a valid email."}<br />
                        {errors.message && errors.message.message}<br />
                    </form>
                    <p>If y pre-order you will be added to the waiting list and won't be charged anything. But by pre-ordering the book, you will receive a 25% discount code!</p>
                    
                    <h2>Progress</h2>

                    <div className="progress-bar-background centered">
                        <span style={{width: "1%"}} className="progress-bar" />
                    </div> 
                    <p className="centered">Completed: 1%</p>


                
                    <h2>Contents</h2>
                        <ul>
                            <li>Introduction</li>
                                <ul>
                                    <li>About the book</li>
                                    <li>Icons used in the book</li>
                                </ul>
                            <li>Platforms</li>
                                <ul>
                                    <li>Youtube</li>
                                    <li>Twitch</li>
                                    <li>Twitter</li>
                                    <li>All of them!</li>
                                </ul>
                            <li>Gear</li>
                                <ul>
                                    <li>Essentials</li>
                                    <li>Camera</li>
                                    <li>Microphone</li>
                                    <li>Green Screen</li>
                                    <li>Capture Cards</li>
                                </ul>
                            <li>OBS</li>
                                <ul>
                                    <li>Introduction</li>
                                    <li>Main Window</li>
                                    <li>Settings</li>
                                    <li>Sources</li>
                                    <li>Audio</li>
                                </ul>
                            <li>Overlays</li>
                                <ul>
                                    <li> Services</li>
                                    <li>Desiging Your Own</li>
                                    <li>Using a Website</li>
                                </ul>
                            <li>Merch</li>
                                <ul>
                                    <li>Services</li>
                                    <li>Setting up</li>
                                </ul>
                            <li>Music</li>
                                <ul>
                                    <li>Introduction</li>
                                    <li>Free Playlists</li>
                                </ul>
                            <li>Streaming With Two PCs</li>
                                <ul>
                                    <li>Introduction</li>
                                    <li>Benefits</li>
                                    <li>Capture Cards</li>
                                    <li>Setup</li>
                                </ul>
                            <li>Guests</li>
                            <li>...</li>
                        </ul>

                </div>              
            </div>
        
        </section>
        </Layout>
    )
}

export default StartStreaming


export const pageQuery = graphql`
    query {
        cover: file(relativePath: {eq: "start-streaming.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`