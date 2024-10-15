
import images from '../../assets/images';
import {motion} from 'framer-motion'

const Embassy = () => {
return (
<div className="relative isolate overflow-hidden bg-black px-6 py-12 sm:py-12 lg:overflow-visible lg:px-0">
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

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <header className="relative z-50 mb-2">
        <nav aria-label="Global" className="flex items-center justify-center">
        <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <img
                alt="Kenya Embassy Logo"
                src={images.Logo} 
                className="h-28 w-auto" 
            />
            </a>
        </div>
        </nav>
    </header>

    <h1 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Embassy of the Republic of Kenya in the Russian Federation</h1>
    <p className="mt-6 text-xl leading-8 text-gray-400">
        Welcome to the Embassy of the Republic of Kenya in the Russian Federation.
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
                <p className="text-lg font-semibold text-white">Amb. (Dr). Peter Mutuku Mathuki, PhD</p>
                <p className="text-gray-400">Arrived in Moscow on 22nd August 2024.</p>
                
            </div>
            </motion.div>
            <p className="mt-2 text-gray-400">
            Amb. (Dr). Peter Mutuku Mathuki arrived in Moscow on 22nd August 2024 to commence his tour of duty as the Ambassador Extraordinary and Plenipotentiary of the Republic of Kenya to the Russian Federation with accreditation to Belarus and Kazakhstan.<br/>
            </p>
            <p className="mt-2 text-gray-400">
            Amb. (Dr). Peter Mutuku Mathuki is an accomplished Diplomat having served in Regional Economic Blocs, UN system and in the African region. His expertise is in Private Sector Development, Resource Mobilization, Public Policy and Economic Development.<br />
            </p>
            <p className="mt-2 text-gray-400">
            Dr. Mathuki served as the Secretary General of the East African Community (EAC) from April 2021 to June 2024. He was the Principal Executive Officer of the Community and the Secretary to the Summit of the EAC Heads of State. Dr. Mathuki is an ardent champion in global diplomacy and has left an indelible mark in his previous roles.<br />
            </p>
            <p className="mt-2 text-gray-400">
            He served as the Chief Executive Officer (CEO) of the East African Business Council (EABC), (2018-2021). He was instrumental in driving and articulating the Private Sector priorities in EAC decision-making process. Dr. Mathuki served as a Member of Parliament of the East African Legislative Assembly (EALA) - (2012-2017), where he chaired the EALA Committee responsible for good governance and served in the Committees of Accounts and Trade & Investment.<br />
            </p>
            <p className="mt-2 text-gray-400">
            He worked for the European Union (EU) programs for Africa touching several African countries. Dr. Mathuki has actively played a pivotal role in overseeing the coming into effect of the African Continental Free Trade Area (AfCFTA) and championed the formation of the African Business Council. He served in several boards across the region. Prior to this he worked both in Academia and several other private sector organizations.<br />
            </p>
            <p className="mt-2 text-gray-400">
            Dr. Mathuki holds an MBA and PhD in Strategic Management & Regional Integration from the University of Nairobi, Kenya. <br />
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
                <p className="text-lg font-semibold text-white">Amb. Irene K. Maswan, OGW</p>
                <p className="text-gray-400">Arrived in Moscow on 26th April 2024.</p>
                
            </div>
            </motion.div>
            <p className="mt-2 text-gray-400">
                Ambassador Irene Maswan arrived in Moscow on 26th April 2024. She assumed her position as the Deputy Head of Mission of the Republic of Kenya to the Russian Federation with accreditation to Belarus and Kazakhstan.
                </p>
                <p className="mt-2 text-gray-400">
                Ambassador Maswan, with a Master’s degree in Administration and Planning from the University of Nairobi, Kenya, is a career diplomat with a wealth of experience spanning over 23 years in Government. Before assuming her current position, Ambassador Maswan worked in various Ministries and Departments of the Government of Kenya. She worked as an Assistant Director in the Ministry of Interior and National Coordination, Department of Training and Research. She was Head of the East Africa and Great Lakes region Directorate in the Office of the President. While in this capacity, she coordinated the development of the Directorate’s strategic plan and the training curriculum. Ambassador Maswan has also served as Counselor at the Kenya High Commission in Bujumbura, Burundi. Before that, she worked as a consulting trainer at the BABI GROW LTD and the Electoral Commission of Kenya.
                </p>
                <p className="mt-2 text-gray-400">
                During her stint at the mission in Bujumbura, Amb. Maswan participated in the inter-parties peace initiatives for Burundi after 2015 elections. She also served as the liaison for the ICGLR Secretariat headquartered in Burundi. Maswan has continued to offer consultancy services in the field of training and development.
                </p>
                <p className="mt-2 text-gray-400">
                Ambassador Maswan has been awarded the national honors, the Order of the Golden Warrior (OGW) in recognition of her distinguished service to the nation. In addition to the official languages of Kenya, English and Swahili, she is proficient in French.
                </p>
        </div>

        

          {/* Home Based Staff */}
        <div className="mt-10">
            <h3 className="text-lg font-semibold text-indigo-600">HOME BASED STAFF</h3>
            <ul role="list" className="mt-[20px] space-y-[10px]">
            {[
                { name: 'Mrs. Gaudenzia C. Ayisi', role: 'Minister-Counsel General' },
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
            <h3 className='text-lg font-semibold text-white'>Contact Information</h3>
            <p className='text-gray-400'>Working Hours: Monday - Friday: 0900 - 1300 ; 1400 - 1600 Hrs</p>
            <p className='text-indigo-300'>Email: kenyaembassymoscow@gmail.com</p>
            <p className='text-gray-300'>Telephone:</p>
            <ul role='list' className='list-disc list-inside'>
            {['+7-495-637-4257', '+7-495-637-2186', '+7-495-637-3574'].map(number => (
                <li key={number} className='text-gray-300'>{number}</li>
            ))}
            </ul>
            <p>Fax: +7-495-637-2535</p>
            <p>Address: 1st Build, 5 Lopukhinsky Per., Moscow, Russia, 119034</p>
        </div>

        </div>

    </div>

    </div>
);
}

export default Embassy;