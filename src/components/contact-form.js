import React, { useState } from "react"
import { useForm } from "react-hook-form"

const ContactForm = () => {
    const [sent, setSent] = useState(null)
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        fetch('./.netlify/functions/contact', {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then((e) => {
                setSent(true)
            })
    }

    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <label htmlFor="name">Name</label>
            <input name="name" ref={register({ required: "Please enter your name."})} placeholder="John Doe" />
            <label htmlFor="email">Email</label>
            <input name="email" ref={register({ required: true, pattern: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/})} placeholder="john.doe@example.com" />
            <label htmlFor="message">Message</label>
            <textarea name="message" ref={register({ required: "You are trying to send a message right?"})} placeholder="Your message here..." />
            <button type="submit" className="full-button">{sent ? <><i className="fas fa-thumbs-up" />Message sent Successfully!</> : <><i className="fas fa-paper-plane"/>Say Hello</>}</button>
            {errors.name && errors.name.message}<br />
            {errors.email && "Please enter a valid email."}<br />
            {errors.message && errors.message.message}<br />

        </form>
    )
}

export default ContactForm