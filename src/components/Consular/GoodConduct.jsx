'use client'

import images from '../../assets/images'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';

const GoodConduct = () => {
  const { t, i18n } = useTranslation();

  // Add more detailed debugging logs
  console.log('Current language:', i18n.language);
  console.log('Full translation resources:', i18n.getResourceBundle(i18n.language, 'translation'));
  console.log('Testing goodConduct translations:', {
    consularSection: t('consular', { returnObjects: true }),
    fullPath: t('consular.goodConduct', { returnObjects: true }),
    title: t('consular.goodConduct.title'),
    applyOnEcitizen: t('consular.goodConduct.applyOnEcitizen'),
    platform: t('consular.goodConduct.platform'),
    requirementsTitle: t('consular.goodConduct.requirements.title'),
    requirements: t('consular.goodConduct.requirements.list', { returnObjects: true })
  });

  // Add error boundary for translation rendering
  const renderTranslatedList = () => {
    try {
      return t('consular.goodConduct.requirements.list', { returnObjects: true }).map((requirement, index) => (
        <li key={index} className="ml-4">{requirement}</li>
      ));
    } catch (error) {
      console.error('Error rendering requirements list:', error);
      return null;
    }
  };

  return (
    <div className="bg-white">
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
            {t('consular.goodConduct.title')}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('consular.goodConduct.applyOnEcitizen')}{' '}
            <a href="https://accounts.ecitizen.go.ke/en" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">
              {t('consular.goodConduct.platform')}
            </a>
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-indigo-600">
            {t('consular.goodConduct.requirements.title')}
          </h2>

          {/* Requirements List with error boundary */}
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            {renderTranslatedList()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoodConduct;