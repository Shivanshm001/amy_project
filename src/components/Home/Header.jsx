import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'config/urlPaths';
export function Header() {
    return (
        <div className='bg-blue-600 flex flex-col justify-center items-center gap-8 p-8 h-full'>
            <h1 className='text-5xl font-semibold text-neutral-50'>WELCOME TO HEALTHEASE!</h1>
            <p className='w-[90%] text-neutral-900'>Welcome to the HealthEase Portal , a beacon of healing and hope in your healthcare journey. At HealthEase, we understand that health is most precious asset, and we are committed to providing you with exceptional care that goes beond medical treatement. Our state-of-an-art facilities coupled with our compassionate and skilled team ensure you that recive the highest quality care tailored to your unique needs. From preventive care to advanced treatments, our comprehensive services cover every aspect of your well being. Weather you are here for a routine checkup or a complex procidure, our dedicated staff is here to guide you at every step of the way, ensuring your comfort and confidence in your care. We beleve that healthcare should be more than just a service - it should be a partnershio. That is why we priortize open communication, transparency and respect in all our interactions. Your trust is our greatest honur, and we a commited to earning it everyday. Thank you for choosing HealthEase Hospital. We look forward to serving you and your loved once , with excellence , compassion and integrity,</p>

            <div className='flex flex-col gap-4'>
                <h3 className='font-semibold'>Welcome to our family</h3>
                <Link to={HOME} className='py-2 px-3 rounded-full hover:scale-105 active:scale-95 bg-blue-300 text-center'>Get Started</Link>
            </div>
        </div>
    );
}