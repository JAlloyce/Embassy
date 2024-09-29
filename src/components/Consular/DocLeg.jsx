    'use client'

    import images from '../../assets/images'; // Adjust the path as necessary

    const DocLeg = () => {
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
                Legalization & Apostillation of Degrees and Certificates
            </h1>

            <h2 className="mt-8 text-xl font-semibold text-indigo-600">Legalization of Original Degree Certificates</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">Required for use of documents in Kenya</p>

            {/* Requirements for Legalization */}
            <ol className="mt-4 list-decimal list-inside text-gray-300">
                <li>
                Original documents submitted through university to MFA, RF (consular legalization department):
                <p>Contacts: Moscow, 1 Neopalimovskyi pereulok, 12 (Smolenskaya / Park Kultury metro stations)</p>
                <p>Working hours: 9.30 -12.30, 14.30 -17.00</p>
                <p>Fee: 350 RUR per document</p>
                <p>Time of legalization: 5 working days</p>
                </li>
                <li>
                Original documents stamped at Kenya Embassy, Moscow:
                <p>Contacts: Lopukhinskyi pereulok, 5</p>
                <p>Working hours: 9.00 -13.00, 14.00 -17.00 (Friday 16.00)</p>
                <p>Fee: free of charge for Kenyan citizens. For other nationalities, USD 20 per document</p>
                <p>Time of certification: 1 day</p>
                </li>
            </ol>

            <h2 className="mt-8 text-xl font-semibold text-indigo-600">Legalization of Notarized & Translated Copies of Degree Certificates</h2>
            {/* Requirements for Notarized & Translated Copies */}
            <ol className="mt-4 list-decimal list-inside text-gray-300">
                <li>
                Submitted through Multifunctional Center for provision of public services in Moscow (MFC/ МФЦ) to MFA, RF (consular legalization department):
                <p>Contacts: Moscow, Ryzanskiy Prospect, 2 building 3 (shopping mall Gorod), Nizhegorodskaya metro station</p>
                <p>MFC contacts are: www.md.mos.ru and 495 777 77 77.</p>
                <p>Working hours: 9.30 -12.30, 14.30 -17.00</p>
                <p>Fee: 500 RUR per document</p>
                <p>Time of legalization: 7 working days</p>
                </li>
                <li>
                Stamped at Kenya Embassy, Moscow:
                <p>Address: Lopukhinskyi pereulok, 5</p>
                <p>Fee: free of charge for Kenyan citizens; Time of certification: 1 day</p>
                </li>
            </ol>

            <h2 className="mt-8 text-xl font-semibold text-indigo-600">Apostille</h2>
            {/* Apostille Information */}
            <p className="mt-4 text-lg leading=8 text-gray-300">Required in countries of Hague convention (100 countries). Not valid in Kenya.</p>

            {/* Requirements for Apostille */}
            <ol className="mt=4 list-decimal list-inside text-gray-300">
                <li>Original degree certificates</li>
                <li>Notarized translation of passport</li>
                <li>Power of attorney (if not submitted personally)</li>
            </ol>

            {/* Address for Apostille */}
            <h3 className="mt-6 text-lg font-semibold text-indigo-600">Address:</h3>
            <p className="mt-4 text-lg leading-8 text-gray=300">Educational Department of Moscow: 2 Baltyiskyi pereulok, 3 (Sokol metro station)</p>

            {/* Processing Time and Fee */}
            <h3 className="mt-6 text-lg font-semibold text-indigo-600">Processing Time and Fee:</h3>
            <ul className="mt-4 list-disc list-inside text-gray-300">
                <li>The apostille service takes up to 45 days from the date of submission.</li>
                <li>The fee is 2500 RUR per document (degree certificate with transcript).</li>
                <li>In case the documents require both legalization and apostillation, the original documents should be stamped by MFA of Russia BEFORE apostillation.</li>
            </ul>

            </div>
        </div>
        </div >
    )
    }

    export default DocLeg;