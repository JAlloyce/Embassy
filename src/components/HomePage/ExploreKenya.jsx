import { Link } from "react-router-dom";
import images from "../../assets/images";

const ExploreKenya = () => {
    return (
        <div className="bg-black min-h-screen"> {/* Setting a black bg */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-8xl py-4 sm:py-8 lg:py-4">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center">
                        Explore Kenya
                    </h2>
                    <div className="grid grid-cols-1 gap-y-10 mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                        {[
                            {
                                name: 'Tourism',
                                image: images.Lion,
                                href: '/explore/tourism' 
                            },
                            {
                                name: 'Agriculture',
                                image: images.Tea,
                                href: '/explore/agriculture' 
                            },
                            {
                                name: 'Education',
                                image: images.Classroom,
                                href: '/explore/education' 
                            },
                            {
                                name: 'CBD',
                                image: images.AerialCBD,
                                href: '/explore/nairobi' 
                            },
                            {
                                name: 'Trade',
                                image: images.Sunflower,
                                href: '/explore/trade' 
                            },
                            {
                                name: 'Foreign Affairs',
                                image: images.Flag,
                                href: '/explore/foreign-affairs' 
                            },
                            {
                                name: 'Culture',
                                image: images.Culture,
                                href: '/explore/culture' 
                            },
                            {
                                name: 'Sports',
                                image: images.Kipchoge,
                                href: '/explore/sports' 
                            },
                        ].map((item) => (
                            <div key={item.name} className="relative overflow-hidden rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:scale-105">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-cover w-full h-64 sm:h-80 lg:h-96 transition-opacity duration-300 ease-in-out"
                                    style={{ filter: "brightness(0.7)" }} // Matte effect
                                />
                                
                                {/* Overlay for text */}
                                <div className="absolute inset-0 flex justify-between items-end p-4">
                                    {/* Name at bottom left */}
                                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                    
                                    {/* Learn More Button at bottom right */}
                                    <Link
                                        to={item.href} // Link to the specific page
                                        className="inline-block text-white text-base font-semibold underline hover:text-gray-300 transition duration-200"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreKenya;