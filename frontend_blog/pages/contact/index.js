import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contactContainer">
      <h1>Contact Us</h1>
      <div className="contactContent">
        <form onSubmit={handleSubmit} className="contactForm">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.837369089073!2d78.56135847471455!3d25.410253877574405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397770ac9b401517%3A0x2aaac3368dee2064!2sHansari%2C%20Jhansi%2C%20Uttar%20Pradesh%20284001!5e0!3m2!1sen!2sin!4v1723634754446!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
