import { ArrowRightIcon } from '@heroicons/react/20/solid';
import images from '../../assets/images'; 

export default function Culture() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      <header className="relative z-50 mb-2">
                <nav aria-label="Global" className="flex items-center justify-center">
                    <div className="flex lg:flex-1">
                        <a href="/" className="m-1.5 p-1.5">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Celebrate Culture</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Cultural Heritage of Kenya</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
                Kenya is a multiethnic and multiracial society rich in cultural and natural heritage. The Government of Kenya is aware of the interactions between culture and development and pays great attention to promoting cultural activities in the country.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Cultural Activities in Kenya"
            src={images.Culture} 
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p>
                The cultural heritage is promoted through educational and social activities that are deliberately organized. There are annual events such as music, art exhibitions, and dance and drama festivals.
              </p>
              <ul role="list" className="mt-8 space-y-[10px]">
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Cultural Festivals.</strong> The Ministry of Culture and Sports runs a Cultural Centre, the Bomas of Kenya, where traditional dances are performed.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">National Museums of Kenya.</strong> Established in 1910, NMK collects, documents, and studies cultural heritage.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Kenya Wildlife Services.</strong> Responsible for the conservation of wildlife and natural heritage.
                  </span>
                </li>
              </ul>
              <p className="mt-[20px]">
                The Kenyan Government has established institutions to identify and conserve its cultural and natural heritage. Such institutions include the National Museums of Kenya (NMK) and Kenya Wildlife Services (KWS).
              </p>
              {/* Links to relevant websites */}
              <div className="mt-[30px]">
                <a href='http://sportsheritage.go.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit Sports Heritage
                </a><br />
                <a href='https://www.museums.or.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit National Museums of Kenya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}