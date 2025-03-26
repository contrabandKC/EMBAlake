import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import TabNavigation from './components/TabNavigation';
import VotingArea from './components/VotingArea';
import ResultsView from './components/ResultsView';
import AdminPanel from './components/AdminPanel';
import FoodPlanning from './components/FoodPlanning';
import RoomPlanning from './components/RoomPlanning';
import MessageBoard from './components/MessageBoard';
import LoginForm from './components/LoginForm';
import { weekendOptions } from './data/weekendOptions';
import mealPlanningData from './data/mealPlanningData';
import FAQ from './components/FAQ';

function App() {
  const [weekends, setWeekends] = useState(weekendOptions);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('results');
  const [mealPlans, setMealPlans] = useState(mealPlanningData);

  // Load user from localStorage on component mount
  useEffect(() => {
    // Clear any potential corrupted data
    try {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          setCurrentUser(user);
          setIsAdmin(user.name === 'John');
        } catch (error) {
          console.error('Error parsing saved user data:', error);
          localStorage.removeItem('currentUser'); // Clear invalid data
        }
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      // Clear everything if localStorage is corrupted
      try {
        localStorage.clear();
      } catch (e) {
        console.error('Could not clear localStorage:', e);
      }
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAdmin(user.name === 'John');
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    localStorage.removeItem('currentUser');
  };

  const handleAddWeekend = (newWeekend) => {
    setWeekends([...weekends, { ...newWeekend, id: Date.now(), votes: 0 }]);
  };

  const handleVote = (weekendId) => {
    setWeekends(weekends.map(weekend => 
      weekend.id === weekendId 
        ? { ...weekend, votes: weekend.votes + 1 }
        : weekend
    ));
  };

  const handleUpdateMealPlan = (updatedMealPlan) => {
    setMealPlans(updatedMealPlan);
  };

  const calculateWinningWeekend = () => {
    return weekends.reduce((prev, current) => 
      (prev.votes > current.votes) ? prev : current
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!currentUser) {
    return (
      <div className="min-vh-100 d-flex flex-column">
        <Header />
        <Container className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
          <LoginForm onLogin={handleLogin} />
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <Container className="flex-grow-1 py-4">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'vote' && (
          <VotingArea 
            weekends={weekends} 
            onVote={handleVote}
            currentUser={currentUser}
            formatShortDate={formatDate}
            isAdmin={isAdmin}
          />
        )}
        
        {activeTab === 'results' && (
          <ResultsView 
            weekends={weekends}
            winningWeekend={calculateWinningWeekend()}
            formatDate={formatDate}
          />
        )}
        
        {activeTab === 'food' && (
          <FoodPlanning 
            currentUser={currentUser}
            weekendData={calculateWinningWeekend()}
            mealPlans={mealPlans}
            onUpdateMealPlan={handleUpdateMealPlan}
          />
        )}

        {activeTab === 'rooms' && (
          <RoomPlanning 
            currentUser={currentUser}
            weekendData={calculateWinningWeekend()}
          />
        )}

        {activeTab === 'messages' && (
          <MessageBoard currentUser={currentUser} />
        )}

        {activeTab === 'faq' && (
          <FAQ />
        )}
        
        {isAdmin && activeTab === 'admin' && (
          <AdminPanel 
            weekends={weekends}
            onAddWeekend={handleAddWeekend}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
