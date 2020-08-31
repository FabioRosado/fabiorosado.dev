import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"


const ContactPage = () => (
    <Layout>
        <SEO title="Contact | FabioRosado" />
        <section className="blog-post">
            <div className="post-header">
                <h1 className="large white-text">Contact</h1>
            </div>
            <Contact />
        </section>
    </Layout>
)

export default ContactPage