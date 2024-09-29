'use client'

import images from '../../assets/images'; // Adjust the path as necessary

const GoodConduct = () => {
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
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-700">
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
            Certificate of Good Conduct
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Подайте заявку на получение этого документа на платформе{' '}
            <a href="https://accounts.ecitizen.go.ke/en" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              ecitizen
            </a>.
          </p>

          <p className="mt-2 text-lg leading-8 text-gray-300">
            Apply for this document on the ecitizen platform{' '}
            <a href="https://accounts.ecitizen.go.ke/en" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              here
            </a>.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-indigo-600">POLICE CLEARANCE CERTIFICATE REQUIREMENTS</h2>

          {/* Requirements List */}
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>An Introductory letter by the applicant</li>
            <li>Original second-generation national identification card and a clear photocopy (Kenyan passports not accepted).</li>
            <li>Pay USD 20 as a processing fee</li>
            <li>Fingerprints and palm prints recorded on a prescribed form at the nearest Police Station in Russia. This document should have a police endorsement seal or stamp and a translation of the same into English.</li>
            <li>If not registered and issued with a Kenyan ID Card as per Cap. 107 Laws of Kenya, must prove that he/she attained the age of 18 years while outside the country and is yet to return. A letter from the mission, certified copy of birth certificate, and passport are relevant in this case.</li>
            <li>If the applicant is a foreigner, then documentary proof that the applicant resided in Kenya and a certified photocopy of the applicant's passport will also be required in addition to the above listed requirements.</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default GoodConduct;