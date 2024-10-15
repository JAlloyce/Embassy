import { useState, useEffect } from 'react';
import images from '../../assets/images'; 
import {motion} from 'framer-motion'

const News = () => {
    const articles = [
        {
            title: "Exploring the Maasai Mara: A Safari Experience",
            category: "Tourism",
            description: "Discover the breathtaking landscapes and wildlife of the Maasai Mara. It is one of the most famous wildlife reserves in the world, known for its exceptional population of lions, leopards, cheetahs, and elephants. The annual migration of wildebeest and zebra is a spectacular event that draws thousands of tourists each year.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "January 1, 2023",
            link: "#"
        },
        {
            title: "The Beauty of Lake Nakuru National Park",
            category: "Tourism",
            description: "A guide to the stunning views and diverse wildlife at Lake Nakuru. This park is famous for its flamingos and offers a variety of habitats including grasslands, forests, and wetlands.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "January 5, 2023",
            link: "#"
        },
        {
            title: "Adventure Awaits in Amboseli National Park",
            category: "Tourism",
            description: "Experience close encounters with elephants and breathtaking views of Mount Kilimanjaro. Amboseli is renowned for its large elephant herds and stunning landscapes.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "January 10, 2023",
            link: "#"
        },
        {
            title: "Cultural Heritage at the Gede Ruins",
            category: "Tourism",
            description: "Explore the fascinating history and architecture of the Gede Ruins. These ancient ruins provide insights into the Swahili civilization that thrived along the coast.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "January 15, 2023",
            link: "#"
        },
        {
            title: "Relaxing on Diani Beach",
            category: "Tourism",
            description: "Enjoy sun-soaked days and vibrant nightlife on one of Kenya's most beautiful beaches. Diani Beach is known for its white sandy shores and crystal-clear waters.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "January 20, 2023",
            link: "#"
        },
        // Additional articles
        {
            title: "Visiting Tsavo National Park",
            category: "Tourism",
            description: "Experience one of Kenya's largest national parks with diverse wildlife and stunning landscapes.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "February 1, 2023",
            link: "#"
        },
        {
            title: "Exploring Nairobi National Park",
            category: "Tourism",
            description: "A unique experience where you can see wildlife against the backdrop of Nairobi's skyline.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "February 5, 2023",
            link: "#"
        },
        {
            title: "Discovering the Culture of Maasai People",
            category: "Tourism",
            description: "Learn about the rich culture and traditions of the Maasai people while visiting their villages.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date: "February 10, 2023",
            link: "#"
        },
        {
            title:"Bird Watching in Lake Naivasha",
            category:"Tourism",
            description:"Lake Naivasha is a birdwatcher's paradise with over 400 species to observe.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            link:"#"
        },
        {
            title:"The Great Rift Valley Experience ",
            category:"Tourism ",
            description:"Explore one of Africa's most stunning geological features along with its unique wildlife.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date:"February 20, 2023 ", 
            link:"#"
        },
        {
            title:"Exploring Lamu Island ",
            category:"Tourism ",
            description:"Experience the rich Swahili culture and stunning beaches on Lamu Island.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date:"March 1, 2023 ", 
            link:"#"
        },
        {
            title:"Safari in Meru National Park ",
            category:"Tourism ",
            description:"Meru National Park offers a unique safari experience away from the crowds.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            date:"March 5, 2023 ", 
            link:"#"
        },
       // Continue adding more articles up to a total of 40...
    ];

    const [displayedArticles, setDisplayedArticles] = useState(articles.slice(0, 20)); // Initial load of 20 articles
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    
    const loadMoreArticles = () => {
        if (loading || !hasMore) return;

        setLoading(true);
        setTimeout(() => {
            setDisplayedArticles((prev) => [
                ...prev,
                ...articles.slice(prev.length, prev.length + 20)
            ]); // this Loads 20 articles at time
            setLoading(false);
            
            if (displayedArticles.length >= articles.length) {
                setHasMore(false);
            }
        }, 1000); // This will Simulate network delay, more like a fetch funnctionality
    };

    // Infinite scroll detection
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                loadMoreArticles();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <div className="bg-black">
        <div className="relative isolate overflow-hidden bg-black px-6 py-8 sm:py-8 lg:overflow-visible lg:px-4 lg:py-8">
            {/* Header Section */}
            <header className="relative z-50 mb-2">
                <nav aria-label="Global" className="flex items-center justify-center">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Home</span>
                            <img
                                alt="Your Company Logo"
                                src={images.Logo}
                                className="h-28 w-auto"
                            />
                        </a>
                    </div>
                </nav>
            </header>

            <motion.h1
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.5}}
            className="text-3xl font-bold tracking-tight  text-indigo-600 sm:text-4xl">News Update</motion.h1>


        <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
            <defs>
            <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
            >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-700">
            <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
            />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        </div>

            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                {displayedArticles.map((article, index) => (
                    <li key={index} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:w-[17rem] xl:w-full">
                            <h3 className="mb-1 text-indigo-600 font-semibold">
                                <span className="mb-1 block text-sm leading-6 text-indigo-500">{article.category}</span>
                                {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{article.date}</p>
                            <div className="prose prose-slate prose-sm text-slate-400 mt-2">
                                <ReadMoreLess text={article.description} />
                            </div>
                        </div>
                        <img src={article.imageUrl} alt="" className="mb-6 m-4 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 lg:mb-4  xl:w-full" width="1216" height="640"/>
                    </li>
                ))}
            </ul>

            {loading && (
                <div className="text-center mt-4">Loading more News...</div>
            )}
        </div>
    </div>
    );
};

// ReadMoreLess Component
const ReadMoreLess = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const displayText = isExpanded ? text : `${text.slice(0, 100)}...`;

return (
    <>
        <p>{displayText}</p>
        <button onClick={toggleReadMore} className="text-indigo-500 hover:text-indigo-600 mt-2">
            {isExpanded ? 'Read Less' : 'Read More'}
        </button>
    </>
);
};

export default News;