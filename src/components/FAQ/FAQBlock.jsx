import React from 'react';
import { svgQuestionMark } from './svgQuestionMark';

export function FAQBlock({ question, children }) {
    return <div class="mb-10">
        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
            {svgQuestionMark()}
            {question}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">{children}</p>
    </div>;
}
