import React from 'react';
import { svgQuestionMark } from './svgQuestionMark';
import Accordion from 'react-bootstrap/Accordion'
export function FAQBlock({ id, question, children }) {
    return <Accordion.Item eventKey={id}>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body>
            {children}
        </Accordion.Body>
    </Accordion.Item>;
}
