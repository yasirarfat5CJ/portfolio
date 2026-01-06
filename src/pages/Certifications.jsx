import React from 'react';
import './Certifications.css';

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
    }

  ];


  return (
    <div className="certifications-page py-5 text-white pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Certifications</h1>
            <p className="page-subtitle">A selection of my professional certifications.</p>
          </div>
        </div>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;


