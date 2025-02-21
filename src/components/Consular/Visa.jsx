'use client'

import { useTranslation } from 'react-i18next';
import images from '../../assets/images'; // Adjust the path as necessary

const Visa = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black">
      <div className="relative isolate overflow-hidden bg-black px-6 py-8 sm:py-8 lg:overflow-visible lg:px-4 lg:py-8">
        {/* Moved the header inside this section */}
        <header className="relative z-50 mb-2">
          <nav aria-label="Global" className="flex items-center justify-center">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Home</span>
                <img
                  alt="Your Company Logo"
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
            {t('consular.visa.title')}
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-gray-200">
            {t('consular.visa.subtitle')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('consular.visa.description')}
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            {t('consular.visa.details')}
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            {t('consular.visa.applicationTime')}
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <a
              href="https://www.etakenya.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Apply for eTA
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visa;