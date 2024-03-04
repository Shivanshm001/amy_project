import { FAQ_PAGE, HEALTH_ARTICLES, HOME, LOGIN, ABOUT_US } from 'config/urlPaths';
import React from 'react';
import { Li } from './Li';

export function Navbar() {
    return (
        <nav className='flex justify-between px-8 py-4 bg-blue-300'>
            <h1>Logo</h1>
            <ul className='flex gap-4'>
                <Li link={HOME} text={"Home"} />
                <Li link={ABOUT_US} text={"About Us"} />
                <Li link={LOGIN} text={"Login Portal"} />
                <Li link={FAQ_PAGE} text={"FAQs"} />
                <Li link={HEALTH_ARTICLES} text={"Health Articles"} />
            </ul>
        </nav>
    );
}