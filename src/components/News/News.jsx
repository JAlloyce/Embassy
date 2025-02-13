import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import images from '../../assets/images'; 
import news from '../../assets/news'; // Import the news images
import {motion} from 'framer-motion';

const News = () => {
    const articles = [
        {
            title: "Ambassador pays courtesy call to Embassy of Belarus",
            category: "Diplomacy",
            description: "On 18th November 2024, H.E. Dr. Peter Mutuku Mathuki, PhD, paid a courtesy call on H.E. Alexander N. Rogozhnik, Ambassador of the Republic of Belarus to the Russian Federation. The Parties exchanged opinions on the issues of mutual interest and promised to explore opportunities of cooperation between the two countries.",
            images: [news.News1image1, news.News1image2],
            date: "November 18, 2024",
            link: "#"
        },
        {
            title: "1ST MINISTERIAL CONFERENCE OF THE RUSSIA–AFRICA PARTNERSHIP FORUM",
            category: "Diplomacy",
            description: "H. E. Dr. Peter Mutuku Mathuki, PhD, headed the Republic of Kenya delegation at the FIRST MINISTERIAL CONFERENCE OF THE RUSSIA–AFRICA PARTNERSHIP FORUM on behalf of H.E. Musalia Mudavadi, Prime Cabinet Secretary and Minister of Foreign Affairs. The forum took place in the Sirius Federal Territory on 9th and 10th November, 2024. H.E. the Ambassador delivered the country’s message at the Plenary Session, which was chaired by H.E. Sergey V. Lavrov, Minister of Foreign Affairs of the Russian Federation. The delegation also participated in the events of the business program and held bilateral meetings with Russian stakeholders interested in cooperating with Kenyan companies.",
            images: [news.News2image1, news.News2image2, news.News2image3, news.News2image4, news.News2image5],
            date: "November 9-10, 2024",
            link: "#"
        },
        {
            title: "Presentation of Letters of Credence",
            category: "Diplomacy",
            description: "H.E. Dr. Peter Mutuki Mthuki (PhD) presented letters of credence to H.E. Vladimir Putin, President of the Russian Federation, on 5th November 2024 at the Kremlin.",
            images: [news.News3image1, news.News3image2, news.News3image3, news.News3image4],
            date: "November 5, 2024",
            link: "#"
        },
        {
            title: "Ambassador meets with Deputy Minister for Labour",
            category: "Diplomacy",
            description: "On 28th January 2025, H.E. Amb. Dr. Peter Mathuki, PhD, met with the Deputy Minister of of Labour, Mr. Dmitriy Platygin to discuss issues of labour mobility underscoring the long standing bonds of friendship between Kenya and the Russian Federation.",
            images: [news.MoLabour],
            date: "January 28, 2025",
            link: "#"
        },
        {
            title: "Courtesy visit from Kyrgyzstan Embassy",
            category: "Diplomacy",
            description: "On 30th January 2025, Amb. Irene Maswan, OGW Deputy Head of Mission met with the Deputy Head of Mission of Kyrgyzstan Embassy in the Russian Federation. She paid a courtesy and to deliver a Note Verbale on a proposed Bilateral visit of Kyrgyzstan Deputy Prime Minister to Kenya. She also submitted a request of support for Kyrgyzstan bid to the UN - Security Council as a Non - Permanent Member for the term 2027 - 2028.",
            images: [news.Kyrgyzstan],
            date: "January 30, 2025",
            link: "#"
        },
        {
            title: "RUDN University celebrates 65th Anniversary",
            category: "Diplomacy",
            description: "On 5th February 2025, RUDN University celebrated its 65th Anniversary as an institution of higher learning and invited members of the Diplomatic Corps to join in the celebrations.",
            images: [news.RUDN1, news.RUDN2, news.RUDN3, news.RUDN4],
            date: "February 5, 2025",
            link: "#"
        },
        {
            title: "Ambassador of Somalia pays courtesy call",
            category: "Diplomacy",
            description: "The Ambassador of the Federal Republic of Somalia, H.E. Ambassador Mohamed A. Zubeyr paid a courtesy call on H.E. Dr. Peter Mathuki on 7th February, 2025. The discussion focused on the warm bonds of friendship between Kenya and Somalia.",
            images: [news.AmbSomali1, news.AmbSomali2],
            date: "February 7, 2025",
            link: "#"
        },
    ];

    const reversedArticles = [...articles].reverse(); // Reverse the articles array

    const [displayedArticles, setDisplayedArticles] = useState(reversedArticles.slice(0, 20)); // Initial load of 20 articles
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [showGallery, setShowGallery] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);

    const loadMoreArticles = () => {
        if (loading || !hasMore) return;

        setLoading(true);
        setTimeout(() => {
            setDisplayedArticles((prev) => [
                ...prev,
                ...reversedArticles.slice(prev.length, prev.length + 20)
            ]); // this Loads 20 articles at time
            setLoading(false);
            
            if (displayedArticles.length >= reversedArticles.length) {
                setHasMore(false);
            }
        }, 1000); // This will Simulate network delay, more like a fetch funnctionality
    };

    const openGallery = (images) => {
        setGalleryImages(images.map(img => ({ original: img, thumbnail: img })));
        setShowGallery(true);
    };

    const closeGallery = () => {
        setShowGallery(false);
    };

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
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-black [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
            <svg x="50%" y={-1} className="overflow-visible fill-black">
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
                        <div className="relative w-64 h-64 sm:w-[17rem] sm:h-[17rem] xl:w-64 xl:h-64 mb-6 m-4 shadow-md rounded-lg bg-slate-50 cursor-pointer">
                            <img 
                                src={article.images[0]} 
                                alt="" 
                                className="w-full h-full object-cover rounded-lg" 
                                onClick={() => openGallery(article.images)}
                            />
                        </div>
                    </li>
                ))}
            </ul>

            {loading && (
                <div className="text-center mt-4">Loading more News...</div>
            )}

            {showGallery && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <ImageGallery 
                            items={galleryImages} 
                            showThumbnails={false} 
                            showFullscreenButton={false} 
                            showPlayButton={false} 
                        />
                        <button 
                            onClick={closeGallery} 
                            className="absolute top-2 right-2 bg-black text-white rounded-full p-2 shadow-lg"
                        >
                            X
                        </button>
                    </div>
                </div>
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