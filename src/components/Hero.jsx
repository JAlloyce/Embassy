    'use client'

    import { useState, useEffect } from 'react'
    import { Dialog, DialogPanel } from '@headlessui/react'
    import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
    import Logo from '../assets/Logo.png'
    import images from '../assets/images' // Ensure this imports your images correctly

    const navigation = [
    { name: 'About Kenya', href: '#', dropdown: true },
    { name: 'High Commission', href: '#' },
    { name: 'Consular Services', href: '#', dropdown: true },
    { name: 'News', href: '#' },
    ]

    const dropdownItems = {
    'About Kenya': [
        { name: 'General Information', href: '#' },
        { name: 'Tourism Opportunities', href: '#' },
    ],
    'Consular Services': [
        { name: 'Apply for eTA', href: '#' },
        { name: 'Passport Replacement', href: '#' },
        { name: 'Emergency Travel Certificate', href: '#' },
        { name: 'Police Clearance Certificate', href: '#' },
    ],
    }

    export default function EmbassyLandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [dropdownOpen, setDropdownOpen] = useState({})

    // Array of images in the desired order
    const imageOrder = [
        images.Flag,
        images.CBD,
        images.Culture,
        images.Lion,
    ]

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageOrder.length)
        }, 3000) // Change image every 3 seconds

        return () => clearInterval(interval) // Cleanup interval on component unmount
    }, [])

    const toggleDropdown = (name) => {
        setDropdownOpen((prev) => ({
        ...prev,
        [name]: !prev[name],
        }))
    }

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
                    src={Logo}
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
                    <a
                        href={item.href}
                        className="text-lg font-bold leading-6 text-gray-400 hover:text-white"
                    >
                        {item.name}
                    </a>
                    )}
                    {item.dropdown && dropdownOpen[item.name] && (
                    <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg">
                        {dropdownItems[item.name].map((subItem) => (
                        <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm font-bold text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            {subItem.name}
                        </a>
                        ))}
                    </div>
                    )}
                </div>
                ))}
                <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Contact Us
                </a>
            </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Embassy of Kenya in Russia</span>
                    <img
                    alt="Embassy Logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_Kenya.svg/1200px-Coat_of_arms_of_Kenya.svg.png"
                    className="h-8 w-auto"
                    />
                </a>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-700/10">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                    <div className="py-6">
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                        Contact Us
                    </a>
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Welcome to the Embassy of Kenya in Russia
                </h1>
                <p className="mt-6 text-lg font-bold leading-8 text-gray-400">
                Your gateway to Kenya's culture, tourism, and consular services. We are here to assist you with all your needs.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Learn More
                </a>
                <a
                    href="#"
                    className="rounded-md bg-gray-800 px-3.5 py-2.5 text-lg font-extrabold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                >
                    Contact Us
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }