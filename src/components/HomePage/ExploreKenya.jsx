import images from "../../assets/images"

const ExploreKenya = () => {
    return (
        <div className="bg-black min-h-screen"> {/* Set the background to black */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-8xl py-4 sm:py-8 lg:py-4">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center">
                        Explore Kenya
                    </h2>
                    <div className="grid grid-cols-1 gap-y-10 mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                        {[
                            {
                                name: 'Tourism',
                                image: images.Tourism2,
                            },
                            {
                                name: 'Agriculture',
                                image: images.Tea,
                            },
                            {
                                name: 'Education',
                                image: images.Lion,
                            },
                            {
                                name: 'CBD',
                                image: images.CBD,
                            },
                            {
                                name: 'Trade',
                                image: images.Sunflower,
                            },
                            {
                                name: 'Foreign Affairs',
                                image: images.Flag,
                            },
                            {
                                name: 'Culture',
                                image: images.Culture,
                            },
                            {
                                name: 'Sports',
                                image: images.Kipchoge,
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
                                    <a
                                        href="#"
                                        className="inline-block text-white text-sm font-semibold underline hover:text-gray-300 transition duration-200"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreKenya;