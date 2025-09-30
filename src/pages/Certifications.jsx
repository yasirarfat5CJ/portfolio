import React from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      title: 'Sample Certification 1',
      issuer: 'Issuer Name',
      date: 'Jan 2024',
      credentialId: 'ABC-123',
      link: '#'
    },
    {
      title: 'Sample Certification 2',
      issuer: 'Issuer Name',
      date: 'Jun 2023',
      credentialId: 'XYZ-789',
      link: '#'
    },
    {
      title: 'Sample Certification 3',
      issuer: 'Issuer Name',
      date: 'Dec 2022',
      credentialId: 'LMN-456',
      link: '#'
    }
  ];

  return (
    <div className="certifications-page py-5 text-white mt-5 pt-5">
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


