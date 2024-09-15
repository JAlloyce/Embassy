import images from "../assets/images"

const ExploreKenya = () => {
    return (
        <div>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-6xl py-32 sm:py-12 lg:py-18">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center">
                        Explore Kenya
                    </h2>
                    <div className="grid grid-cols-1 gap-y-10 mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3">
                        {[
                            {
                                name: 'Tourism',
                                description: 'Discover the breathtaking landscapes and rich culture of Kenya.',
                                image: images.Tourism2,
                            },
                            {
                                name: 'Agriculture',
                                description: 'Explore Kenya’s agricultural diversity and innovations.',
                                image: images.Tea,
                            },
                            {
                                name: 'Wildlife',
                                description: 'Experience the incredible wildlife that calls Kenya home.',
                                image: images.Lion,
                            },
                            {
                                name: 'CBD',
                                description: 'Learn about the Central Business District and its opportunities.',
                                image: images.CBD,
                            },
                            {
                                name: 'Trade',
                                description: 'Understand Kenya’s trade dynamics and economic prospects.',
                                image: images.Sunflower,
                            },
                            {
                                name: 'Foreign Affairs',
                                description: 'Get insights into Kenya’s foreign relations and diplomacy.',
                                image: images.Flag,
                            },
                            {
                                name: 'Culture',
                                description: 'Learn more about Kenyan Culture and traditions.',
                                image: images.Culture,
                            },
                            {
                                name: 'Sports',
                                description: 'Get to know more about our sport legends and icons.',
                                image: images.Kipchoge,
                            },
                        ].map((item) => (
                            <div key={item.name} className="relative overflow-hidden rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:scale-105">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-cover w-full h-64 sm:h-80 lg:h-96 transition-opacity duration-300 ease-in-out"
                                />
                                <div className="p-6 bg-rose-100 bg-opacity-80 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-sky-300">{item.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 transition duration-200"
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

export default ExploreKenya