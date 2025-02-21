import images from '../../assets/images';
import {motion} from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Culture = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-12 sm:py-12 lg:overflow-visible lg:px-0">
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="relative z-50 mb-2">
          <nav aria-label="Global" className="flex items-center justify-center">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">{t('navigation.home')}</span>
                <img
                  alt="Kenya Embassy Logo"
                  src={images.Logo} 
                  className="h-36 w-auto" 
                />
              </a>
            </div>
          </nav>
        </header>

        <h1 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
          {t('explore.culture.title')}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {t('explore.culture.description')}
        </p>

        <div className="mt-10">
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600">{t('explore.culture.festivals')}</h2>
            <motion.div
              initial={{x:-100, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:0.5}}
              className="flex items-center gap-x-4 mt-4">
              <img
                alt=""
                src={images.Festival} 
                className="h-auto w-auto rounded-lg"
              />
            </motion.div>
            <p className="mt-2 text-gray-400 text-justify">
              {t('explore.culture.festivalsDesc')}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600">{t('explore.culture.museums')}</h2>
            <motion.div
              initial={{x:-100, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:0.5}}
              className="flex items-center gap-x-4 mt-4">
              <img
                alt=""
                src={images.Museum} 
                className="h-auto w-auto rounded-lg"
              />
            </motion.div>
            <p className="mt-2 text-gray-400 text-justify">
              {t('explore.culture.museumsDesc')}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600">{t('explore.culture.wildlife')}</h2>
            <motion.div
              initial={{x:-100, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:0.5}}
              className="flex items-center gap-x-4 mt-4">
              <img
                alt=""
                src={images.Wildlife} 
                className="h-auto w-auto rounded-lg"
              />
            </motion.div>
            <p className="mt-2 text-gray-400 text-justify">
              {t('explore.culture.wildlifeDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Culture; 