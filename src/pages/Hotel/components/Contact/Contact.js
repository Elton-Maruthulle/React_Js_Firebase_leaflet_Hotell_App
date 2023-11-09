import React from 'react'
import Navbar from '../navbar/navbar'

function Contact() {
  return (
    <div>
        <div>
        <Navbar />
      <h1>My Links</h1>
      <ul>
        <li>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <i className="far fa-envelope"></i> Email
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </li>
        <li>
          <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.your-portfolio-website.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-briefcase"></i> Portfolio
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Contact