import React from 'react';
import questionire from './questionire.json';
import { FAQBlock } from './FAQBlock';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
export function FAQ() {


    return (
        <Container className='py-4 '>
            <Accordion alwaysOpen defaultActiveKey={[1]} >
                {
                    questionire.map(({ que, ans, id }) => {
                        return <div className='mb-3'>
                            <FAQBlock question={que} id={id}>
                                {ans}
                            </FAQBlock>
                        </div>;
                    })
                }
            </Accordion>
        </Container>
    );
}