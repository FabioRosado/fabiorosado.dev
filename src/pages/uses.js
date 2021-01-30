import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Uses = (props) => {
    return (
        <Layout>
        <SEO title="FabioRosado | Uses" description="Gear and Software that I use" />
        <section className="blog-post">
            <div className="post-header">
                <h1 className="white-text larger">Uses</h1>
            </div>
            <div className="background"/>
            <div className="post-area">
                <div className="text-container">
                <Img fluid={props.data.gear.childImageSharp.fluid} alt="Gear" /> 

                <p>
                I  love watching setups on instagram and  love to see what other folks are using on their day to day lives.
                I've decided to take Wes Bos example and create a <i>uses</i> page where I list my setup and everything that I use.
                </p>
                    <h2>Main Machine</h2>
                    <ul>
                        <li>AMD Ryzen 7 3700X</li>
                        <li>Gigabyte RTX 2070 Super windforce OC 8GB</li>
                        <li>32 GB DDR4 3000 MHZ Ram (4x 8 GB Corsair Vengeance)</li>
                        <li>1TB Crucial P1 SSD</li>
                        <li>1TB Sabrent Rocket SSD</li>
                        <li>ASUS TUF Gaming x570-plus motherboard</li>
                    </ul>

                    <h2>Peripherals</h2>
                        <ul>
                            <li>HP 24f Ultra-Slim FHD IPS Monitor</li>
                            <li>BenQ GW2280 22inches Monitor</li>
                            <li>Logitech G413 carbon mechanical keyboard</li>
                            <li>Logitech MX Master 2S Wireless Mouse</li>
                            <li>Logitech Z200 PC Speakers</li>
                            <li>TaoTronics TT-BH22 - Active Noise Cancelling Headphones</li>
                        </ul>


                    <Img fluid={props.data.terminal.childImageSharp.fluid} alt="Gear" /> 
                    <h2>Code Software</h2>
                        <ul>
                            <li>Windows Terminal with custom theme</li>
                            <li>VsCode with Mayukai Mono</li>
                            <li>Vim</li>
                            <li>Postman</li>
                            <li>Docker</li>
                        </ul>

                    <h2>Design Software</h2>
                        <ul>
                            <li>Adobe XD</li>
                            <li>Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Lightroom</li>
                        </ul>

                        <p>Adobe was doing a huge discount on the Creative Cloud annual plan and I decided to buy it. I've been using Adobe XD since the beta version was released and really like to design
                        things with it. Since I got access to all the apps in create cloud I decided to take a stab at using Illustrator and perhaps get a bit better at designing and creating vector work.</p>
                    
                    <h2>Other Software</h2>
                        <ul>
                            <li>Obsidian</li>
                            <li>Brave</li>
                            <li>Discord</li>
                            <li>Slack</li>
                        </ul>

                    <h1>Streaming Setup</h1>
                        <ul>
                            <li>OBS</li>
                            <li>TouchPortal</li>
                            <li>Logitech C920 HD Pro Webcam</li>
                            <li>Blue Yeti Microphone</li>
                            <li>Ipad Air 2</li>
                            <li>URMI Microphone Stand</li>
                            <li>Main Light: Neewer LED Ring Light</li>
                            <li>Secondary Light: Neewer Dimmable 176 LED Light</li>
                            <li>Duronic 10Wat Extension Power with Spike and Surge Protector</li>
                            <li>Nvidia Broadcast App</li>
                        </ul>

                        <p>My streaming setup has slowly grown. Initially I was just using OBS and the Logitech webcam to stream, but then I decided to add more things. TouchPortal is a brilliant software that allows me
                        to use the iPad as a streamdeck, I can control everything from the iPad and even play sounds from it.</p>
                    </div>              
            </div>
        
        </section>
        </Layout>
    )

}

export default Uses

export const pageQuery = graphql`
    query {
        gear: file(relativePath: {eq: "gear.jpg" }) {
            childImageSharp {
                fluid(quality:100) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        terminal: file(relativePath: {eq: "terminal.jpg"}) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`