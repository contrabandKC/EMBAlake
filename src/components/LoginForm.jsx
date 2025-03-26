import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Image } from 'react-bootstrap';

/**
 * LoginForm component with UMKC EMBA and Lake of the Ozarks theme
 */
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>
        <Card className="border-0 shadow" 
          style={{ 
            borderRadius: '10px', 
            overflow: 'hidden',
            backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98)), url(https://images.unsplash.com/photo-1584968144023-92f888ac776d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          
          {/* Card header with UMKC blue */}
          <div style={{ height: '8px', background: 'linear-gradient(90deg, #0066CC, #003366)' }}></div>
          
          <Card.Body className="p-4 p-md-5">
            <div className="text-center mb-4">
              <div style={{ 
                background: 'linear-gradient(135deg, #0066CC, #003366)', 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1rem',
                position: 'relative',
                border: '3px solid #FFD200'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFD200" className="bi bi-water" viewBox="0 0 16 16">
                  <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65z"/>
                </svg>
              </div>
              
              <h2 className="display-6 fw-bold mb-2">
                <span style={{ color: '#0066CC' }}>UMKC</span> <span style={{ color: '#003366' }}>EMBA</span>
              </h2>
              <p className="text-muted">Lake of the Ozarks Weekend Trip Planner</p>
              
              {/* School logo */}
              <div className="mt-3 mb-4">
                <div className="d-inline-block px-3 py-1" style={{ backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                  <div className="d-flex align-items-center">
                    <span className="small text-muted">University of Missouri-Kansas City</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#003366', fontWeight: '500' }}>Enter your name to get started</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="py-2"
                  required
                  autoFocus
                  style={{ borderColor: '#0066CC', boxShadow: 'none' }}
                />
              </Form.Group>
              
              <div className="d-grid mt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="py-2"
                  disabled={!username.trim()}
                  style={{ 
                    background: 'linear-gradient(to right, #0066CC, #004999)',
                    borderColor: '#003366',
                    boxShadow: '0 4px 6px rgba(0, 51, 102, 0.1)'
                  }}
                >
                  Join the EMBA Lake Trip
                </Button>
              </div>
            </Form>
            
            <div className="text-center small mt-4">
              <p className="mb-0 text-muted">
                Returning users: We'll remember your preferences.
              </p>
              <p className="mb-0 mt-2 fst-italic" style={{ color: '#003366' }}>
                <strong>Admin Tip:</strong> Log in as "John" for admin privileges
              </p>
            </div>
          </Card.Body>
          
          {/* Card footer with lake-themed gradient */}
          <div style={{ height: '8px', background: 'linear-gradient(90deg, #4ECDC4, #2C99BE)' }}></div>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm; 