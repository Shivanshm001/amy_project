import React from 'react';
import { Link } from 'react-router-dom';


export function ServiceCard({ icon, text, link }) {
    return (
        <div className='col-span-1 m-4 grid place-items-center gap-2'>
            <Link to={`#${link}`} className=' text-center flex flex-col gap-3'>
                <img src={icon} alt={text} width={200} height={200} className="border border-black" />
                    <span className='inline-block font-semibold text-xl'>{text}</span>
            </Link>
            <Link to={`#${link}`} className='bg-blue-400 text-white font-semibold px-3 py-2 rounded-full hover:scale-105 active:scale-95'>View More</Link>
        </div>
    );
}