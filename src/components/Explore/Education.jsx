import { ArrowRightIcon } from '@heroicons/react/20/solid'; 
import images from '../../assets/images';

export default function Education() {
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
            
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Empowering Through Education</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Education in Kenya</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
              In Kenya, Education  is considered a basic right that should be offered to every individual.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Education in Kenya"
            src={images.Uon} 
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p>
              The Competency-Based Curriculum was rolled out in 2017 to replace the 8-4-4 Curriculum that has been in practice since 1987.
              </p>
              <ul role="list" className="mt-[20px] space-y-[10px]">
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">CBC Rating.</strong> In 2017, Kenyan education system was rated as the strongest among other forty three mainland countries on the African continent by the World Economic Forum
                    -Competency Based Curriculum (CBC), 2-6-3-3-3
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">CBC Emphasis.</strong> The Competency-Based Curriculum puts emphasis on seven core competences namely; communication and collaboration, critical thinking and problem-solving, creativity and imagination, citizenship, digital literacy, learning to learn and self-efficacy.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Technical and Vocational Education and Training Institutions.</strong> These institutions operate under the state department of vocational and technical training under the helm of a Principal Secretary. They award artisan, craft and diploma and higher national diploma certificates after successful completion of relevant courses.

                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Government TVET institutions</strong> There are three types of government TVET institutions in Kenya. these are National Polytechnics, Technical Institutions and Vocational Education Centers (formerly Youth Polytechnics)University education.
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-white">Higher Education Financing</strong> In 2023, the Government of Kenya launched the Higher Education Financing portal to ensure equality in the access to education for University and TVET students. The HEF portal is based on the New Funding Model (NFM) launched by the President of Kenya on 3 May 2023.
                  </span>
                </li>
              </ul>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        </div>
              {/* Links to relevant websites */}
              <div className="mt-[30px]">
                <a href='https://www.education.go.ke' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit Ministry of Education
                </a><br />
                <a href='https://en.m.wikipedia.org/wiki/Education_in_Kenya' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Education in Kenya
                </a><br />
                <a href='https://russia.study/en' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Apply for Russian Government Scholarship
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}