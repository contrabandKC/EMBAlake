import React from 'react';
import { Nav, Container } from 'react-bootstrap';

/**
 * Tab Navigation component with UMKC EMBA and Lake of the Ozarks theme
 */
const TabNavigation = ({ activeTab, onTabChange }) => {
  return (
    <Container className="my-4">
      <Nav 
        className="justify-content-center" 
        style={{
          background: 'white',
          padding: '0.5rem',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 12px rgba(0, 51, 102, 0.1)',
          border: '1px solid rgba(0, 102, 204, 0.1)',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Nav.Item 
          className="mx-1"
          onClick={() => onTabChange('vote')}
          style={{ flex: 1, maxWidth: '280px' }}
        >
          <Nav.Link 
            className="text-center py-2 px-3 d-flex align-items-center justify-content-center"
            style={{
              borderRadius: '0.5rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              color: activeTab === 'vote' ? '#0066CC' : '#495057',
              background: activeTab === 'vote' ? 'white' : 'transparent',
              boxShadow: activeTab === 'vote' ? '0 2px 8px rgba(0, 51, 102, 0.1)' : 'none',
              border: activeTab === 'vote' ? '1px solid rgba(0, 102, 204, 0.1)' : '1px solid transparent',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-calendar-check me-2" viewBox="0 0 16 16">
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            Vote for Weekends
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item 
          className="mx-1"
          onClick={() => onTabChange('results')}
          style={{ flex: 1, maxWidth: '280px' }}
        >
          <Nav.Link 
            className="text-center py-2 px-3 d-flex align-items-center justify-content-center"
            style={{
              borderRadius: '0.5rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              color: activeTab === 'results' ? '#0066CC' : '#495057',
              background: activeTab === 'results' ? 'white' : 'transparent',
              boxShadow: activeTab === 'results' ? '0 2px 8px rgba(0, 51, 102, 0.1)' : 'none',
              border: activeTab === 'results' ? '1px solid rgba(0, 102, 204, 0.1)' : '1px solid transparent',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-fill me-2" viewBox="0 0 16 16">
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
            </svg>
            See Results
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {/* Decorative water waves */}
      <div style={{ height: '10px', background: 'linear-gradient(90deg, #4ECDC4, #2C99BE)', borderRadius: '0 0 30px 30px', marginTop: '-5px', opacity: 0.2 }}></div>
    </Container>
  );
};

export default TabNavigation; 