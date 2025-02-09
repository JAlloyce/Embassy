import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

const newsData = [
    {
        title: "Ambassador pays courtesy call to Embassy of Belarus",
        category: "Diplomacy",
        date: "November 18, 2024",
        link: "#"
    },
    {
        title: "1ST Ministerial Conference OF THE Russia–Africa Partnership Forum",
        category: "Diplomacy",
        date: "November 9-10, 2024",
        link: "#"
    },
    {
        title: "Presentation of Letters of Credence",
        category: "Diplomacy",
        date: "November 5, 2024",
        link: "#"
    },
];

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % newsData.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-cover bg-center h-80 sm:h-96 lg:h-[400px]" 
            style={{ backgroundImage: `url(${images.Flag})` }}>
            
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
                    Latest News
                </h1>
                
                <div className="overflow-hidden relative h-32">
                    {newsData.map((news, index) => (
                        <div
                            key={index}
                            className={`absolute w-full transition-opacity duration-500 ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="mb-2">
                                <span className="text-sm font-semibold text-indigo-400">
                                    {news.category}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2">
                                <a href={news.link} className="hover:underline">
                                    {news.title}
                                </a>
                            </h2>
                            <p className="text-gray-300 text-sm">{news.date}</p>
                        </div>
                    ))}
                </div>

                
            </div>

            <Link to="/news" className="absolute right-6 bottom-6 flex items-center">
                <span className="inline-block w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-white hover:text-gray-900 transition duration-200">
                    ➔
                </span>
            </Link>
        </div>
    );
};

export default News;