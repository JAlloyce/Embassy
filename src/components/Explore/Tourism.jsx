import { ArrowRightIcon } from '@heroicons/react/20/solid';
import images from '../../assets/images';
import { useTranslation } from 'react-i18next';

const Tourism = () => {
  const { t } = useTranslation();

  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Header Section */}
        <header className="relative z-50 mb-2">
          <nav aria-label="Global" className="flex items-center justify-center">
            <div className="flex lg:flex-1">
              <a href="/" className="m-1.5 p-1.5">
                <span className="sr-only">{t('navigation.home')}</span>
                <img
                  alt="Kenya Embassy Logo"
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
              <p className="text-base font-semibold leading-7 text-indigo-600">{t('explore.tourism.title')}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('explore.tourism.title')}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-400 text-justify">
                {t('explore.tourism.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={t('explore.tourism.title')}
            src={images.Tour} 
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
          
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p className='text-justify'>
                Kenya is renowned for its well-managed national parks, game reserves, marine parks, and archaeological sites. The country boasts pearly white sandy beaches along coral reef-sheltered waters, providing a perfect getaway for relaxation and adventure.
              </p>
              <ul role="list" className="mt-[20px] space-y-[10px]">
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('explore.tourism.safaris')}</strong>
                    {t('explore.tourism.safarisDesc')}
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('explore.tourism.cuisine')}</strong>
                    {t('explore.tourism.cuisineDesc')}
                  </span>
                </li>
                <li className="flex gap-x-[10px]">
                  <ArrowRightIcon aria-hidden="true" className="mt-[6px] h-[20px] w-[20px] flex-none text-indigo-600" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-white">{t('explore.tourism.experiences')}</strong>
                    {t('explore.tourism.experiencesDesc')}
                  </span>
                </li>
              </ul>
              <p className="mt-[20px] text-justify">
                The Kenyan government is actively promoting tourism by improving infrastructure and marketing unique attractions across different regions. With its stunning landscapes and rich culture, Kenya is indeed the ultimate destination for travelers.
              </p>

              {/* Link to relevant tourism */}
              <div className='mt-[30px]'>
                <a href='https://www.tourism.go.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit the Ministry of Tourism
                </a><br />
                <a href='https://www.ktb.go.ke/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit Kenya Tourism Board
                </a><br />
                <a href='https://www.magicalkenya.com/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-500'>
                  Visit Magical Kenya
                </a><br />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tourism;