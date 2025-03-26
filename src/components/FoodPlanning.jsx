import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, Table, Badge } from 'react-bootstrap';

/**
 * Simplified Food Planning component - Basic meal sign-up sheet
 */
const FoodPlanning = ({ currentUser, weekendData }) => {
  const [mealSignups, setMealSignups] = useState({
    breakfast: [],
    lunch: [],
    dinner: []
  });
  
  const [newItem, setNewItem] = useState({
    mealType: 'breakfast',
    item: '',
    contributor: currentUser || ''
  });

  // Generate meal schedule based on weekend data
  const generateMealDays = () => {
    if (!weekendData || !weekendData.startDate || !weekendData.endDate) {
      return [];
    }
    
    const startDate = new Date(weekendData.startDate);
    const endDate = new Date(weekendData.endDate);
    const days = [];
    
    // Loop through each day
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };
  
  const mealDays = generateMealDays();
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.item || !newItem.contributor) return;
    
    setMealSignups(prev => ({
      ...prev,
      [newItem.mealType]: [
        ...prev[newItem.mealType],
        {
          id: Date.now().toString(),
          ...newItem
        }
      ]
    }));
    
    // Reset form
    setNewItem({
      mealType: 'breakfast',
      item: '',
      contributor: currentUser || ''
    });
  };
  
  const handleDeleteItem = (mealType, itemId) => {
    setMealSignups(prev => ({
      ...prev,
      [mealType]: prev[mealType].filter(item => item.id !== itemId)
    }));
  };
  
  // Render signup form
  const renderSignupForm = () => {
    return (
      <Card className="shadow-sm border-0 mb-4">
        <Card.Header
          style={{
            background: 'linear-gradient(135deg, #0066CC, #004999)',
            color: 'white',
            fontWeight: '600',
            padding: '1rem'
          }}
        >
          Sign Up to Bring Food
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleAddItem}>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Meal Type</Form.Label>
                  <Form.Select
                    name="mealType"
                    value={newItem.mealType}
                    onChange={handleInputChange}
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Food Item</Form.Label>
                  <Form.Control
                    type="text"
                    name="item"
                    value={newItem.item}
                    onChange={handleInputChange}
                    placeholder="What are you bringing?"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="contributor"
                    value={newItem.contributor}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-end">
              <Button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #0066CC, #004999)',
                  border: 'none'
                }}
              >
                Add Food Item
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  };
  
  // Render meal signups table
  const renderMealSignups = () => {
    return (
      <Card className="shadow-sm border-0">
        <Card.Header
          style={{
            background: 'linear-gradient(135deg, #0066CC, #004999)',
            color: 'white',
            fontWeight: '600',
            padding: '1rem'
          }}
        >
          Food Sign-up Sheet
        </Card.Header>
        <Card.Body>
          {mealDays.length === 0 ? (
            <div className="text-center p-4">
              <p className="mb-0">No weekend selected yet. Please vote on a weekend first.</p>
            </div>
          ) : (
            <div>
              {mealDays.map((day, index) => (
                <div key={day.toISOString()} className="mb-4">
                  <h5 className="mb-3">
                    {formatDate(day)}
                    {index === 0 && <Badge bg="info" className="ms-2">Arrival Day</Badge>}
                    {index === mealDays.length - 1 && <Badge bg="warning" className="ms-2">Departure Day</Badge>}
                  </h5>
                  <Row>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Header className="bg-light">Breakfast</Card.Header>
                        <Card.Body>
                          {mealSignups.breakfast.length === 0 ? (
                            <p className="text-muted">No items yet</p>
                          ) : (
                            <Table responsive borderless size="sm">
                              <thead>
                                <tr>
                                  <th>Item</th>
                                  <th>Contributor</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {mealSignups.breakfast.map(item => (
                                  <tr key={item.id}>
                                    <td>{item.item}</td>
                                    <td>{item.contributor}</td>
                                    <td>
                                      {currentUser === item.contributor && (
                                        <Button
                                          variant="link"
                                          size="sm"
                                          className="text-danger p-0"
                                          onClick={() => handleDeleteItem('breakfast', item.id)}
                                        >
                                          ×
                                        </Button>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Header className="bg-light">Lunch</Card.Header>
                        <Card.Body>
                          {mealSignups.lunch.length === 0 ? (
                            <p className="text-muted">No items yet</p>
                          ) : (
                            <Table responsive borderless size="sm">
                              <thead>
                                <tr>
                                  <th>Item</th>
                                  <th>Contributor</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {mealSignups.lunch.map(item => (
                                  <tr key={item.id}>
                                    <td>{item.item}</td>
                                    <td>{item.contributor}</td>
                                    <td>
                                      {currentUser === item.contributor && (
                                        <Button
                                          variant="link"
                                          size="sm"
                                          className="text-danger p-0"
                                          onClick={() => handleDeleteItem('lunch', item.id)}
                                        >
                                          ×
                                        </Button>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Header className="bg-light">Dinner</Card.Header>
                        <Card.Body>
                          {mealSignups.dinner.length === 0 ? (
                            <p className="text-muted">No items yet</p>
                          ) : (
                            <Table responsive borderless size="sm">
                              <thead>
                                <tr>
                                  <th>Item</th>
                                  <th>Contributor</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {mealSignups.dinner.map(item => (
                                  <tr key={item.id}>
                                    <td>{item.item}</td>
                                    <td>{item.contributor}</td>
                                    <td>
                                      {currentUser === item.contributor && (
                                        <Button
                                          variant="link"
                                          size="sm"
                                          className="text-danger p-0"
                                          onClick={() => handleDeleteItem('dinner', item.id)}
                                        >
                                          ×
                                        </Button>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          )}
        </Card.Body>
      </Card>
    );
  };
  
  return (
    <Container>
      <div className="text-center mb-4">
        <h2 className="display-6 fw-bold mb-0" style={{ color: '#003366' }}>
          Food Planning
        </h2>
        <div style={{ height: '10px', width: '100px', background: 'rgba(255, 210, 0, 0.3)', margin: '0.5rem auto' }}></div>
        <p className="text-muted">Sign up to bring food for the EMBA Lake Trip</p>
      </div>
      
      {renderSignupForm()}
      {renderMealSignups()}
    </Container>
  );
};

export default FoodPlanning; 