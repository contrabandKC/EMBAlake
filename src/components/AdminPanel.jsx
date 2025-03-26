import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

/**
 * AdminPanel component with UMKC EMBA and Lake of the Ozarks theme
 * Allows admin users to add new weekend options
 */
const AdminPanel = ({ onAddWeekend }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      onAddWeekend(startDate, endDate);
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <Card className="border-0 shadow" style={{ 
      borderRadius: '10px',
      overflow: 'hidden'
    }}>
      {/* Admin badge */}
      <div className="px-4 py-3" style={{ 
        background: 'linear-gradient(to right, #FFD200, #FFC107)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-shield-lock me-2" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.115.054.215.096a.13.13 0 0 0 .064.016.163.163 0 0 0 .063-.016 4.6 4.6 0 0 0 .215-.096c.241-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.03 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56z"/>
            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
          </svg>
          <h5 className="mb-0 fw-bold" style={{ color: '#003366' }}>UMKC EMBA Admin Panel</h5>
        </div>
      </div>
      
      <Card.Body className="p-4" style={{ 
        background: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(245,247,250,0.8))'
      }}>
        <Form onSubmit={handleSubmit}>
          <h5 className="mb-3" style={{ color: '#0066CC' }}>Add Lake of the Ozarks Weekend Options</h5>
          
          <Row className="g-3 mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ fontWeight: '500', color: '#003366' }}>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  style={{ 
                    borderColor: '#0066CC',
                    boxShadow: 'none'
                  }}
                />
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ fontWeight: '500', color: '#003366' }}>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  style={{ 
                    borderColor: '#0066CC',
                    boxShadow: 'none'
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          
          <div className="d-grid">
            <Button 
              type="submit" 
              size="lg" 
              className="position-relative overflow-hidden"
              disabled={!startDate || !endDate}
              style={{ 
                background: 'linear-gradient(to right, #0066CC, #004999)',
                borderColor: '#003366',
                boxShadow: '0 4px 6px rgba(0, 51, 102, 0.1)'
              }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle me-2" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Add Weekend Option
              </div>
            </Button>
          </div>
        </Form>
        
        <p className="text-muted small mt-3">
          Weekend options will be organized by year and displayed for participants to vote on.
          Try to add options that span Friday-Sunday for optimal trip planning.
        </p>
      </Card.Body>
      
      {/* Bottom accent with wave pattern */}
      <div style={{ position: 'relative', height: '6px', background: 'linear-gradient(90deg, #4ECDC4, #2C99BE)' }}>
      </div>
    </Card>
  );
};

export default AdminPanel; 