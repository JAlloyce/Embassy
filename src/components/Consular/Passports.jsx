'use client'

import images from '../../assets/images'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';

const Passports = () => {
  const { t } = useTranslation();

  // Add debugging to check translations
  console.log('Translation test:', {
    title: t('consular.passport.title'),
    newPassportTitle: t('consular.passport.newPassport.title'),
    requirements: t('consular.passport.newPassport.requirements', { returnObjects: true })
  });

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-black px-6 py-8 sm:py-8 lg:overflow-visible lg:px-4 lg:py-8">
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
            {t('consular.passport.title')}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('consular.passport.applyOnEcitizen')}{' '}
            <a href="https://accounts.ecitizen.go.ke/en" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              {t('consular.passport.platform')}
            </a>
          </p>

          <h2 className="mt-8 text-xl font-semibold text-indigo-600">{t('consular.passport.requirements')}</h2>

          {/* New Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.newPassport.title')}</h3>
          <p className="mt-4 text-lg leading-8 text-gray-300">{t('consular.passport.newPassport.forms')}</p>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.newPassport.requirements', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>

          {/* Child Requirements */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.childRequirements.title')}</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.childRequirements.list', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>

          {/* Replacement Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.replacement.title')}</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.replacement.requirements', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>

          {/* Mutilated Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.mutilated.title')}</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.mutilated.requirements', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>

          {/* Lost Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.lost.title')}</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.lost.requirements', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>

          {/* Diplomatic Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.diplomatic.title')}</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.diplomatic.requirements', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>

          {/* Emergency Travel Document Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.emergency.title')}</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.emergency.requirements', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>
          
          
          {/* Regain Citizenship Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.regainCitizenship.title')}</h3>
          <p className="mt-4 text-lg leading-8 text-gray-300">{t('consular.passport.regainCitizenship.intro')}</p>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.regainCitizenship.requirements', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>

          {/* Notes Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">{t('consular.passport.notes.title')}</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            {t('consular.passport.notes.list', { returnObjects: true }).map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>
          
        </div>
      </div>
    </div >
  )
}

export default Passports;