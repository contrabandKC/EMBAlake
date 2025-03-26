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
          style={{ flex: 1, maxWidth: '220px' }}
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
          style={{ flex: 1, maxWidth: '220px' }}
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

        <Nav.Item 
          className="mx-1"
          onClick={() => onTabChange('food')}
          style={{ flex: 1, maxWidth: '220px' }}
        >
          <Nav.Link 
            className="text-center py-2 px-3 d-flex align-items-center justify-content-center"
            style={{
              borderRadius: '0.5rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              color: activeTab === 'food' ? '#0066CC' : '#495057',
              background: activeTab === 'food' ? 'white' : 'transparent',
              boxShadow: activeTab === 'food' ? '0 2px 8px rgba(0, 51, 102, 0.1)' : 'none',
              border: activeTab === 'food' ? '1px solid rgba(0, 102, 204, 0.1)' : '1px solid transparent',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cup-hot-fill me-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
              <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.001.002-.001.001a.5.5 0 0 1-.44.277.5.5 0 0 1-.416-.724l.005-.006.005-.008.002-.002.001-.002a5.116 5.116 0 0 0 .209-.307 2.783 2.783 0 0 0 .178-.396c.015-.037.032-.077.047-.116.013-.028.021-.058.029-.085a.204.204 0 0 0 .007-.06v-.008a.307.307 0 0 0-.022-.107 1.76 1.76 0 0 0-.093-.158c-.124-.19-.272-.394-.445-.607l-.017-.022a20.733 20.733 0 0 0-.143-.17A5.505 5.505 0 0 0 3.6 1.227c-.052-.047-.09-.077-.125-.101a.344.344 0 0 0-.065-.033.272.272 0 0 0-.064-.014h-.018a.35.35 0 0 0-.097.023c-.012.004-.028.01-.05.02a.994.994 0 0 0-.25.142 3.606 3.606 0 0 0-.5.492A5.267 5.267 0 0 0 1.87 2.34l-.006.012a.5.5 0 0 1-.8.134A.508.508 0 0 1 .954 2H.5c.1.008.001.017.002.025l.008.042a4.974 4.974 0 0 0 .118.654c.106.492.29 1.033.571 1.569.183.348.4.68.65.99.244.306.516.584.79.832l.035.03c.054.047.1.086.144.122.013.01.025.02.038.03a.975.975 0 0 0 .078.055l.031.018a.994.994 0 0 0 .142.075l.012.005c.151.068.32.112.495.112.17 0 .332-.041.48-.106l.009-.004a.648.648 0 0 0 .098-.058l.022-.015a1.108 1.108 0 0 0 .094-.082c.02-.018.038-.038.054-.059l.035-.042a1.67 1.67 0 0 0 .193-.306c.02-.043.037-.088.052-.134a.847.847 0 0 0 .034-.121 1.092 1.092 0 0 0 .001-.706.857.857 0 0 0-.034-.121 1.806 1.806 0 0 0-.052-.134c-.049-.097-.114-.206-.193-.306l-.035-.04a.786.786 0 0 0-.054-.06 1.45 1.45 0 0 0-.094-.082l-.022-.016a.861.861 0 0 0-.098-.058l-.01-.004a.525.525 0 0 0-.093-.027h-.001a.512.512 0 0 0-.11-.012.517.517 0 0 0-.274.08l-.006.004a.246.246 0 0 0-.018.011 1.141 1.141 0 0 0-.825 1.082c0 .066.005.129.017.19a.973.973 0 0 0 .037.168c.01.033.024.066.037.098l.007.018c.044.096.101.183.17.261.167.25.203.085.225.098l.038-.019a.61.61 0 0 1 .305-.067.596.596 0 0 1 .513.323l.024.048a.6.6 0 0 1-.004.461.613.613 0 0 1-.32.324l-.009.004a.601.601 0 0 1-.498-.004l-.05-.024-.022-.013-.282-.173c-.108-.07-.237-.14-.379-.206a3.3 3.3 0 0 0-.579-.181 2.098 2.098 0 0 0-.352-.052 1.169 1.169 0 0 0-.472.072 1.11 1.11 0 0 0-.255.273l-.008.011-.012.022A.63.63 0 0 0 0 4.61a.657.657 0 0 0 .22.471l.137.138.038.034a4.31 4.31 0 0 0 .742.53c.329.192.7.342 1.119.466a7.1 7.1 0 0 0 1.135.215l.268.03c.124.014.252.021.382.021s.258-.007.382-.02c.19-.022.37-.057.553-.098l.85-.18c.208-.063.411-.133.61-.208.248-.093.49-.195.722-.306a5.097 5.097 0 0 0 .517-.28l.216-.15.058-.047c.104-.08.202-.16.296-.22l.022-.015a1.686 1.686 0 0 0 .661-.622c.063-.1.114-.205.156-.315.004-.01.008-.022.012-.032l.264.968a3.48 3.48 0 0 0-1.96.727A3.483 3.483 0 0 0 6.3 12.266z"/>
            </svg>
            Food Planning
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {/* Decorative water waves */}
      <div style={{ height: '10px', background: 'linear-gradient(90deg, #4ECDC4, #2C99BE)', borderRadius: '0 0 30px 30px', marginTop: '-5px', opacity: 0.2 }}></div>
    </Container>
  );
};

export default TabNavigation; 