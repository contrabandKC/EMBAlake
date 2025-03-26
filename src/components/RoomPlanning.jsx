import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup, Badge, Alert } from 'react-bootstrap';

/**
 * Room Planning component for UMKC EMBA Lake Trip
 * Handles bedroom assignments and local accommodation options
 */
const RoomPlanning = ({ currentUser, weekendData }) => {
  // Room data with 4 available bedrooms
  const [rooms, setRooms] = useState([
    {
      id: 'room1',
      name: 'Master Bedroom',
      capacity: 2,
      amenities: ['King Bed', 'En-suite Bathroom', 'Lake View'],
      occupants: []
    },
    {
      id: 'room2',
      name: 'Guest Bedroom 1',
      capacity: 2,
      amenities: ['Queen Bed', 'Shared Bathroom', 'Mountain View'],
      occupants: []
    },
    {
      id: 'room3',
      name: 'Guest Bedroom 2',
      capacity: 2,
      amenities: ['Two Twin Beds', 'Shared Bathroom', 'Forest View'],
      occupants: []
    },
    {
      id: 'room4',
      name: 'Loft Bedroom',
      capacity: 2,
      amenities: ['Queen Bed', 'Half Bath', 'Skylight'],
      occupants: []
    }
  ]);

  // Local accommodations near the lake
  const localAccommodations = [
    {
      id: 'acc1',
      name: 'Lakefront Condo Rentals',
      distance: '2 minutes away',
      priceRange: '$$',
      description: 'Comfortable condos with lake views, boat slips, and pool access just down Navajo Road'
    },
    {
      id: 'acc2',
      name: 'Bagnell Dam Lodge',
      distance: '3 minutes away',
      priceRange: '$',
      description: 'Budget-friendly rooms with basic amenities, convenient to both the lake and the Strip'
    },
    {
      id: 'acc3',
      name: 'Camden on the Lake Resort',
      distance: '5 minutes away',
      priceRange: '$$$',
      description: 'Luxury lakefront resort with restaurant, spa and boat rentals'
    },
    {
      id: 'acc4',
      name: 'Margaritaville Lake Resort',
      distance: '10 minutes away',
      priceRange: '$$$',
      description: 'Island-inspired resort with multiple pools and restaurants'
    },
    {
      id: 'acc5',
      name: 'Lake Breeze Hotel',
      distance: '15 minutes away',
      priceRange: '$$',
      description: 'Mid-range hotel with complimentary breakfast and lake views'
    },
    {
      id: 'acc6',
      name: 'Ozark Mountain Lodge',
      distance: '20 minutes away',
      priceRange: '$',
      description: 'Budget-friendly option with basic amenities and free parking'
    }
  ];

  // Handle reserving a room
  const handleReserveRoom = (roomId) => {
    if (!currentUser) return;
    
    setRooms(prevRooms => 
      prevRooms.map(room => {
        if (room.id === roomId && room.occupants.length < room.capacity && !room.occupants.includes(currentUser)) {
          return { ...room, occupants: [...room.occupants, currentUser] };
        }
        return room;
      })
    );
  };

  // Handle canceling a room reservation
  const handleCancelReservation = (roomId) => {
    if (!currentUser) return;
    
    setRooms(prevRooms => 
      prevRooms.map(room => {
        if (room.id === roomId && room.occupants.includes(currentUser)) {
          return { ...room, occupants: room.occupants.filter(occupant => occupant !== currentUser) };
        }
        return room;
      })
    );
  };

  // Check if the current user has already reserved a room
  const hasReservedRoom = rooms.some(room => room.occupants.includes(currentUser));

  // Render bedrooms section
  const renderBedrooms = () => {
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
          Main House Bedrooms (4 Available)
        </Card.Header>
        <Card.Body>
          {!weekendData ? (
            <Alert variant="info">
              Please vote on a weekend first to reserve a room.
            </Alert>
          ) : (
            <>
              {hasReservedRoom && (
                <Alert variant="success" className="mb-4">
                  You have reserved a room! You can cancel your reservation if needed.
                </Alert>
              )}
              <Row xs={1} md={2} className="g-4">
                {rooms.map(room => (
                  <Col key={room.id}>
                    <Card className="h-100 shadow-sm">
                      <Card.Header className="d-flex justify-content-between align-items-center">
                        <span>{room.name}</span>
                        <Badge bg={room.occupants.length === room.capacity ? "danger" : "success"}>
                          {room.occupants.length === room.capacity ? "Full" : `${room.occupants.length}/${room.capacity} Occupied`}
                        </Badge>
                      </Card.Header>
                      <Card.Body>
                        <h6 className="mb-3">Amenities:</h6>
                        <ListGroup variant="flush" className="mb-3">
                          {room.amenities.map((amenity, index) => (
                            <ListGroup.Item key={index} className="py-1 px-0 border-0">
                              • {amenity}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                        
                        <h6 className="mb-2">Occupants:</h6>
                        {room.occupants.length === 0 ? (
                          <p className="text-muted small">No reservations yet</p>
                        ) : (
                          <ListGroup variant="flush">
                            {room.occupants.map((occupant, index) => (
                              <ListGroup.Item key={index} className="py-1 px-0 border-0 d-flex justify-content-between">
                                {occupant}
                                {currentUser === occupant && (
                                  <Button 
                                    variant="link" 
                                    size="sm" 
                                    className="text-danger p-0" 
                                    onClick={() => handleCancelReservation(room.id)}
                                  >
                                    Cancel
                                  </Button>
                                )}
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        )}
                      </Card.Body>
                      <Card.Footer className="text-center">
                        {room.occupants.includes(currentUser) ? (
                          <Button 
                            variant="outline-danger" 
                            size="sm" 
                            onClick={() => handleCancelReservation(room.id)}
                          >
                            Cancel My Reservation
                          </Button>
                        ) : room.occupants.length < room.capacity && !hasReservedRoom ? (
                          <Button 
                            variant="primary" 
                            size="sm" 
                            onClick={() => handleReserveRoom(room.id)}
                            style={{
                              background: 'linear-gradient(135deg, #0066CC, #004999)',
                              border: 'none'
                            }}
                          >
                            Reserve Room
                          </Button>
                        ) : (
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            disabled
                          >
                            {hasReservedRoom ? "Already Reserved Another Room" : "Room Full"}
                          </Button>
                        )}
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Card.Body>
      </Card>
    );
  };

  // Render local accommodations section
  const renderLocalAccommodations = () => {
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
          Nearby Accommodations
        </Card.Header>
        <Card.Body>
          <p className="mb-4">
            If the main house rooms are full or you prefer to stay elsewhere, here are some nearby accommodations relative to our lake house at 244 Navajo Rd, Lake Ozark, MO 65049:
          </p>
          <Row xs={1} md={2} className="g-4">
            {localAccommodations.map(accommodation => (
              <Col key={accommodation.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">{accommodation.name}</span>
                    <Badge bg="info">{accommodation.distance}</Badge>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Price Range:</span>
                      <span className="text-primary fw-bold">{accommodation.priceRange}</span>
                    </div>
                    <p>{accommodation.description}</p>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(accommodation.name + ' Lake Ozark MO')}`, '_blank')}
                    >
                      View on Map
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container fluid>
      <h2 className="mb-4 text-center" style={{ color: '#0066CC' }}>Room & Board Planning</h2>
      
      {renderBedrooms()}
      {renderLocalAccommodations()}
      
      <div className="bg-light p-3 rounded mt-4 text-center">
        <p className="mb-0 small text-muted">
          Note: Room reservations are on a first-come, first-served basis. Please coordinate with your classmates if you have specific roommate preferences.
        </p>
      </div>
    </Container>
  );
};

export default RoomPlanning; 