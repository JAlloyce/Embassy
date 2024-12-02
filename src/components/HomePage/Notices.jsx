import React, { useState, useEffect } from 'react';
import docs from '../../assets/docs';

const noticesData = [
{
    title: 'Zidi Diaspora Angel Investor Fellowship',
    description: 'Learn about Zidi circle.',
    type: 'document',
    document: docs.zidi,
},
{
    title: 'Info on Diaspora Business',
    description: 'For Kenyan Diaspora with running a business in Russia, Belarus or Kazakhstan',
    type: 'document',
    document: docs.infodiaspora,
},
{
    title: 'Electronic Travel Advisory',
    description: 'Kenya eTA is a semi-automated system that determines the eligibility of visitors to travel to Kenya.',
    type: 'link',
    link: 'https://www.etakenya.go.ke',
},
{
    title: 'Leglization of Documents',
    description: 'Check Document Authentification and legalization requirements.',
    type: 'link',
    link: 'https://www.kenyaembassyru.ru',
},
];

const Notices = () => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % noticesData.length);
    }, 10000);

    return () => clearInterval(interval);
}, []);

const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + noticesData.length) % noticesData.length);
};

const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % noticesData.length);
};

const currentNotice = noticesData[currentIndex];

return (
    <div className="relative bg-black h-64 sm:h-72 lg:h-80 flex flex-col justify-center items-center">
    
    <div className="relative w-full flex-grow flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
        Notices
    </h1>
        <h2 className="text-2xl font-bold text-white mb-2">
            <a
            href={currentNotice.type === 'document' ? currentNotice.document : currentNotice.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            >
            {currentNotice.title}
            </a>
        </h2>
        <p className="text-lg text-gray-300">{currentNotice.description}</p>
        </div>
    </div>
    <div className="flex justify-between w-full px-6 m-4">
        <button
        onClick={handlePrev}
        className="flex items-center justify-center"
        >
        <span className="inline-block w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-white hover:text-gray-900 transition duration-200">
            ◀
        </span>
        </button>
        <button
        onClick={handleNext}
        className="flex items-center justify-center"
        >
        <span className="inline-block w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-white hover:text-gray-900 transition duration-200">
            ▶
        </span>
        </button>
    </div>
    </div>
);
};

export default Notices;