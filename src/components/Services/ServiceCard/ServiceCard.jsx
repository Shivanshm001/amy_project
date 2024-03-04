import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export function ServiceCard({icon, link, text}) {
  return (
    <Card style={{ width: '18rem', boxShadow: '0px 0px 5px 1px grey' }}>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title className='text-center'>{text}</Card.Title>
        <div style={{display: 'flex', justifyContent:'center'}}>
        <Button variant="primary" size='sm' className='my-1'  as={Link} to={`#${link}`}>Know More</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
