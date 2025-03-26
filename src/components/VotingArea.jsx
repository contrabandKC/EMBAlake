import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import WeekendCard from './WeekendCard';

/**
 * VotingArea component with UMKC EMBA and Lake of the Ozarks theme
 * Displays and organizes weekend options by year for voting
 */
const VotingArea = ({ 
  weekendOptions, 
  currentUser, 
  onVote, 
  onRemoveVote, 
  onRemoveWeekend, 
  formatShortDate,
  isAdmin 
}) => {
  // Group weekend options by year
  const weekendsByYear = weekendOptions.reduce((acc, weekend) => {
    const year = new Date(weekend.startDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(weekend);
    return acc;
  }, {});

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(weekendsByYear)
    .map(Number)
    .sort((a, b) => b - a);

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
            Vote for Your Preferred Weekends
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
          Select the weekends that work best for your schedule at the Lake of the Ozarks. 
          You can vote for multiple options.
        </p>
      </div>
      
      {sortedYears.length > 0 ? (
        sortedYears.map(year => (
          <div key={year} className="mb-5">
            {/* Year Indicator */}
            <div className="sticky-top pt-2 pb-3" style={{ top: '10px', zIndex: 10 }}>
              <h3 className="d-inline-block py-1 px-4 rounded-pill shadow-sm"
                style={{ 
                  background: 'linear-gradient(135deg, #0066CC, #004999)',
                  color: 'white',
                  fontSize: '1.25rem',
                  boxShadow: '0 4px 8px rgba(0, 51, 102, 0.15)'
                }}>
                {year}
              </h3>
            </div>
            
            {/* Grid of Weekend Cards */}
            <Row xs={1} md={2} lg={3} className="g-4">
              {weekendsByYear[year].map(weekend => (
                <Col key={weekend.id}>
                  <WeekendCard
                    weekend={weekend}
                    currentUser={currentUser}
                    onVote={onVote}
                    onRemoveVote={onRemoveVote}
                    onRemoveWeekend={onRemoveWeekend}
                    formatShortDate={formatShortDate}
                    isAdmin={isAdmin}
                  />
                </Col>
              ))}
            </Row>
          </div>
        ))
      ) : (
        <div className="text-center p-5 bg-white rounded shadow-sm border mt-4"
          style={{ borderColor: 'rgba(0, 102, 204, 0.1) !important' }}>
          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
            style={{ 
              width: '90px', 
              height: '90px',
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
              boxShadow: 'inset 0 0 15px rgba(0, 51, 102, 0.05)'
            }}>
            <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#0066CC' }}>
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h4 className="mb-2" style={{ color: '#003366' }}>No Weekend Options Yet</h4>
          <p className="text-muted">
            {isAdmin 
              ? "Use the Admin Panel to add weekend options for everyone to vote on." 
              : "Check back soon! The admin will add Lake of the Ozarks weekend options for voting."}
          </p>
        </div>
      )}
      
      {/* Info Box at the Bottom */}
      {currentUser && weekendOptions.length > 0 && (
        <Alert 
          className="d-flex align-items-center mt-4 border-0"
          style={{ 
            background: 'linear-gradient(to right, rgba(78, 205, 196, 0.15), rgba(44, 153, 190, 0.1))',
            borderLeft: '4px solid #2C99BE',
            borderRadius: '0.5rem'
          }}
        >
          <svg width="20" height="20" fill="#0066CC" className="me-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
          <div style={{ color: '#003366' }}>
            You can vote for multiple weekends to indicate all dates that work for you. 
            Your votes help us determine the best weekend for the UMKC EMBA Lake of the Ozarks trip.
          </div>
        </Alert>
      )}
    </div>
  );
};

export default VotingArea; 