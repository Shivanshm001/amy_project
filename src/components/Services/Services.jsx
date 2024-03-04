import React from 'react';
import { servicesData } from './servicesData';
import { ServiceCard } from './ServiceCard/ServiceCard';

export function Services() {
    return (
        <div className='my-16'>
            <span className='w-[100%] bg-gray-400 p-0.5'></span>
            <h1 className='text-4xl text-center font-semibold'>Our Services</h1>
            <div className='grid grid-cols-4 justify-evenly my-16 h-1/2'>
                {
                    servicesData.map(service => <ServiceCard icon={service.icon} link={service.link} text={service.text} />)
                }
            </div>
        </div>
    );
}