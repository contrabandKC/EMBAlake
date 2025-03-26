import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

/**
 * WeekendCard component with UMKC EMBA and Lake of the Ozarks theme
 */
const WeekendCard = ({ 
  weekend, 
  currentUser, 
  onVote, 
  onRemoveVote, 
  onRemoveWeekend, 
  isAdmin, 
  formatShortDate 
}) => {
  const hasVoted = currentUser && weekend.votes && weekend.votes.includes(currentUser);
  const startDate = new Date(weekend.startDate);
  const endDate = new Date(weekend.endDate);
  const voteCount = weekend.votes ? weekend.votes.length : 0;
  
  return (
    <Card className="h-100 shadow border-0" style={{
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      transform: hasVoted ? 'translateY(-3px)' : 'none',
      boxShadow: hasVoted 
        ? '0 8px 16px rgba(0, 51, 102, 0.15)' 
        : '0 4px 10px rgba(0, 0, 0, 0.08)',
      background: hasVoted 
        ? 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(240,248,255,0.8))' 
        : 'white'
    }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            {/* Month display */}
            <div className="d-flex align-items-baseline">
              <div style={{ 
                fontSize: '1.75rem', 
                fontWeight: '700', 
                color: hasVoted ? '#0066CC' : '#003366'
              }}>
                {startDate.toLocaleString('default', { month: 'short' })}
              </div>
              {startDate.getMonth() !== endDate.getMonth() && (
                <>
                  <span className="mx-1 text-muted">-</span>
                  <div style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: '700', 
                    color: hasVoted ? '#0066CC' : '#003366'
                  }}>
                    {endDate.toLocaleString('default', { month: 'short' })}
                  </div>
                </>
              )}
            </div>
            
            {/* Day display */}
            <div className="d-flex align-items-baseline">
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: hasVoted ? '#0066CC' : '#003366'
              }}>
                {startDate.getDate()}
              </span>
              <span className="mx-1 text-muted">-</span>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: hasVoted ? '#0066CC' : '#003366'
              }}>
                {endDate.getDate()}
              </span>
              <span className="ms-2 small" style={{ color: '#6c757d' }}>
                {startDate.getFullYear()}
              </span>
            </div>
            
            {/* Days of week */}
            <div className="mt-1 small" style={{ color: '#6c757d' }}>
              {startDate.toLocaleString('en-us', {weekday: 'long'})} - {endDate.toLocaleString('en-us', {weekday: 'long'})}
            </div>
          </div>
          
          {/* Vote count */}
          <div 
            className="d-flex align-items-center py-1 px-3 rounded-pill" 
            style={{
              background: hasVoted 
                ? 'linear-gradient(to right, #0066CC, #004999)' 
                : 'rgba(0, 51, 102, 0.1)',
              color: hasVoted ? 'white' : '#0066CC',
              fontWeight: '600',
              boxShadow: hasVoted ? '0 2px 5px rgba(0, 51, 102, 0.25)' : 'none'
            }}
          >
            <svg width="14" height="14" fill="currentColor" className="me-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
            </svg>
            <span>{voteCount}</span>
            <span className="ms-1 small">vote{voteCount !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </Card.Body>
      
      <Card.Footer style={{ 
        backgroundColor: 'transparent',
        borderTop: hasVoted ? '1px solid rgba(0, 102, 204, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        padding: '1rem'
      }}>
        {hasVoted ? (
          <Button
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={() => onRemoveVote(weekend.id)}
            style={{
              background: 'white',
              color: '#0066CC',
              borderColor: '#0066CC',
              borderWidth: '2px',
              fontWeight: '500',
              transition: 'all 0.2s',
              boxShadow: '0 2px 4px rgba(0, 51, 102, 0.05)'
            }}
          >
            <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            I Can't Make It
          </Button>
        ) : (
          <Button
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={() => onVote(weekend.id)}
            style={{
              background: 'linear-gradient(to right, #0066CC, #004999)',
              borderColor: 'transparent',
              fontWeight: '500',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(0, 51, 102, 0.15)'
            }}
          >
            <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
            </svg>
            I'm In!
          </Button>
        )}
        
        {isAdmin && (
          <Button
            variant="link"
            className="w-100 mt-2 d-flex align-items-center justify-content-center"
            onClick={() => onRemoveWeekend(weekend.id)}
            style={{
              color: '#dc3545',
              textDecoration: 'none',
              padding: '0.375rem 0',
              fontSize: '0.875rem'
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" className="me-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
            Remove Option
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default WeekendCard;
