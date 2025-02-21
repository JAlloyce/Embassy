import images from '../../assets/images';
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';

const Embassy = () => {
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
            <span className="sr-only">Home</span>
            <img
                alt="Kenya Embassy Logo"
                src={images.Logo} 
                className="h-36 w-auto" 
            />
            </a>
        </div>
        </nav>
    </header>

    <h1 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">{t('common.welcome')}</h1>
    <p className="mt-6 text-xl leading-8 text-gray-400">
        {t('common.welcomeMessage')}
    </p>


    <div className="mt-10">
        {/* Ambassador Information */}
        <div className="mt-6">
            <h3 className="text-lg font-semibold text-indigo-600">AMBASSADOR EXTRAORDINARY AND PLENIPOTENTIARY / HEAD OF MISSION</h3>
            <motion.div
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.5}}
            className="flex items-center gap-x-4 mt-4">
            <img
                alt="Ambassador Peter Mathuki"
                src={images.AmbPeter} 
                className="h-36 w-auto rounded-lg"
            />
            <div>
                <p className="text-lg font-semibold text-white">{t('ambassador.name')}</p>
                <p className="text-gray-400">{t('ambassador.arrival')}</p>
                
            </div>
            </motion.div>
            <p className="mt-2 text-gray-400 text-justify">
            {t('ambassador.introduction')}
            </p>
            <p className="mt-2 text-gray-400 text-justify">
            {t('ambassador.expertise')}
            </p>
            <p className="mt-2 text-gray-400 text-justify">
            {t('ambassador.eac')}
            </p>
            <p className="mt-2 text-gray-400 text-justify">
            {t('ambassador.eabc')}
            </p>
            <p className="mt-2 text-gray-400 text-justify">
            {t('ambassador.eu')}
            </p>
            <p className="mt-2 text-gray-400 text-justify">
            {t('ambassador.education')}
            </p>
        </div>
          {/* Deputy Ambassador Information */}
        <div className="mt-6">
            <h3 className="text-lg font-semibold text-indigo-600">DEPUTY HEAD OF MISSION</h3>
            <motion.div
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1}}
            className="flex items-center gap-x-4 mt-4">
            <img
                alt="Ambassador Peter Mathuki"
                src={images.AmbIrene}
                className="h-36 w-auto rounded-lg"
            />
            <div>
                <p className="text-lg font-semibold text-white">{t('deputy.name')}</p>
                <p className="text-gray-400">{t('deputy.arrival')}</p>
                
            </div>
            </motion.div>
            <p className="mt-2 text-gray-400 text-justify">
                {t('deputy.introduction')}
                </p>
                <p className="mt-2 text-gray-400 text-justify">
                {t('deputy.education')}
                </p>
                <p className="mt-2 text-gray-400 text-justify">
                {t('deputy.experience')}
                </p>
                <p className="mt-2 text-gray-400 text-justify">
                {t('deputy.peace')}
                </p>
                <p className="mt-2 text-gray-400 text-justify">
                {t('deputy.awards')}
                </p>
        </div>

        

          {/* Home Based Staff */}
        <div className="mt-10">
            <h3 className="text-lg font-semibold text-indigo-600">HOME BASED STAFF</h3>
            <ul role="list" className="mt-[20px] space-y-[10px]">
            {[
                { name: 'Mrs. Gaudenzia C. Ayisi', role: 'Minister-Counsel General' },
                { name: 'Mr. Raphael Musyoka', role: 'Counsellor' },
                { name: 'Mrs. Rose Nkirote Kiriinya', role: 'Second Secretary' },
                { name: 'Mrs. Anne Wanjiru', role: 'Financial Attaché' },
                { name: 'Ms. Jacqueline Abillah', role: 'Administrative Attaché' },
            ].map((staff) => (
                <li key={staff.name} className="flex justify-between gap-x-6 py-2">
                <div className="flex min-w-0 gap-x-4">
                    <img alt="" src={images.Flag} className="h-[50px] w-[50px] rounded-full" />
                    <div className="min-w-0 flex-auto">
                    <p className="text-base font-bold leading-6 text-gray-100">{staff.name}</p>
                    <span className="text-base leading-tight text-gray-300">{staff.role}</span>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </div>

          {/* Local Staff */}
        <div className="mt-10">
            <h3 className="text-lg font-semibold text-indigo-600">LOCAL STAFF</h3>
            <ul role="list" className="mt-[20px] space-y-[2px]">
            {[
                'Hanna Ilushchanka - Consular Clerk',
                'Elena Moleva - Commercial & Marketing Assistant',
                'Fredrick Amunga - ICT / Accounts Assistant',
                'Anush S. Misakyan - Cook Official Residence',
                'Azniv Karapetyan - Housekeeper Official Residence',
                'Matyakubov Umidbek - Chancery Janitor/Yard Man',
                'Abdugafur Kuzibaev - Driver, Utility vehicle',
                'Kamariddin Artikov - Driver, Utility vehicle',
                'Leonid Karelin - Driver, Utility vehicle',
                'Ilgam Baibekov - Driver, Utility vehicle',
            ].map((staff) => (
                <li key={staff} className="flex justify-between gap-x-6 py-2 text-gray-300">
                {staff}
                </li>
            ))}
            </ul>
        </div>

          {/* Contact Information */}
        <div className='mt-[30px]'>
            <h3 className='text-lg font-semibold text-white'>{t('common.contact')}</h3>
            <p className='text-gray-400'>{t('common.workingHours')}</p>
            <p className='text-indigo-300'>{t('common.email')}</p>
            <p className='text-gray-300'>{t('common.telephone')}</p>
            <ul role='list' className='list-disc list-inside'>
            {['+7-495-637-4257', '+7-495-637-2186', '+7-495-637-3574'].map(number => (
                <li key={number} className='text-gray-300'>{number}</li>
            ))}
            </ul>
            <p>{t('common.fax')}</p>
            <p>{t('common.address')}</p>
        </div>

        </div>

    </div>

    </div>
);
}

export default Embassy;