import React, { useState } from "react"
import { useForm } from "react-hook-form"

const ContactForm = () => {
    const [sent, setSent] = useState(null)
    const { register, handleSubmit, formState: {errors} } = useForm()

    const onSubmit = data => {
        fetch('./.netlify/functions/contact', {
            method: "POST",
            body: JSON.stringify({
                chat_id: '639889348',
                text: `New Message Received from FabioRosado.dev: \n
                Name: ${data.name} \n 
                Email: ${data.email} \n 
                Message: ${data.message}
                `
            })
        })
            .then(() => {
                setSent(true)
            })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" aria-label="Your Name" {...register("name", { required: "Please enter your name."})} placeholder="John Doe" autoComplete="name"/>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" aria-label="Your Email" {...register("email", { required: true, pattern: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/})} placeholder="john.doe@example.com" autoComplete="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" aria-label="Your Message" {...register("message", { required: "You are trying to send a message right?"})} placeholder="Your message here..." />
            <button type="submit" className="full-button">{sent ? <><i className="fas fa-thumbs-up" />Message sent Successfully!</> : <><i className="fas fa-paper-plane"/>Say Hello</>}</button>
            {errors.name && errors.name.message}<br />
            {errors.email && "Please enter a valid email."}<br />
            {errors.message && errors.message.message}<br />

        </form>
    )
}

export default ContactForm