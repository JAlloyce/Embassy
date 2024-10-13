import { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import images from '../../assets/images'

export default function Example() {
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
              <p className="text-base font-semibold leading-7 text-indigo-600">Grow with Kenya</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Agricultural Opportunities</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
                Kenya offers a wide range of agricultural opportunities, from growing cash crops like tea and coffee to
                producing fresh fruits and vegetables for export. The country's diverse climate and fertile soil make it
                an ideal location for agricultural development.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
            alt="Coffee Production in Kenya"
            src={images.Sunflower} 
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p>
                Kenya and Russia have been working together to strengthen their agricultural cooperation. The two
                countries have signed several agreements to promote trade and investment in the agricultural sector.
              </p>
              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  <ArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Increased Productivity.</strong> Kenyan farmers can
                    learn from Russian agricultural technologies and best practices to improve their yields and
                    efficiency.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowDownIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Market Access.</strong> Russia can provide a large
                    market for Kenyan agricultural products, particularly tea, coffee, and fresh produce.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowLeftIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Knowledge Sharing.</strong> Kenyan and Russian
                    agricultural experts can exchange knowledge and best practices to improve farming techniques and
                    technologies.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Investment Opportunities.</strong> Russia can invest in
                    Kenyan agriculture, particularly in areas like irrigation, storage facilities, and processing
                    plants.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                By working together, Kenya and Russia can create new opportunities for growth and development in the
                agricultural sector, benefiting both countries and their people.
              </p>
              {/* Link to relevant tourism */}
              <div className='mt-[30px]'>
                <a href='https://www.kilimo.go.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit the Ministry of Agriculture and Livestock Development
                </a><br />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}