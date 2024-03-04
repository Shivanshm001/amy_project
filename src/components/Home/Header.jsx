import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, SERVICES } from 'config/urlPaths';
import { Container, Button } from 'react-bootstrap';

export function Header() {
    return (
        <div className="p-5 mb-4 bg-primary">
            <Container className="py-5">
                <h1 className="display-6 fw-bold text-center text-white  my-2 mb-4 text-black">Welcome to HealthEase!</h1>
                <p className='mb-4 text-black fw-semibold'>
                    Welcome to the HealthEase Portal, a beacon of healing and hope in your healthcare journey. At HealthEase, we understand that health is most precious asset, and we are committed to providing you with exceptional care that goes beyond medical treatment. Our state-of-the-art facilities coupled with our compassionate and skilled team ensure you that receive the highest quality care tailored to your unique needs. From preventive care to advanced treatments, our comprehensive services cover every aspect of your well-being. Whether you are here for a routine checkup or a complex procedure, our dedicated staff is here to guide you at every step of the way, ensuring your comfort and confidence in your care. We believe that healthcare should be more than just a service - it should be a partnership. That is why we prioritize open communication, transparency and respect in all our interactions. Your trust is our greatest honor, and we are committed to earning it every day. Thank you for choosing HealthEase Hospital. We look forward to serving you and your loved ones, with excellence, compassion and integrity.
                </p>
                <div style={{display: "flex", justifyContent: "center"}}>
                <Button variant="light" size="lg" className=''>
                    <Link to={SERVICES} >Get Started!</Link>
                </Button>
                </div>
            </Container>
        </div>
    );
}
