import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer component with UMKC EMBA and Lake of the Ozarks theme
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ 
      background: 'linear-gradient(to bottom, #003366, #001A33)', 
      color: 'white',
      marginTop: '3rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Wave overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '40px', transform: 'rotateY(180deg)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" fillOpacity="0.2"></path>
        </svg>
      </div>
      
      <Container className="py-4">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div style={{ 
                background: 'linear-gradient(135deg, #0066CC, #004999)', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '10px',
                border: '2px solid #FFD200'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFD200" className="bi bi-water" viewBox="0 0 16 16">
                  <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65z"/>
                </svg>
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '1.1rem' }}>
                  <span style={{ color: '#FFD200' }}>UMKC</span> <span>EMBA</span>
                </div>
                <div className="small text-white-50">Lake Experience</div>
              </div>
            </div>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            <p className="small mb-0">
              <span className="text-white-50">Designed for UMKC Executive MBA Graduates</span>
            </p>
            <p className="small mb-0">
              <span className="text-white-50">&copy; {currentYear} All rights reserved</span>
            </p>
          </Col>
        </Row>
      </Container>
      
      {/* Bottom accent bar with lake colors */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #4ECDC4, #2C99BE)' }}></div>
    </footer>
  );
};

export default Footer; 