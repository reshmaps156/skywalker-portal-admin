import React, { useContext } from 'react';
import { viewMessageContext } from '../utils/Datashare';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';


function Message() {
  const { viewMessage } = useContext(viewMessageContext);
  
  return (
    <Container className="my-5 d-flex align-items-center justify-content-center flex-column">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card
            className="shadow-lg p-4"
            style={{
              backgroundColor: '#1c1c1c',
              borderRadius: '20px',
              color: '#fff',
              border: 'none',
            }}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Card.Title className="text-warning fs-4">
                  {viewMessage.subject || 'No Subject'}
                </Card.Title>
                <Badge bg="danger" className="fs-6">
                  {viewMessage.priority || 'Normal'}
                </Badge>
              </div>
              <Card.Subtitle className="mb-3 text-muted">
                Date: {new Date(viewMessage.submitTime).toLocaleDateString() || 'Unknown Date'}
              </Card.Subtitle>
              <Card.Text className="text-white mb-4" style={{ lineHeight: '1.6' }}>
                {viewMessage.grievanceDetails || (
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum quaerat, beatae perferendis quam similique placeat. Nulla, mollitia id dolore amet debitis, dicta recusandae dignissimos deserunt esse iusto excepturi quia?'
                )}
              </Card.Text>
              <hr className="border-secondary" />
              <div className="mt-3">
                <p className="mb-1">
                  <strong>Submitted By:</strong> {viewMessage.username || 'Anonymous'}
                </p>
                <p className="mb-1">
                  <strong>Contact:</strong> {viewMessage.mobileNumber || 'N/A'}
                </p>
                <p className="mb-0">
                  <strong>Email:</strong> {viewMessage.email || 'N/A'}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      <Link to={'/inbox'}><button className='btn btn-outline-warning mt-5 px-4 py-2' ><FontAwesomeIcon icon={faAnglesLeft} className='me-2'/>Back</button></Link>
    </Container>
  );
}

export default Message;
