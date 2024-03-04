import React from 'react';
import questionire from './questionire.json';
import { FAQBlock } from './FAQBlock';

export function FAQ() {


    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
                    <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div>
                           {
                            questionire.map(question => {
                                if(question.id % 2 !== 0){
                                    return <FAQBlock question={question.que}>
                                        {question.ans}
                                    </FAQBlock>
                                }  
                            })
                           }
                        </div>
                        <div>
                            {
                                questionire.map(question => {
                                    if(question.id % 2 === 0) {
                                        return <FAQBlock question={question.que}>
                                            {question.ans}
                                        </FAQBlock>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}