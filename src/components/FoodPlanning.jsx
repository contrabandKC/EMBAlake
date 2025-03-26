import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup, Badge, Tabs, Tab } from 'react-bootstrap';
import { getMealTypeIcon, getDietaryIcon } from '../utils/foodPlanningUtils.jsx';

/**
 * FoodPlanning component with UMKC EMBA and Lake of the Ozarks theme
 * Allows users to coordinate meals, dietary restrictions, and food assignments
 */
const FoodPlanning = ({ currentUser, weekendData, onUpdateMealPlan }) => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [userDietaryPrefs, setUserDietaryPrefs] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    nutAllergy: false,
    other: ''
  });
  const [showDietaryModal, setShowDietaryModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showMealModal, setShowMealModal] = useState(false);
  
  // Generate meal schedule based on weekend start and end dates
  const generateMealSchedule = () => {
    if (!weekendData || !weekendData.startDate || !weekendData.endDate) {
      return [];
    }
    
    const startDate = new Date(weekendData.startDate);
    const endDate = new Date(weekendData.endDate);
    const meals = [];
    
    // Loop through each day
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const isFirstDay = currentDate.toDateString() === startDate.toDateString();
      const isLastDay = currentDate.toDateString() === endDate.toDateString();
      
      // Add appropriate meals based on the day
      if (isFirstDay && isLastDay) {
        // If it's both the first and last day (one day trip), add all three meals
        meals.push({
          id: `breakfast-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'breakfast',
          time: '8:30 AM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
        
        meals.push({
          id: `lunch-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'lunch',
          time: '12:30 PM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
        
        meals.push({
          id: `dinner-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'dinner',
          time: '6:30 PM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
      } else if (isFirstDay) {
        // First day typically has dinner only
        meals.push({
          id: `dinner-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'dinner',
          time: '6:30 PM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
      } else if (isLastDay) {
        // Last day typically has breakfast only
        meals.push({
          id: `breakfast-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'breakfast',
          time: '8:30 AM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
      } else {
        // Full days have all three meals
        meals.push({
          id: `breakfast-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'breakfast',
          time: '8:30 AM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
        
        meals.push({
          id: `lunch-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'lunch',
          time: '12:30 PM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
        
        meals.push({
          id: `dinner-${currentDate.toISOString().split('T')[0]}`,
          date: new Date(currentDate),
          mealType: 'dinner',
          time: '6:30 PM',
          plan: 'undecided',
          dishes: [],
          volunteers: [],
          notes: ''
        });
      }
      
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return meals;
  };
  
  const meals = generateMealSchedule();
  
  // Group meals by day for display
  const mealsByDay = meals.reduce((acc, meal) => {
    const dateStr = meal.date.toDateString();
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(meal);
    return acc;
  }, {});
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  };
  
  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setShowMealModal(true);
  };
  
  const handleDietaryPrefsSubmit = (e) => {
    e.preventDefault();
    // Save dietary preferences to user profile
    setShowDietaryModal(false);
  };
  
  const renderMealSchedule = () => {
    return (
      <div className="mt-4">
        {Object.keys(mealsByDay).map(dateStr => (
          <Card className="mb-4 shadow-sm border-0" key={dateStr}
            style={{ 
              borderRadius: '10px',
              overflow: 'hidden'
            }}
          >
            <Card.Header 
              style={{ 
                background: 'linear-gradient(135deg, #0066CC, #004999)',
                color: 'white',
                fontWeight: '600',
                fontSize: '1.1rem',
                padding: '0.75rem 1.25rem',
                borderBottom: 'none'
              }}
            >
              {formatDate(new Date(dateStr))}
            </Card.Header>
            <ListGroup variant="flush">
              {mealsByDay[dateStr].map(meal => (
                <ListGroup.Item 
                  key={meal.id}
                  action
                  onClick={() => handleMealClick(meal)}
                  className="d-flex justify-content-between align-items-center"
                  style={{ 
                    padding: '1rem 1.25rem',
                    transition: 'all 0.2s ease',
                    borderLeft: meal.plan !== 'undecided' ? '4px solid #4ECDC4' : 'none'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(0, 51, 102, 0.1)'
                      }}
                    >
                      {getMealTypeIcon(meal.mealType)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 'bold', color: '#003366' }}>
                        {meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1)}
                        <span className="ms-2 text-muted" style={{ fontSize: '0.9rem' }}>
                          {meal.time}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                        {meal.plan === 'undecided' ? 'Not planned yet' : meal.plan}
                      </div>
                    </div>
                  </div>
                  <div>
                    {meal.plan === 'undecided' ? (
                      <Badge 
                        style={{ 
                          background: 'rgba(108, 117, 125, 0.1)',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}
                      >
                        Plan this meal
                      </Badge>
                    ) : meal.plan === 'potluck' ? (
                      <Badge 
                        style={{ 
                          background: 'rgba(78, 205, 196, 0.1)',
                          color: '#2C99BE',
                          fontWeight: '500'
                        }}
                      >
                        Potluck ({meal.dishes.length} dishes)
                      </Badge>
                    ) : meal.plan === 'restaurant' ? (
                      <Badge 
                        style={{ 
                          background: 'rgba(255, 210, 0, 0.1)',
                          color: '#ff9900',
                          fontWeight: '500'
                        }}
                      >
                        Restaurant
                      </Badge>
                    ) : (
                      <Badge 
                        style={{ 
                          background: 'rgba(0, 102, 204, 0.1)',
                          color: '#0066CC',
                          fontWeight: '500'
                        }}
                      >
                        {meal.plan}
                      </Badge>
                    )}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        ))}
      </div>
    );
  };
  
  return (
    <Container>
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
            Food Planning
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
          Coordinate meals, dietary preferences, and food assignments for the Lake of the Ozarks trip.
        </p>
      </div>
      
      <Row className="mb-4">
        <Col>
          <Card className="border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h5 style={{ color: '#003366', marginBottom: '0.5rem' }}>Your Dietary Preferences</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                  Help others plan meals that work for everyone
                </p>
              </div>
              <Button
                onClick={() => setShowDietaryModal(true)}
                style={{ 
                  background: 'linear-gradient(to right, #0066CC, #004999)',
                  borderColor: 'transparent',
                  boxShadow: '0 2px 4px rgba(0, 51, 102, 0.1)'
                }}
              >
                Set Preferences
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
        style={{
          borderBottom: '1px solid rgba(0, 51, 102, 0.1)'
        }}
      >
        <Tab 
          eventKey="schedule" 
          title="Meal Schedule"
          tabClassName="text-primary"
        >
          {renderMealSchedule()}
        </Tab>
        <Tab 
          eventKey="recipes" 
          title="Recipe Ideas"
          tabClassName="text-primary"
        >
          <div className="p-4 text-center">
            <p className="text-muted">Share recipe ideas with your EMBA classmates.</p>
            <Button
              style={{ 
                background: 'linear-gradient(to right, #0066CC, #004999)',
                borderColor: 'transparent',
                boxShadow: '0 2px 4px rgba(0, 51, 102, 0.1)'
              }}
            >
              Add Recipe
            </Button>
          </div>
        </Tab>
        <Tab 
          eventKey="restaurants" 
          title="Local Restaurants"
          tabClassName="text-primary"
        >
          <div className="p-4 text-center">
            <p className="text-muted">View and vote on Lake of the Ozarks restaurant options.</p>
            <Button
              style={{ 
                background: 'linear-gradient(to right, #0066CC, #004999)',
                borderColor: 'transparent',
                boxShadow: '0 2px 4px rgba(0, 51, 102, 0.1)'
              }}
            >
              Suggest Restaurant
            </Button>
          </div>
        </Tab>
      </Tabs>
      
      {/* Guidance Box */}
      <Card className="border-0 mb-4 shadow-sm" 
        style={{ 
          borderRadius: '10px',
          overflow: 'hidden',
          borderLeft: '4px solid #4ECDC4' 
        }}>
        <Card.Body>
          <h5 style={{ color: '#003366' }}>Planning Tips</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className="border-0 px-0">
              <strong>Potluck Meals:</strong> Sign up to bring a dish and coordinate with others.
            </ListGroup.Item>
            <ListGroup.Item className="border-0 px-0">
              <strong>Restaurant Outings:</strong> Vote on options and plan reservations in advance.
            </ListGroup.Item>
            <ListGroup.Item className="border-0 px-0">
              <strong>Dietary Needs:</strong> Update your preferences to help meal planners.
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      
      {/* This would be expanded with modals for meal planning and dietary preferences */}
    </Container>
  );
};

export default FoodPlanning; 