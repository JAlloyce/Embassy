'use client'

import images from '../../assets/images'; // Adjust the path as necessary

const Birth = () => {
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
            Application for Birth Certificate
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

          <h2 className="mt-8 text-xl font-semibold text-indigo-600">APPLICATION FOR KENYAN BIRTH CERTIFICATE FOR KENYANS BORN ABROAD</h2>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            The following documents are required for processing Birth Certificates for Kenyans born abroad:
          </p>

          {/* Requirements List */}
          <ul className="mt=4 list-disc list-inside text-gray-300">
            <li>Two (2) application forms (BDA1) duly filled and signed</li>
            <li>Copy of father’s passport (translated into English if it’s not in English) duly certified by the Embassy</li>
            <li>Copy of mother’s passport (translated into English if it’s not in English)</li>
            <li>Notification of birth/birth certificate issued by the civil authorities or the hospital (translated, certified by relevant Government agency)</li>
            <li>Two copies of marriage certificate translated into English or international marriage certificate (if legally married)</li>
            <li>Processing fee USD 5</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-indigo-600">FURTHER DETAILS MAY BE OBTAINED FROM:</h2>

          {/* Contact Information Section */}
          <p className="mt=4 text-lg leading=8 text-gray-300">
            The Director,<br />
            Department of Civil Registration<br />
            P. O. Box 49179 - 00100, Tel: 2714987/8<br />
            Nairobi, Kenya
          </p>

        </div>
      </div>
    </div>
  )
}

export default Birth;