import { ArrowRightIcon } from '@heroicons/react/20/solid'; // Import an arrow icon for points
import images from '../../assets/images'; // Ensure this imports your images correctly

const Sports = () => {
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
              <p className="text-base font-semibold leading-7 text-indigo-600">Celebrating Sports</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Sports in Kenya</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
                Sports in Kenya are deeply rooted in culture and history, with a rich tradition of indigenous sports and a strong influence from British colonialism. Kenya has become a powerhouse in various sports, particularly athletics.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Eliud Kipchoge"
            src={images.Kipchoge} // Ensure you have an image of Kipchoge or relevant image here
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p>
                Kenya is globally recognized for its dominance in middle-distance and long-distance races. Recently, Kenyan athletes have excelled in marathons, with Eliud Kipchoge being a standout figure, famously breaking the marathon world record.
              </p>
              <ul role="list" className="mt-[20px] space-y-[10px]">
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Recent Achievements.</strong> Kipchoge's recent performance at the Berlin Marathon showcased his incredible talent and determination, further solidifying Kenya's reputation in athletics.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Rugby Success.</strong> The Kenyan Rugby Sevens team has made significant strides on the international stage, competing fiercely in tournaments like the World Rugby Sevens Series.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Diverse Sports.</strong> Beyond athletics, Kenya has a vibrant sports culture that includes rugby, cricket, football, and volleyball.
                  </span>
                </li>
              </ul>
              <p className="mt-[20px]">
                The rich sporting heritage of Kenya continues to inspire future generations of athletes to strive for excellence on both local and international stages.
              </p>

              {/* Link to relevant sports information */}
              <div className='mt-[30px]'>
                <a href='https://www.athleticskenya.or.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit Athletics Kenya
                </a><br />
                {/* You can add more links as necessary */}
                <a href='https://www.kru.co.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit Kenya Rugby Union
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

export default Sports;