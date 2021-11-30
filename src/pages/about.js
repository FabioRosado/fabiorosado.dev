import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Uses = () => {
    return (
        <Layout>
        <SEO title="FabioRosado | Uses" description="Gear and Software that I use" />
        <section className="blog-post">
            <div className="post-header">
                <h1 className="white-text larger">About</h1>
            </div>
            <div className="background"/>
            <div className="post-area">
                <div className="text-container">
                    <h2 className="green large padding-bottom">Hello, I am Fabio Rosado. <br />A developer, streamer, podcaster and open-source maintainer. </h2>

                    <p>
                        A friend called me 'the flying dev' because I was a flight attendant by day and a developer by night.
                        My coding journey started by taking the course: introduction to computer science and programming using python from MITx on edx. 
                        I started contributing to open-source and the passion for solving problems and creating things grew.
                    </p>

                    <p className="padding-bottom">
                        In 2020 I started sharing my coding journey and projects live on twitch.
                        I have also created a podcast called <a href="https://landingintech.com">landing in tech</a> where I speak with developers about their journey into tech.

                        <ul className="horizontal-list justify-center">
                            <li><a href="/contact"><button className="full-button">Say Hello</button></a></li>
                            <li><a href="https://github.com/FabioRosado" aria-label="Link to Github Profile"><i className="fab fa-2x fa-github-square" /></a></li>
                            <li><a href="https://dev.to/FabioRosado/" aria-label="Link to dev.to Profile"><i className="fab fa-2x fa-dev" /></a></li>
                            <li><a href="https://twitter.com/FabioRosado_" aria-label="Link to Twitter Profile" rel="me"><i className="fab fa-2x fa-twitter-square" /></a></li>
                            <li><a href="https://www.linkedin.com/in/FabioRosado/" aria-label="Link to Linkedin Profile"><i className="fab fa-2x fa-linkedin" /></a></li>
                            <li><a href="https://twitch.tv/theflyingdev/" aria-label="Link to twitch profile"><i className="fab fa-2x fa-twitch"/></a></li>
                            <li><a href="https://www.instagram.com/theflyingdev/" aria-label="Link to Instagram Profile"><i className="fab fa-2x fa-instagram" /></a></li>
                        </ul>
                    
                    </p>



                    <div className="two-columns">

                    <div className="about-card dropshadow padding-top">

                        <h2>Things that I know</h2>
                        <ul className="white-text list-none">
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>Unix</li>
                            <li>CSS/SASS</li>
                            <li>VIM</li>
                            <li>TailwindCSS</li>
                            <li>Docker</li>
                            <li>Django</li>
                        </ul>
                    </div>

                    <div className="about-card drop-shadow">
                        <h2>Things that I use</h2>
                        <ul className="white-text list-none">
                            <li>VSCode</li>
                            <li>Windows Terminal</li>
                            <li>Adobe XD</li>
                            <li>Postman</li>
                            <li>Adobe Audition</li>
                            <li>Obsidian</li>
                            <li>OBS</li>
                            <li><a className="white-text" href="/uses">More on Uses page</a></li>
                        </ul>
                    </div>
                    </div>
                </div>              
            </div>


        
        </section>
        </Layout>
    )

}

export default Uses



