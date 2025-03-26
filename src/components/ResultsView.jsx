import React from 'react';
import { Card, ProgressBar, Badge, Row, Col, Alert } from 'react-bootstrap';

/**
 * ResultsView component with UMKC EMBA and Lake of the Ozarks theme
 * Shows the winning weekend and votes for all options
 */
const ResultsView = ({ weekends, winningWeekend, formatDate }) => {
  // Ensure weekends is an array to prevent "not iterable" errors
  const weekendOptions = Array.isArray(weekends) ? weekends : [];
  
  // Sort weekends by vote count (highest first)
  const sortedWeekends = [...weekendOptions].sort((a, b) => {
    const votesA = typeof a.votes === 'number' ? a.votes : (Array.isArray(a.votes) ? a.votes.length : 0);
    const votesB = typeof b.votes === 'number' ? b.votes : (Array.isArray(b.votes) ? b.votes.length : 0);
    return votesB - votesA;
  });
  
  // Get the winning weekend
  const winner = winningWeekend || (sortedWeekends.length > 0 ? sortedWeekends[0] : null);
  
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
  
  // Find maximum vote count for relative scaling
  const maxVotes = sortedWeekends.length > 0 ? 
    (typeof sortedWeekends[0].votes === 'number' ? 
      sortedWeekends[0].votes : 
      (Array.isArray(sortedWeekends[0].votes) ? sortedWeekends[0].votes.length : 0)) 
    : 0;

  // Helper function to get vote count
  const getVoteCount = (weekend) => {
    return typeof weekend.votes === 'number' ? 
      weekend.votes : 
      (Array.isArray(weekend.votes) ? weekend.votes.length : 0);
  };
  
  return (
    <div>
      {/* Results Header */}
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
            Current Voting Results
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
          See which Lake of the Ozarks weekends are most popular based on UMKC EMBA votes.
        </p>
      </div>

      {/* Winning Weekend Card (if there is one) */}
      {winner && (
        <Card className="border-0 shadow mb-5" style={{
          borderRadius: '10px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0066CC, #003366)',
          color: 'white'
        }}>
          <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">Current Winning Weekend</h3>
              <Badge pill 
                style={{ 
                  background: '#FFD200', 
                  color: '#003366', 
                  fontSize: '1rem', 
                  padding: '0.5rem 1rem',
                  fontWeight: '600'
                }}
              >
                {getVoteCount(winner)} Vote{getVoteCount(winner) !== 1 ? 's' : ''}
              </Badge>
            </div>
            
            <div className="p-3 rounded" style={{ background: 'rgba(255, 255, 255, 0.15)' }}>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div className="mb-2 mb-md-0">
                  <div className="fs-5 mb-1" style={{ fontWeight: '600' }}>
                    {formatDate(winner.startDate)} - {formatDate(winner.endDate)}
                  </div>
                  <div className="d-flex flex-wrap gap-1 mt-2">
                    {Array.isArray(winner.votes) && winner.votes.slice(0, 3).map(voter => (
                      <Badge key={voter} 
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.25)', 
                          color: 'white'
                        }} 
                        className="me-1"
                      >
                        {voter}
                      </Badge>
                    ))}
                    {Array.isArray(winner.votes) && winner.votes.length > 3 && (
                      <Badge style={{ background: 'rgba(255, 255, 255, 0.25)', color: 'white' }}>
                        +{winner.votes.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="me-3 text-center">
                    <div className="fw-bold mb-1" style={{ fontSize: '1.2rem' }}>
                      {Math.round((getVoteCount(winner) / weekendOptions.reduce((sum, w) => sum + (getVoteCount(w) > 0 ? 1 : 0), 0)) * 100) || 0}%
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>of voters</div>
                  </div>
                  
                  <div className="position-relative" style={{ width: '70px', height: '70px' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="fs-4 fw-bold">{getVoteCount(winner)}</div>
                    </div>
                    <svg width="70" height="70" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="12" />
                      <circle cx="60" cy="60" r="54" fill="none" stroke="#FFD200" strokeWidth="12" 
                        strokeDasharray="339.292" 
                        strokeDashoffset={339.292 * (1 - getVoteCount(winner) / (maxVotes || 1))} 
                        transform="rotate(-90 60 60)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}

      {/* Results by Year */}
      {sortedYears.length > 0 ? (
        sortedYears.map(year => (
          <div key={year} className="mb-5">
            <div className="mb-3">
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
            
            <Row xs={1} lg={2} className="g-4">
              {weekendsByYear[year]
                .sort((a, b) => getVoteCount(b) - getVoteCount(a))
                .map(weekend => (
                  <Col key={weekend.id}>
                    <Card className="h-100 shadow-sm border-0" style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: winner && weekend.id === winner.id 
                        ? '0 5px 15px rgba(0, 102, 204, 0.2)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.08)',
                      border: winner && weekend.id === winner.id 
                        ? '2px solid #0066CC' 
                        : 'none'
                    }}>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title" style={{ 
                            color: '#003366',
                            fontWeight: '600'
                          }}>
                            {formatDate(weekend.startDate)} - {formatDate(weekend.endDate)}
                          </h5>
                          <Badge pill style={{ 
                            background: getVoteCount(weekend) > 0 
                              ? 'linear-gradient(to right, #0066CC, #004999)' 
                              : '#6c757d',
                            color: 'white',
                            padding: '0.4rem 0.8rem'
                          }}>
                            {getVoteCount(weekend)} Vote{getVoteCount(weekend) !== 1 ? 's' : ''}
                          </Badge>
                        </div>
                        
                        <div className="mb-3">
                          <ProgressBar 
                            now={maxVotes ? (getVoteCount(weekend) / maxVotes) * 100 : 0} 
                            style={{ 
                              height: '10px',
                              borderRadius: '5px',
                              backgroundColor: 'rgba(0, 51, 102, 0.1)'
                            }} 
                            variant={winner && weekend.id === winner.id ? 'primary' : 'info'} 
                          />
                        </div>
                        
                        {getVoteCount(weekend) > 0 ? (
                          <div>
                            <div className="small mb-2" style={{ color: '#0066CC' }}>Voted by:</div>
                            <div className="d-flex flex-wrap gap-1">
                              {Array.isArray(weekend.votes) && weekend.votes.map(voter => (
                                <Badge 
                                  key={voter} 
                                  bg="light"
                                  text="dark"
                                  style={{
                                    backgroundColor: '#f8f9fa',
                                    color: '#495057'
                                  }}
                                >
                                  {voter}
                                </Badge>
                              ))}
                              {!Array.isArray(weekend.votes) && (
                                <Badge bg="light" text="dark">
                                  {getVoteCount(weekend)} vote{getVoteCount(weekend) !== 1 ? 's' : ''}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="text-muted fst-italic">No votes yet</div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        ))
      ) : (
        <Alert 
          className="d-flex align-items-center mt-4 border-0"
          style={{ 
            background: 'linear-gradient(to right, rgba(78, 205, 196, 0.15), rgba(44, 153, 190, 0.1))',
            borderLeft: '4px solid #2C99BE',
            borderRadius: '0.5rem',
            padding: '1.25rem'
          }}
        >
          <svg width="24" height="24" fill="#0066CC" className="me-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
          <div style={{ color: '#003366' }}>
            No weekend options have been added yet. Check back later or add some options in the Admin Panel if you have access.
          </div>
        </Alert>
      )}
      
      {/* Explanation Section */}
      <div className="mt-5 pt-3 border-top">
        <h4 className="mb-3" style={{ color: '#003366' }}>How Voting Works</h4>
        <p className="text-muted">
          The weekend with the most votes will be chosen for our EMBA Lake Trip. Voting is done on a per-person basis,
          and the final decision will be announced once all votes are in. If you need to change your vote, you can do so
          in the "Vote for Weekends" tab.
        </p>
      </div>
    </div>
  );
};

export default ResultsView; 