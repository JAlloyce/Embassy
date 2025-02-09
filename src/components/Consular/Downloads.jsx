
    import images from '../../assets/images'; // Adjust the path as necessary
    import docs from '../../assets/docs'; // Adjust the path to your docs.js file

    // Define the documents with their names and sizes
    const documents = [
    { name: 'Application to regain citizenship form 5', size: '30 КБ', path: docs.form5 },
    { name: 'Certificate of no Impediment Form 7', size: '42 КБ', path: docs.form7 },
    { name: 'Declaration of voluntary renunciation of Kenya citizenship form 15', size: '21 КБ', path: docs.form15 },
    { name: 'Form 8 application by a widow or widower', size: '26 КБ', path: docs.form8 },
    { name: 'Birth certificate application form', size: '381 КБ', path: docs.birth_cert },
    ];

    const Downloads = () => {
    return (
        <div className="bg-black">
        <div className="relative isolate overflow-hidden bg-black px-6 py-8 sm:py-8 lg:overflow-visible lg:px-4 lg:py-8">
            {/* Header Section */}
            <header className="relative z-50 mb-2">
            <nav aria-label="Global" className="flex items-center justify-center">
                <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
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

            {/* Background SVG */}
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

            {/* Downloads Section */}
            <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:py-8 text-left">
            <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
                Downloads
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-300">
                Click on the links below to download the necessary documents:
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }} className="mt-6 text-lg leading-8 text-gray-300">
                {documents.map((doc, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                    <a href={doc.path} download className="text-blue-400 hover:text-blue-300">
                    {doc.name} ({doc.size})
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
    }

    export default Downloads;