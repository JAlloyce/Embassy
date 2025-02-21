import { Link } from "react-router-dom";
import images from "../../assets/images";
import { useTranslation } from 'react-i18next';

const ExploreKenya = () => {
    const { t } = useTranslation();

    const exploreItems = [
        {
            name: t('explore.items.foreignAffairs'),
            image: images.Logo,
            href: '/explore/foreign-affairs' 
        },
        {
            name: t('explore.items.education'),
            image: images.Uon,
            href: '/explore/education' 
        },
        {
            name: t('explore.items.tourism'),
            image: images.Lion,
            href: '/explore/tourism' 
        },
        {
            name: t('explore.items.agriculture'),
            image: images.Agric,
            href: '/explore/agriculture' 
        },
        {
            name: t('explore.items.trade'),
            image: images.Trade,
            href: '/explore/trade' 
        },
        {
            name: t('explore.items.cbd'),
            image: images.AerialCBD,
            href: '/explore/nairobi' 
        },
        {
            name: t('explore.items.sports'),
            image: images.Kipchoge,
            href: '/explore/sports' 
        },
        {
            name: t('explore.items.culture'),
            image: images.Cul,
            href: '/explore/culture' 
        },
    ];

    return (
        <div className="bg-black min-h-screen"> 
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-8xl py-4 sm:py-8 lg:py-4">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center">
                        {t('explore.title')}
                    </h2>
                    <div className="grid grid-cols-1 gap-y-10 mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                        {exploreItems.map((item) => (
                            <div key={item.name} className="relative overflow-hidden rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:scale-105">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-cover w-full h-64 sm:h-80 lg:h-96 transition-opacity duration-300 ease-in-out"
                                    style={{ filter: "brightness(0.7)" }} 
                                />
                                <div className="absolute inset-0 flex justify-between items-end p-4">
                                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                    <Link
                                        to={item.href}
                                        className="inline-block text-white text-base font-semibold underline hover:text-gray-300 transition duration-200"
                                    >
                                        {t('explore.learnMore')}
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