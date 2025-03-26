import React, { useState } from 'react';
import { Accordion, Card, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import faqData from '../data/faqData';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter FAQ items based on search query
  const filteredFaqData = searchQuery.trim() === '' 
    ? faqData 
    : faqData.map(category => ({
        category: category.category,
        items: category.items.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.items.length > 0);

  return (
    <div>
      {/* Title Section */}
      <div className="text-center mb-4">
        <div style={{ 
          position: 'relative', 
          display: 'inline-block', 
          marginBottom: '1rem',
          zIndex: 1
        }}>
          <h2 className="display-6 fw-bold mb-0" 
            style={{ 
              color: '#003366',
              position: 'relative', 
              zIndex: 2 
            }}>
            Frequently Asked Questions
          </h2>
          <div style={{ 
            position: 'absolute', 
            height: '10px', 
            background: 'linear-gradient(90deg, rgba(255, 210, 0, 0.3), rgba(255, 210, 0, 0))', 
            width: '100%', 
            bottom: 0, 
            left: 0,
            zIndex: 1
          }}></div>
        </div>
        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Find answers to common questions about the EMBA Lake Trip to Lake of the Ozarks
        </p>
      </div>
      
      {/* Search Bar */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} lg={6}>
          <InputGroup>
            <Form.Control
              placeholder="Search questions and answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ borderColor: '#0066CC' }}
            />
            {searchQuery && (
              <Button 
                variant="outline-secondary" 
                onClick={() => setSearchQuery('')}
              >
                Clear
              </Button>
            )}
          </InputGroup>
        </Col>
      </Row>
      
      {/* FAQ Accordions */}
      {filteredFaqData.length > 0 ? (
        filteredFaqData.map((category, categoryIndex) => (
          category.items.length > 0 && (
            <div key={categoryIndex} className="mb-4">
              <h3 className="mb-3" style={{ color: '#0066CC', fontSize: '1.5rem' }}>
                {category.category}
              </h3>
              <Accordion defaultActiveKey={searchQuery ? `${categoryIndex}-0` : null} alwaysOpen={!!searchQuery}>
                {category.items.map((item, itemIndex) => (
                  <Accordion.Item 
                    key={itemIndex} 
                    eventKey={`${categoryIndex}-${itemIndex}`}
                    className="mb-2 border"
                    style={{ borderRadius: '8px', overflow: 'hidden' }}
                  >
                    <Accordion.Header>
                      <span style={{ fontWeight: '500' }}>{item.question}</span>
                    </Accordion.Header>
                    <Accordion.Body style={{ background: '#f8f9fa' }}>
                      <p style={{ color: '#333333' }}>{item.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          )
        ))
      ) : (
        <div className="text-center p-5 bg-white rounded shadow-sm border mt-4">
          <div className="mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#0066CC" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
          <h4 style={{ color: '#003366' }}>No matches found</h4>
          <p className="text-muted">Try different search terms or clear the search to see all FAQs.</p>
        </div>
      )}
      
      {/* Lake Info Card */}
      <Card className="mt-5 bg-light border-0 shadow-sm">
        <Card.Body className="p-4">
          <Row>
            <Col md={8}>
              <h4 style={{ color: '#003366' }}>Lake House Location</h4>
              <p className="mb-3">
                <strong>Address:</strong> 244 Navajo Rd, Lake Ozark, MO 65049
              </p>
              <p className="mb-3">
                Lake of the Ozarks is one of Missouri's premier vacation destinations, with 1,150 miles 
                of shoreline and plenty of recreational activities. The lake house is centrally located 
                with easy access to restaurants, shopping, and attractions.
              </p>
              <p>
                For any questions not covered in the FAQ, please post on the Message Board 
                or contact the trip coordinator.
              </p>
            </Col>
            <Col md={4} className="d-flex align-items-center justify-content-center">
              <div style={{ 
                width: '100%', 
                maxWidth: '200px', 
                height: '200px', 
                background: 'linear-gradient(135deg, #4ECDC4, #2C99BE)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FAQ; 