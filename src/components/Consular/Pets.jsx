'use client'

import images from '../../assets/images'; // Adjust the path as necessary

const Pets = () => {
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
            Requirements to Import Cats/Dogs as Pets
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Document to be obtained at Embassy Prior to Departure:
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            In accordance with the Animal Disease Act, visitors to Kenya are required to obtain an import permit for their cat or dog before they can bring the animal into the country.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            This permit can be obtained at the Embassy, upon presentation of a valid vaccination booklet (check with veterinarian) and payment of USD 50 per animal. The permit is valid for thirty (30) days from the date of issue and is only valid for one consignment. The Import permit must accompany the animal during importation.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-indigo-600">OTHER DOCUMENTS REQUIRED:</h2>

          {/* Requirements List */}
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Veterinary certificate signed no more than five days prior to departure, stating that the animal is free of infectious diseases.</li>
            <li>Valid rabies certificate. If the animal was vaccinated less than 6 months before departure, also a certificate from a government veterinary officer of the country of origin, stating that no rabies cases have occurred within 50 km of the animal’s place of origin within the preceding 6 months.</li>
            <li>Certificate from the captain of the plane/ship carrying the animal, stating that the animal has not left the craft between embarkation and arrival, and was isolated from all other cats/dogs.</li>
            <li>Animals in transit for less than 48 hours do not need these certificates but will be kept in isolation at the owner’s expense and can only leave Kenya by air or sea.</li>
            <li>Cats/dogs entering Kenya by land must be reported within three days of arrival.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-indigo-600">MORE INFORMATION:</h2>

          {/* More Information Section */}
          <p className="mt-4 text-lg leading-8 text-gray-300">
            More information about importation of animals into Kenya can be obtained from the following:
          </p>
          
          <ul className="mt=4 list-disc list-inside text-gray-300">
            <li><a href="http://www.livestock.go.ke" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Ministry of Livestock Development (Veterinary Services & Disease Control)</a></li>
            <li><a href="http://www.apsea.or.ke" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Kenya Veterinary Association</a></li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Pets;