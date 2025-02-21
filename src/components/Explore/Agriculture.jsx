import { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import images from '../../assets/images'
import { useTranslation } from 'react-i18next';

export default function Agriculture() {
  const { t } = useTranslation();

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
            
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg mt-8 sm:mt-12">
              <p className="text-base font-semibold leading-7 text-indigo-600">{t('agriculture.tagline')}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('agriculture.title')}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400 text-justify">
                {t('agriculture.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
            alt="Coffee Production in Kenya"
            src={images.Agric} 
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p className='text-justify'>
                {t('agriculture.cooperation')}
              </p>
              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  <ArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('agriculture.productivity.title')}</strong> {t('agriculture.productivity.description')}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowDownIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('agriculture.market.title')}</strong> {t('agriculture.market.description')}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowLeftIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('agriculture.knowledge.title')}</strong> {t('agriculture.knowledge.description')}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('agriculture.investment.title')}</strong> {t('agriculture.investment.description')}
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-justify">
                {t('agriculture.conclusion')}
              </p>
              <div className='mt-[30px]'>
                <a href='https://www.kilimo.go.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  {t('agriculture.links.ministry')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}