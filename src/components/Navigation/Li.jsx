import React from 'react';
import { Link } from 'react-router-dom';

export function Li({ link, text }) {
    return <li>
        <Link to={link} className='hover:text-white hover:scale-105 transition-all ease-in-out duration-100'>{text}</Link>
    </li>;
}
;
