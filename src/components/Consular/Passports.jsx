'use client'

import images from '../../assets/images'; // Adjust the path as necessary

const Passports = () => {
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
            Passports
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

          <h2 className="mt-8 text-xl font-semibold text-indigo-600">PASSPORT REQUIREMENTS</h2>

          {/* New Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">1. New Passport</h3>
          <p className="mt-4 text-lg leading-8 text-gray-300">All applicants must fill three application Forms 19A.</p>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Be a Kenyan Citizen</li>
            <li>Three duly completed Passport application Forms 19A</li>
            <li>Applicant's Birth, Adoption or Registration (original and photocopy) Certificate. In some instances, an applicant's parent(s) birth certificate may be required.</li>
            <li>New generation National Identity Card (original and copy)</li>
            <li>Three coloured Passport size (3.4 x 4.5 cm) photographs of the applicant with one photo duly certified as true likeness of the applicant by the recommender. Applicant's ears must be visible on the photo.</li>
            <li>Certified copy of the recommender's National Identity Card</li>
          </ul>

          {/* Child Requirements */}
          <p className="mt-4 text-lg leading-8 text-gray-300">If the applicant is a child, additional requirements include:</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Two photocopies of the parent(s) current Kenyan passport pages 30,31,32 for type 'A' passports and pages 45,46,47 for type 'B' passports.</li>
            <li>Two copies of the parents' National identity card(s).</li>
            <li>Two copies of the child's international and/or Kenyan birth certificate.</li>
            <li>Two copies of the parents' birth certificates.</li>
            <li>Completed parental consent form (obtained at the Embassy).</li>
          </ul>

          {/* Replacement Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">2. Replacement of Passport after 5/10 years (Expired / Filled up)</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Three duly completed Passport application Forms 19A</li>
            <li>An introductory letter addressed to the Ambassador explaining why you need another passport</li>
            <li>Copy of the Bio-data page of your current passport</li>
            <li>Three coloured Passport size (3.4 x 4.5 cm) photographs of the applicant with one photo duly certified as true likeness of the applicant by the recommender. Applicant's ears must be visible on the photo.</li>
            <li>Certified copy of the recommender's National Identity Card</li>
            <li>Copy of birth certificate or the National ID of the applicant</li>
            <li>Original passport being replaced</li>
          </ul>

          {/* Replacement of Mutilated Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">3. Replacement of Mutilated Passport</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Three duly completed Passport application forms 19A</li>
            <li>Mutilated Passport to be replaced</li>
            <li>Copy of the Bio-data page of your current passport</li>
            <li>An affidavit detailing the circumstances under which the mutilation occurred</li>
            <li>Three coloured Passport size (3.4 x 4.5 cm) photographs of the applicant with one photo duly certified as true likeness of the applicant by the recommender. Applicant's ears must be visible on the photo.</li>
            <li>Certified copy of the recommender's National Identity Card</li>
            <li>Mutilated Passport application form (obtained at the Embassy)</li>
          </ul>

          {/* Replacement of Lost Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">4. Replacement of Lost Passport</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Original Birth Certificate</li>
            <li>A copy of the birth certificate (both sides) that was used to issue the lost passport</li>
            <li>Three duly completed Passport application forms 19A</li>
            <li>Three coloured Passport size (3.4 x 4.5 cm) photographs of the applicant with one photo duly certified as true likeness of the applicant by the recommender. Applicant's ears must be visible on the photo.</li>
            <li>An affidavit detailing the circumstances under which the loss occurred</li>
            <li>Police abstract original (in Russian) and a translation in English showing when and where the loss was reported</li>
            <li>Certified copy of the recommender's National Identity Card</li>
            <li>Cover letter addressed to the Ambassador explaining circumstances of loss by the applicant</li>
            <li>Lost passport application form (obtained at the Embassy)</li>
          </ul>

          {/* Diplomatic Passport Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">5. Diplomatic Passport</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Three duly completed Passport application form 19A</li>
            <li>Letter showing that the person meets the criteria set out in the third schedule of Kenya citizenship and immigration regulations, 2012 legal notice No.64.</li>
            <li>Old Passport or original Birth Certificate and National Identity Card together with their respective photocopies</li>
            <li>Certified copy of the recommender's National Identity Card</li>
            <li>Three coloured Passport size photographs of the applicant with one photo duly certified as true likeness of the applicant by the recommender.</li>
          </ul>

          {/* Emergency Travel Document Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">6. Emergency Travel Document</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>One-way Emergency Travel document is issued at the Embassy free of charge for repatriation to Kenya</li>
            <li>Requirements include: An interview at the Embassy; to be scheduled at the earliest, three days before the confirmed date of flight.</li>
            <li>Two (2) passport size photos</li>
            <li>Proof of Kenyan citizenship i.e. Kenyan Passport or National Identity Card.</li>
            <li>Police Report if passport is lost.</li>
            <li>Confirmed flight booking/ ticket</li>
          </ul>
          
          
          {/* Application to Regain Citizenship Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">APPLICATION TO REGAIN CITIZENSHIP</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>For the application to regain Kenyan citizenship for those who may have lost it through denounciation or acquisition of citizenship of another country the requirements are:</li>
            <li>1. Proof of Kenyan Citizenship (birth certificate, passport or National ID)</li>
            <li>2. Proof of citizenship of the other country (Notarized passport).</li>
            <li>3. Two passport size photographs</li>
            <li>4. Completed application for regaining citizenship form 5</li>
          </ul>

          {/* Notes Section */}
          <h3 className="mt-6 text-lg font-semibold text-indigo-600">Notes:</h3>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Applicant's copy of National Identity Card is MANDATORY for every application.</li>
            <li>These requirements are not exhaustive, if need be, more information may be required.</li>
          </ul>
          
        </div>
      </div>
    </div >
  )
}

export default Passports;