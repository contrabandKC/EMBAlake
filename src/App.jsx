import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabNavigation from './components/TabNavigation';
import VotingArea from './components/VotingArea';
import ResultsView from './components/ResultsView';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

// Mock data for initial weekend options
const mockData = [
  {
    id: "1",
    startDate: "2025-05-23",
    endDate: "2025-05-25",
    votes: []
  },
  {
    id: "2",
    startDate: "2025-06-06",
    endDate: "2025-06-08",
    votes: []
  },
  {
    id: "3",
    startDate: "2025-06-20",
    endDate: "2025-06-22",
    votes: []
  },
  {
    id: "4",
    startDate: "2025-07-11",
    endDate: "2025-07-13",
    votes: []
  },
  {
    id: "5",
    startDate: "2026-05-22",
    endDate: "2026-05-24",
    votes: []
  },
  {
    id: "6",
    startDate: "2026-06-05",
    endDate: "2026-06-07",
    votes: []
  }
];

function App() {
  // State management
  const [weekendOptions, setWeekendOptions] = useState(mockData);
  const [currentUser, setCurrentUser] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('vote'); // 'vote' or 'results'

  // Check if user is returning from local storage
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(savedUser);
      setIsAdmin(savedUser.toLowerCase() === 'john');
    }
  }, []);

  // Handle user login
  const handleLogin = (username) => {
    const name = username.trim();
    if (name) {
      setCurrentUser(name);
      localStorage.setItem('currentUser', name);
      
      // Check if user is admin (John)
      setIsAdmin(name.toLowerCase() === 'john');
    }
  };

  // Handle adding a new weekend option
  const handleAddWeekend = (startDate, endDate) => {
    const newWeekend = {
      id: Date.now().toString(),
      startDate,
      endDate,
      votes: []
    };
    setWeekendOptions(prev => [...prev, newWeekend]);
  };

  // Handle removing a weekend option
  const handleRemoveWeekend = (weekendId) => {
    setWeekendOptions(prev => prev.filter(weekend => weekend.id !== weekendId));
  };

  // Handle voting for a weekend
  const handleVote = (weekendId) => {
    if (!currentUser) return;
    
    setWeekendOptions(prev => 
      prev.map(weekend => {
        if (weekend.id === weekendId && !weekend.votes.includes(currentUser)) {
          return { ...weekend, votes: [...weekend.votes, currentUser] };
        }
        return weekend;
      })
    );
  };

  // Handle removing a vote
  const handleRemoveVote = (weekendId) => {
    if (!currentUser) return;
    
    setWeekendOptions(prev => 
      prev.map(weekend => {
        if (weekend.id === weekendId && weekend.votes.includes(currentUser)) {
          return { 
            ...weekend, 
            votes: weekend.votes.filter(voter => voter !== currentUser) 
          };
        }
        return weekend;
      })
    );
  };

  // Calculate the winning weekend
  const calculateWinner = () => {
    if (weekendOptions.length === 0) return null;
    
    const sortedOptions = [...weekendOptions].sort((a, b) => b.votes.length - a.votes.length);
    return sortedOptions[0].votes.length > 0 ? sortedOptions[0] : null;
  };

  // Format date for display
  const formatShortDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Header 
        currentUser={currentUser} 
        isAdmin={isAdmin}
      />
      
      <Container className="flex-grow-1 py-4">
        {!currentUser ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <>
            <TabNavigation 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />
            
            <div className="bg-white rounded shadow-sm p-4 mt-3">
              {activeTab === 'vote' ? (
                <VotingArea 
                  weekendOptions={weekendOptions}
                  currentUser={currentUser}
                  onVote={handleVote}
                  onRemoveVote={handleRemoveVote}
                  onRemoveWeekend={handleRemoveWeekend}
                  formatShortDate={formatShortDate}
                  isAdmin={isAdmin}
                />
              ) : (
                <ResultsView 
                  weekendOptions={weekendOptions}
                  currentUser={currentUser}
                  calculateWinner={calculateWinner}
                  formatShortDate={formatShortDate}
                />
              )}
            </div>
            
            {isAdmin && (
              <div className="mt-4">
                <AdminPanel onAddWeekend={handleAddWeekend} />
              </div>
            )}
          </>
        )}
      </Container>
      
      <Footer currentYear={new Date().getFullYear()} />
    </div>
  );
}

export default App;
