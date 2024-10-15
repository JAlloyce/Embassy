import { ArrowRightIcon } from '@heroicons/react/20/solid'; 
import images from '../../assets/images'; 
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const ConsularList = () => {
return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
        alt="Magical Kenya"
        src={images.Flag} 
        className="object-cover w-full h-full opacity-30"
        />
    </div>
    {/* Header Section */}
    <header className="relative z-50 mb-2">
                <nav aria-label="Global" className="flex items-center justify-center">
                    <div className="flex lg:flex-1">
                        <a href="/" className="m-4 p-1.5">
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
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <motion.div
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1, delay:0.5}}
        lassName="lg:pr-4">
            <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">Consular Services</p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl">Consular Services</h1>
            <p className="mt-6 text-2xl leading-8 text-gray-400">
            Kenyan consular services provide essential support to Kenyan citizens living abroad and foreigners visiting Kenya. These services include:
            </p>
            </div>
        </motion.div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray400 lg:max-w-lg">
            <ul role="list" className="mt-[20px] space-y-[10px]">
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/visa" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">1.</span> Electronic Travel Authorization (eTA) / Visa
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/visa">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/passports" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">2.</span> Passport Services
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/passports">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/good-conduct" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">3.</span> Certificate of Good Conduct
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/good-conduct">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/marriage" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">4.</span> Marriage Certificate
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/marriage">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/pets" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">5.</span> Import of Pets
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/pets">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/birth" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">6.</span> Application of Birth Certificate
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/birth">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/doc-auth" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">7.</span> Document Authentification and Legalisation
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/doc-auth">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/doc-leg" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">8.</span> Legalization and Apostilation of Degrees and Certificates
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/doc-leg">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
                <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <Link to="/consular/downloads" className="text-4xl font-bold leading-6 text-gray-400 hover:text-white">
                        <span className="rounded-full bg-indigo-600 px-3 py-2 text-2xl font-bold text-white">9.</span> Downloads
                    </Link>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                    <Link to="/consular/downloads">
                    <ArrowRightIcon aria-hidden="true" className="mt-1 h-10 w-10 flex-none text-indigo-600 hover:text-white" />
                    </Link>
                </div>
                </li>
                <br />
            </ul>
            </div>
        </div>
        </div>
    </div>

    </div>
);
}

export default ConsularList;