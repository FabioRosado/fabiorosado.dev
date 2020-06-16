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
               
                    <h1>Main Machine</h1>
                    <ul>
                        <li>13" Macbook Pro 2.7GHz (early 2015)</li>
                        <li>Intel Iris Graphics 6100 1536 MB</li>
                        <li>8 GB 1867 MHz DDR3</li>
                        <li>1TB Crucial P1 SSD</li>
                        <li>macOS Catalina</li>
                    </ul>
                    <p>
                    Made the decision to retired my 8 year old Acer laptop in 2015 and bought a brand new Macbook Pro. I've also made the mistake of 
                    going for the lowest spec version and bought the one with a 128GB ssd. After struggling with not having enough space for all the
                    things I wanted to do, I decided to upgrade the SSD on the mac and replace the old 128GB for a 1TB SSD.
                    </p>

                    <h1>Peripherals</h1>
                        <ul>
                            <li>HP 24f Ultra-Slim FHD IPS Monitor</li>
                            <li>Logitech K380 wireless keyboard</li>
                            <li>Logitech MX Master 2S Wireless Mouse</li>
                            <li>Anker 4-Port USB 3.0 Ultra Slim Data Hub</li>
                            <li>TaoTronics TT-BH22 - Active Noise Cancelling Headphones</li>
                        </ul>

                        <p>Decided to invest on a second monitor since the 13" screen from the macbook is pretty small and for a while I used the ipad as 
                        a second monitor whilst streaming. But it became impratical since I needed a larger screen to avoid having to scroll up and down all the time. 
                        </p>

                    <Img fluid={props.data.terminal.childImageSharp.fluid} alt="Gear" /> 
                    <h1>Code Software</h1>
                        <ul>
                            <li>iTerm 2 with Dracula theme</li>
                            <li>VsCode with Dracula theme</li>
                            <li>Vim</li>
                            <li>Postman</li>
                            <li>Docker</li>
                        </ul>

                        <p>I've been using iTerm for a very long time, I tend to change themes from time to time as well and I'm currently using Dracula on everything. I also use VScode for 
                        a lot of my coding but enjoy using VIM from time to time and even use it whilst on stream. I also use Postman when working with API's and Docker to play around with containers.</p>
                    
                    <h1>Design Software</h1>
                        <ul>
                            <li>Adobe XD</li>
                            <li>Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Lightroom</li>
                        </ul>

                        <p>Adobe was doing a huge discount on the Creative Cloud annual plan and I decided to buy it. I've been using Adobe XD since the beta version was released and really like to design
                        things with it. Since I got access to all the apps in create cloud I decided to take a stab at using Illustrator and perhaps get a bit better at designing and creating vector work.</p>
                    
                    <h1>Other Software</h1>
                        <ul>
                            <li>Bear</li>
                            <li>PolyMail</li>
                            <li>Clean My Mac</li>
                            <li>Firefox</li>
                            <li>Discord</li>
                            <li>Telegram</li>
                            <li>Macs Fan Control</li>
                        </ul>

                        <p>These are other programs that I tend to use daily. I like Clean My Mac as it helped me a lot to control the tiny 128GB SSD that I had in the past. Another Software
                        that I love is Macs Fan Controls, the Macbook is on top of a Tecknet fan base, but when I'm using some programs that are heavy on the CPU the mac tends to grow very hot. Mac Fans Control
                        allows me to control the speed of the internal fan and cool down the laptop.</p>

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