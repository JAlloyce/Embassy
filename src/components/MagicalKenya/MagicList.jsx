    import { ArrowRightIcon } from '@heroicons/react/20/solid'; 
    import images from '../../assets/images'; 
    import { Link } from 'react-router-dom'; 
    import {motion} from 'framer-motion'

    const MagicList = () => {
    return (
        <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
            alt="Magical Kenya"
            src={images.Slide33} // Background Image of Mount Kenya
            className="object-cover w-full h-full opacity-30"
            />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <header className="relative z-50 mb-2">
        <nav aria-label="Global" className="flex items-center justify-center">
        <div className="flex lg:flex-1">
            <a href="https://magicalkenya.com/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <img
                alt="Magical Kenya"
                src={images.MagicalKenyalogo} // Magical Kenya logo
                className="h-28 w-auto" 
            />
            </a>
        </div>
        </nav>
    </header>
    </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
                <motion.div
                initial={{x:-100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:0.5}}
                className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">Explore Magical Kenya</p>
                <h1 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl">Discover the Wonders of Kenya</h1>
                <p className="mt-6 text-2xl leading-8 text-gray-400 text-justify">
                    Kenya is a land of diverse landscapes, rich culture, and endless possibilities. From the bustling city of Nairobi to the stunning beaches of the coast, there is something for everyone to explore.
                </p>
                </motion.div>
            </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray400 lg:max-w-lg">
                <ul role="list" className="mt-[20px] space-y-[10px]">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/getting-around" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">1.</span> Getting Around Kenya
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/things-to-do">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/intro" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">2.</span> Why Kenya ?
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/intro">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/nairobi" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">3.</span> Capital City
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/nairobi">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/coast" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">4.</span> Coast Region
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/coast">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/central-rift" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">5.</span> Central Rift Region
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/central-rift">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/mount-kenya" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">6.</span> Mount Kenya
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/mount-kenya">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/northern-kenya" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">7.</span> Northern Region
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/northern-kenya">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/north-rift" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">8.</span> North Rift Region
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/north-rift">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/southern-kenya" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">9.</span> Southern Region
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/southern-kenya">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/western-kenya" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">10.</span> Western Region
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/western-kenya">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                    <br />
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                        <Link to="/magical-kenya/things-to-do" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                            <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">11.</span> Things To Do
                        </Link>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <Link to="/magical-kenya/things-to-do">
                        <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                        </Link>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default MagicList;