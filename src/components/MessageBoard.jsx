import React, { useState, useEffect } from 'react';
import { Card, Form, Button, ListGroup } from 'react-bootstrap';

function MessageBoard({ currentUser }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      author: currentUser.name,
      content: newMessage,
      timestamp: new Date().toISOString(),
      isAdmin: currentUser.isAdmin
    };

    setMessages([message, ...messages]);
    setNewMessage('');
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="message-board">
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h4 className="mb-0">Message Board</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your message here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post Message
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="bg-light">
          <h5 className="mb-0">Messages</h5>
        </Card.Header>
        <ListGroup variant="flush">
          {messages.map((message) => (
            <ListGroup.Item key={message.id}>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <strong className={message.isAdmin ? 'text-primary' : ''}>
                    {message.author}
                  </strong>
                  <p className="mb-0">{message.content}</p>
                </div>
                <small className="text-muted">
                  {formatTimestamp(message.timestamp)}
                </small>
              </div>
            </ListGroup.Item>
          ))}
          {messages.length === 0 && (
            <ListGroup.Item className="text-center text-muted">
              No messages yet. Be the first to post!
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </div>
  );
}

export default MessageBoard; 