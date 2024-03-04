import React from 'react';


export function Contact() {
    return (
        <div className='w-[100vw] h-[100vh] my-16'>
            <div className='flex justify-center items-center flex-col gap-4'>
                <h1 className='text-4xl text-center'>Contact</h1>
                <p>Get in touch , if you have a question or want to know more about our services? We are here to help</p>
                <p>Contact us and we'll get back to you as soon as possible.</p>

            </div>
            <div className='grid grid-cols-2 w-[80%]'>
                <div className='col-span-1'></div>
                <div className='col-span-1'>
                    <form className='w-full'>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}