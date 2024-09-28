import { ArrowRightIcon } from '@heroicons/react/20/solid'; // Import an arrow icon for points
import images from '../../assets/images'; // Ensure this imports your images correctly

const ForeignAffairs = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Empowering Diplomacy</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Ministry of Foreign Affairs</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
                The Ministry of Foreign Affairs of Kenya plays a crucial role in managing Kenya's international relations and promoting the country's interests abroad.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Kenya Flag"
            src={images.Flag} // Ensure you have an image of the flag here
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p>
                The Ministry actively engages in diplomatic efforts to enhance cooperation with other nations, focusing on areas such as trade, security, and cultural exchange.
              </p>
              <ul role="list" className="mt-[20px] space-y-[10px]">
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Scholarship Opportunities.</strong> The government offers scholarships for Kenyan students to study abroad, fostering educational ties with other countries.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Cultural Exchange Programs.</strong> The Ministry promotes cultural exchanges to enhance mutual understanding and respect among nations.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">International Cooperation.</strong> Engaging in partnerships with various countries to address global challenges such as climate change and security.
                  </span>
                </li>
              </ul>
              <p className="mt-[20px]">
                The Ministry also provides essential services to Kenyans living abroad and facilitates their engagement with the Kenyan government.
              </p>

              {/* Link to the Ministry of Foreign Affairs */}
              <div className='mt-[30px]'>
                <a href='https://www.mfa.go.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit the Ministry of Foreign Affairs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      {/* You can add more sections or information as needed */}
    </div>
  );
}

export default ForeignAffairs