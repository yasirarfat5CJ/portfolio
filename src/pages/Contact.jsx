import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1234',            // ✅ your EmailJS service ID
        'template_vg2r5sl',        // ✅ your template ID
        form.current,
        'Ww_E2yt1nKQuL96_G'        // ✅ your public key
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact-page mt-5 pt-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input type="text" name="from_name" placeholder="Your Name" required />

            <label>Email</label>
            <input type="email" name="from_email" placeholder="Your Email" required />

            <label>Message</label>
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
            {sent && <p className="success-msg">Message sent successfully!</p>}
          </form>

          {/* This section will be hidden on small screens */}
          <div className="social-section hide-on-mobile">
            <h5>Connect with me:</h5>
            <div className="icons">
              <a href="https://github.com/yasirarfat5CJ" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/yasir-arfat-405249326" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="mailto:yasir.arfat.cse@email.com"><FaEnvelope /></a>
              <a href="https://leetcode.com/yasir_Arfat" target="_blank" rel="noreferrer"><FaCode /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
