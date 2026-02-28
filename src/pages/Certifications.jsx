import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';
const _MOTION = motion;

function Certifications() {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'sep 25',
      credentialId: '',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=33AEE00EC843E8A60430C4AB3C8830AB942621A779CE109E5D6498637A4D599D'
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'March 20, 2025',
      credentialId: '',
      link: 'https://www.credly.com/badges/fb57ca5a-3faa-4608-9bc9-26188030aba1'
    },
    {
      title: 'SQL(Basics)',
      issuer: 'Hackerrank',
      date: 'Aug 2025',
      credentialId: '',
      link: 'https://www.hackerrank.com/certificates/iframe/e70165a290fc'
    },
    {
      title: 'Full stack development',
      issuer: 'Apna-college',
      date: '',
      credentialId: '',
      link: 'https://drive.google.com/file/d/1M7Kvxs7gRcqGsj9pWIbXTsDCBndBLYKJ/view'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google cloud',
      date: 'oct 2025',
      credentialId: '',
      link: 'https://cdn.qwiklabs.com/VF6eQ1bV8SfqKBpu8AVD%2F4G93sg9wJQ0wWe9CTc%2FJ%2F4%3D'
    },
     {
      title: 'Generative AI',
      issuer: 'Udemy',
      date: 'jan 2026',
      credentialId: '',
      link: 'https://www.udemy.com/certificate/UC-d0ba9d97-9679-43a2-8852-2ea1b5ea6a79'
    }

  ];


  return (
    <motion.div
      className="certifications-page py-5 pt-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Certifications</h1>
            <p className="page-subtitle">A selection of my professional certifications.</p>
          </div>
        </div>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="card cert-card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{cert.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{cert.issuer}</h6>
                  <div className="mt-2 small text-secondary">{cert.date}</div>
                  {cert.credentialId && (
                    <div className="mt-2 small">Credential ID: <span className="text-monospace">{cert.credentialId}</span></div>
                  )}
                  <div className="mt-auto pt-3">
                    <a className="btn btn-outline-primary btn-sm" href={cert.link} target="_blank" rel="noreferrer">View credential</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Certifications;


