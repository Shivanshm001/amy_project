import React from 'react';
import { servicesData } from './servicesData';
import { ServiceCard } from './ServiceCard/ServiceCard';
import Container from 'react-bootstrap/Container'
export function Services() {
    return (
        <Container>
            <h1 className='display-6 mt-4 text-center fw-semibold'>Our Services</h1>
            <div className=''>
                {
                    servicesData.map(service => <ServiceCard icon={service.icon} link={service.link} text={service.text} />)
                }
            </div>
        </Container>
    );
}