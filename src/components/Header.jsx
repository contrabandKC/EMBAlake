import React from 'react';
import { Navbar, Container, Badge, Button } from 'react-bootstrap';

/**
 * Header component with UMKC EMBA and Lake of the Ozarks theme
 */
const Header = ({ currentUser, isAdmin }) => {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
  };

  return (
    <header>
      {/* UMKC-themed top navbar */}
      <div className="bg-dark py-1">
        <Container>
          <div className="d-flex justify-content-end">
            <small className="text-white-50">UMKC Executive MBA Program</small>
          </div>
        </Container>
      </div>

      {/* Main header with lake-themed styling */}
      <Navbar style={{ background: 'linear-gradient(to right, #0066CC, #005BB5)' }} variant="dark" className="py-3 shadow-sm">
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Brand className="d-flex align-items-center">
              <div className="me-2" style={{ backgroundColor: '#FFD200', padding: '6px', borderRadius: '4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0066CC" className="bi bi-water" viewBox="0 0 16 16">
                  <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65z"/>
                </svg>
              </div>
              <div>
                <span className="fw-bold fs-4">
                  EMBA<span style={{ color: '#FFD200' }}>lake</span>
                </span>
                <span className="fs-6 d-block text-white-50">
                  Lake of the Ozarks Trip Planner
                </span>
              </div>
            </Navbar.Brand>
            
            {currentUser && (
              <div className="d-flex align-items-center">
                <div className="text-end me-2">
                  <div className="text-white-50 small">Logged in as</div>
                  <div className="fw-bold">{currentUser}</div>
                </div>
                
                {isAdmin && (
                  <Badge bg="warning" text="dark" className="ms-2 px-2 py-1 fw-bold" style={{ backgroundColor: '#FFD200' }}>
                    Admin
                  </Badge>
                )}
                
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  className="ms-3"
                  onClick={handleLogout}
                  style={{ borderColor: '#FFD200', color: '#FFD200' }}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </Container>
      </Navbar>

      {/* Decorative wave pattern */}
      <div style={{ height: '8px', background: 'linear-gradient(90deg, #4ECDC4, #2C99BE, #0066CC)', marginBottom: '1rem' }}></div>
    </header>
  );
};

export default Header; 