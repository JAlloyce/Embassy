import { ArrowRightIcon } from '@heroicons/react/20/solid';
import images from '../../assets/images'; 
import { useTranslation } from 'react-i18next';

const ForeignAffairs = () => {
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg mt-8 sm:mt-12">
              <p className="text-base font-semibold leading-7 text-indigo-600">{t('foreignAffairs.empowering')}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('foreignAffairs.ministry')}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400 text-justify">
                {t('foreignAffairs.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Kenya Foreign Affairs"
            src={images.Foreign}
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p className='text-justify'>
                {t('foreignAffairs.engagement')}
              </p>
              <ul role="list" className="mt-[20px] space-y-[10px]">
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('foreignAffairs.scholarship.title')}</strong> {t('foreignAffairs.scholarship.description')}
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('foreignAffairs.cultural.title')}</strong> {t('foreignAffairs.cultural.description')}
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('foreignAffairs.cooperation.title')}</strong> {t('foreignAffairs.cooperation.description')}
                  </span>
                </li>
              </ul>
              <p className="mt-[20px] text-justify">
                {t('foreignAffairs.services')}
              </p>

              <div className='mt-[30px]'>
                <a href='https://www.mfa.go.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  {t('foreignAffairs.visitLink')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForeignAffairs