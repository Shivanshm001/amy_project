import { HOME } from 'config/urlPaths';
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Services } from 'components/Services/Services';
import { Contact } from 'components/Contact/Contact';
export function Home() {
    return (
        <>
            <Header />
            <Services />
            <Contact />
        </>
    );
}