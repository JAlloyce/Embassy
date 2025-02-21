'use client'

import images from '../../assets/images'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';

const DocLeg = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white">
        <div className="relative isolate overflow-hidden bg-black px-6 py-8 sm:py-8 lg:overflow-visible lg:px-4 lg:py-8">
            {/* Moved the header inside this section */}
            <header className="relative z-50 mb-2">
            <nav aria-label="Global" className="flex items-center justify-center">
                <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">{t('navigation.home')}</span>
                    <img
                    alt={t('common.welcome')}
                    src={images.Logo}
                    className="h-28 w-auto" // Logo size
                    />
                </a>
                </div>
            </nav>
            </header>

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

            <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:py-8 text-left">
            <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
                {t('consular.docLeg.title')}
            </h1>

            {/* Original Degree Section */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold text-indigo-600">
                    {t('consular.docLeg.originalDegree.title')}
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    {t('consular.docLeg.originalDegree.subtitle')}
                </p>
                <ol className="mt-4 list-decimal list-inside text-gray-300">
                    {t('consular.docLeg.originalDegree.steps', { returnObjects: true }).map((step, index) => (
                        <li key={index} className="mb-4">
                            <div className="font-semibold">{step.title}</div>
                            <div className="ml-4">
                                <p>{step.contacts}</p>
                                <p>{step.hours}</p>
                                <p>{step.fee}</p>
                                <p>{step.time}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Notarized Copies Section */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold text-indigo-600">
                    {t('consular.docLeg.notarizedCopies.title')}
                </h2>
                <ol className="mt-4 list-decimal list-inside text-gray-300">
                    {t('consular.docLeg.notarizedCopies.steps', { returnObjects: true }).map((step, index) => (
                        <li key={index} className="mb-4">
                            <div className="font-semibold">{step.title}</div>
                            <div className="ml-4">
                                <p>{step.contacts}</p>
                                {step.mfcContacts && <p>{step.mfcContacts}</p>}
                                <p>{step.hours}</p>
                                <p>{step.fee}</p>
                                <p>{step.time}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Apostille Section */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold text-indigo-600">
                    {t('consular.docLeg.apostille.title')}
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    {t('consular.docLeg.apostille.description')}
                </p>
                
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-indigo-600">
                        {t('consular.docLeg.apostille.requirementsTitle')}
                    </h3>
                    <ol className="list-decimal list-inside text-gray-300">
                        {t('consular.docLeg.apostille.requirements', { returnObjects: true }).map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ol>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-indigo-600">
                        {t('consular.docLeg.apostille.address.title')}
                    </h3>
                    <p className="mt-2 text-gray-300">
                        {t('consular.docLeg.apostille.address.text')}
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-indigo-600">
                        {t('consular.docLeg.apostille.processingInfo.title')}
                    </h3>
                    <ul className="list-disc list-inside text-gray-300">
                        {t('consular.docLeg.apostille.processingInfo.details', { returnObjects: true }).map((detail, index) => (
                            <li key={index} className="mb-2">{detail}</li>
                        ))}
                    </ul>
                </div>
            </section>
            </div>
        </div>
        </div >
    )
    }

    export default DocLeg;