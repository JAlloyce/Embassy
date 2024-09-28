    import { useState, useEffect } from 'react';
    import { Dialog, DialogPanel } from '@headlessui/react';
    import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
    import { Link } from 'react-router-dom'; // Import Link for routing
    import images from '../../assets/images';

    const navigation = [
    { name: 'Magical Kenya', href: '#about-kenya', dropdown: true },
    { name: 'Embassy', href: '/embassy' },
    { name: 'Consular Services', href: '#consular-services', dropdown: true },
    { name: 'News', href: '/news' },
    ];

    const dropdownItems = {
    'Magical Kenya': [
        { name: 'General Information', href: '#general-info' },
        { name: 'Tourism Opportunities', href: '#tourism' },
    ],
    'Consular Services': [
        { name: 'Apply for eTA', href: '#eta' },
        { name: 'Passport Replacement', href: '#passport' },
        { name: 'Emergency Travel Certificate', href: '#etc' },
        { name: 'Police Clearance Certificate', href: '#pcc' },
    ],
    };

    export default function EmbassyLandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState({});

    // Array of images in the desired order
    const imageOrder = [
        images.Flag,
        images.CBD,
        images.Culture,
        images.Lion,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageOrder.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const toggleDropdown = (name) => {
        setDropdownOpen((prev) => ({
        ...prev,
        [name]: !prev[name],
        }));
    };

    const scrollToBottom = () => {
        window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
        });
    };

    return (
        <div className="relative bg-gray-900">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
            <img
            src={imageOrder[currentImageIndex]}
            alt="Kenya"
            className="object-cover w-full h-full opacity-30"
            />
        </div>

        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Embassy of Kenya in Russia</span>
                <img
                    alt="Embassy Logo"
                    src={images.Logo}
                    className="h-28 w-auto"
                />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                <div key={item.name} className="relative group">
                    {item.dropdown ? (
                    <button
                        onMouseEnter={() => setDropdownOpen((prev) => ({ ...prev, [item.name]: true }))}
                        onMouseLeave={() => setDropdownOpen((prev) => ({ ...prev, [item.name]: false }))}
                        className="text-lg font-bold leading-6 text-gray-400 group-hover:text-white"
                    >
                        {item.name}
                    </button>
                    ) : (
                    <Link
                        to={item.href}
                        className="text-lg font-bold leading-6 text-gray-400 hover:text-white"
                    >
                        {item.name}
                    </Link>
                    )}
                    {item.dropdown && dropdownOpen[item.name] && (
                    <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
                        {dropdownItems[item.name].map((subItem) => (
                        <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setDropdownOpen({})} // Close dropdown on click
                            className="block px-4 py-2 text-sm font-bold text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            {subItem.name}
                        </Link>
                        ))}
                    </div>
                    )}
                </div>
                ))}
                <button
                onClick={scrollToBottom} // Scroll to bottom when clicked
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Contact Us
                </button>
            </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black opacity-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray700/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Embassy of Kenya in Russia</span>
                    <img
                    alt="Embassy Logo"
                    src={images.Logo}
                    className="h-8 w-auto"
                    />
                </a>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray400"
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                </div>

                {/* Mobile Navigation */}
                <div className="mt-[10px] flow-root">
                <div className="-my-[10px] divide-y divide-gray700/10">
                    <div className="space-y-[10px] py-[12px]">
                    {navigation.map((item) => (
                        <div key={item.name} className={`relative group`}>
                        {/* Dropdown logic for mobile */}
                        {item.dropdown ? (
                            <>
                            <button 
                                onClick={() => toggleDropdown(item.name)} 
                                className="-mx-[12px] block rounded-lg px-[12px] py-[8px] text-base font-bold leading-[22px] text-gray400 hover:bg-gray800 hover:text-white"
                            >
                                {item.name}
                            </button>
                            {/* Show dropdown items if open */}
                            {dropdownOpen[item.name] && (
                                <div className={`mt-[10px] w-full bg-gray900 border border-gray700 rounded-md shadow-lg`}>
                                {dropdownItems[item.name].map((subItem) => (
                                    <Link 
                                    key={subItem.name} 
                                    to={subItem.href} 
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                                    className="-mx-[12px] block rounded-lg px-[12px] py-[8px] text-base font-bold leading-[22px] text-gray400 hover:bg-gray800 hover:text-white"
                                    >
                                    {subItem.name}
                                    </Link>
                                ))}
                                </div>
                            )}
                            </>
                        ) : (
                            <Link 
                            to={item.href} 
                            onClick={() => setMobileMenuOpen(false)} // Close menu on click
                            className="-mx-[12px] block rounded-lg px-[12px] py-[8px] text-base font-bold leading-[22px] text-gray400 hover:bg-gray800 hover:text-white"
                            >
                            {item.name}
                            </Link>
                        )}
                        </div>
                    ))}
                    </div>
                    {/* Contact Us link */}
                    <div className="">
                    <Link 
                        to="#contact-us" 
                        onClick={() => setMobileMenuOpen(false)} // Close menu on click
                        className="-mx-[12px] block rounded-lg px-[12px] py-[8px] text-base font-bold leading-[22px] text-gray400 hover:bg-gray800 hover:text-white"
                    >
                        Contact Us
                    </Link>
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>

        {/* Hero Section */}
        <div className="relative isolate px-6 pt-[100px] lg:px-[20%]"> {/* Adjusted padding to avoid overlap */}
            <div className="mx-auto max-w-xl py-[100px] sm:max-w-xl lg:max-w-xl lg:py-[150px]"> {/* Adjusted padding for hero section */}
            <h1 className="text-center text-white text-[36px] sm:text-[48px] font-extrabold tracking-tight">
                Welcome to the Embassy of the Republic of Kenya in the Russian Federation
            </h1>
            <p className="mt-[20px] text-center text-lg font-bold leading-tight text-gray400">
                Your gateway to Kenya's culture, tourism, and consular services. We are here to assist you with all your needs.
            </p>
            {/* Call-to-action buttons */}
            <div className="mt-[30px] flex items-center justify-center gap-x-[20px]">
                {/* Modify these links as needed */}
                <Link
                to="#learn-more" // Update with actual route if needed
                className="rounded-md bg-indigo600 px-[20px] py-[10px] text-lg font-extrabold text-white shadow-sm hover:bg-indigo500 focus-visible:outline focus-visible:outline-offset focus-visible:outline-indigo600"
                >
                Learn More
                </Link>
                <Link
                to="#contact-us" // Update with actual route if needed
                onClick={scrollToBottom} // Scroll to bottom when clicked
                className="rounded-md bg-gray800 px-[20px] py-[10px] text-lg font-extrabold text-white shadow-sm hover:bg-gray700 focus-visible:outline focus-visible:outline-offset focus-visible:outline-gray800"
                >
                Contact Us
                </Link>
            </div>
            </div>
        </div>

        {/* Contact Section (for scrolling) */}
        {/* Ensure this section is at the bottom of your page */}
        <section id="contact-us" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: "#000" }}>
            {/* Your contact content goes here */}
            ...
        </section>

        </div>
    );
    }