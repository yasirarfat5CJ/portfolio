import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
const _MOTION = motion;

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Check if env variables are missing
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      setErrorMsg('EmailJS is not configured properly. Check your .env file.');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      setStatus('sent');
      form.current.reset();

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMsg(error?.text || 'Failed to send message. Please try again.');
    }
  };

  return (
    <motion.div
      className="contact-page pt-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-content">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            {/* Name */}
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            {/* Email */}
            <label>Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            {/* Message */}
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            {/* Submit Button */}
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {status === 'sent' && (
              <p className="status-msg success-msg">
                Message sent successfully.
              </p>
            )}

            {status === 'error' && (
              <p className="status-msg error-msg">
                {errorMsg}
              </p>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="social-section hide-on-mobile"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h5>Connect with me:</h5>
            <div className="icons">
              <a href="https://github.com/yasirarfat5CJ" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yasir-arfat-405249326" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:yasir.arfat.cse@gmail.com">
                <FaEnvelope />
              </a>
              <a href="https://leetcode.com/yasir_Arfat" target="_blank" rel="noreferrer">
                <FaCode />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
