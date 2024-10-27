import images from '../../assets/images';
import {motion} from 'framer-motion'

const GettingAround = () => {
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
                className="h-36 w-auto" 
            />
            </a>
        </div>
        </nav>
    </header>

    <p className="mt-6 text-xl leading-8 text-gray-400">
    Hey there! 🌟 So, you are looking for a quick guide on getting around Kenya? Let’s dive right in! 
    </p>
    <h1 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Getting Around</h1>
    <p className="mt-6 text-xl leading-8 text-gray-400">
        Welcome to the Embassy of the Republic of Kenya in the Russian Federation.
    </p>


    <div className="mt-10">
        {/* Getting Around */}
        <div className="mt-6">
            <h1 className="text-2xl font-semibold text-indigo-600">Getting Around Nairobi</h1>
            <h4 className="text-lg font-semibold text-indigo-600">The Nairobi Light Rail</h4>
            <motion.div
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.5}}
            className="flex items-center gap-x-4 mt-4">
            <img
                alt=""
                src={images.Get1} 
                className="h-auto w-auto rounded-lg"
            />
            </motion.div>
            <p className="mt-2 text-gray-400">
            The Nairobi Light Rail is a super convenient way to zip around the city! <br/>
            </p>
            <p className="mt-2 text-gray-400">
            With its modern vibe and comfy ride, it links key areas in the city making it perfect for avoiding traffic..<br />
            </p>
            <p className="mt-2 text-gray-400">
            Just hop on, and you’ll be zooming past those busy streets in no time!<br />
            </p>
        </div>
        <div className="mt-6">
            <h4 className="text-lg font-semibold text-indigo-600">The PSV Service (Matatus)</h4>
            <motion.div
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.5}}
            className="flex items-center gap-x-4 mt-4">
            <img
                alt=""
                src={images.Get2} 
                className="h-auto w-auto rounded-lg"
            />
            </motion.div>
            <p className="mt-2 text-gray-400">
            If you want the true Kenyan experience, you HAVE to hop on a matatu! It is the heartbeat of the city’s public transport.<br/>
            </p>
            <p className="mt-2 text-gray-400">
            They’re always full with awesome music, and you can find routes all over Nairobi.<br />
            </p>
            <p className="mt-2 text-gray-400">
            Just remember to bring your best mood, take care of your personal belongings , and stay part of the adventure!<br />
            </p>
        </div>
        </div>
    <div className="mt-10">
        {/* Getting Around */}
        <div className="mt-6">
            <h1 className="text-2xl font-semibold text-indigo-600">Getting Around Kenya</h1>
            <h4 className="text-lg font-semibold text-indigo-600">Various Highways</h4>
            <motion.div
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.5}}
            className="flex items-center gap-x-4 mt-4">
            <img
                alt=""
                src={images.Get3} 
                className="h-auto w-auto rounded-lg"
            />
            </motion.div>
            <p className="mt-2 text-gray-400">
            Kenya’s highways will take you on some epic road trips <br/>
            </p>
            <p className="mt-2 text-gray-400">
            The major highways like the Mombasa Road and the Nyeri-Nairobi Highway connect you to stunning destinations like the coast and the Rift Valley.<br />
            </p>
            <p className="mt-2 text-gray-400">
            Just buckle up and enjoy the ride through Kenya’s gorgeous landscapes!<br />
            </p>
        </div>
        <div className="mt-6">
            <h4 className="text-lg font-semibold text-indigo-600">The Airports</h4>
            <motion.div
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.5}}
            className="flex items-center gap-x-4 mt-4">
            <img
                alt=""
                src={images.Get4} 
                className="h-auto w-auto rounded-lg"
            />
            </motion.div>
            <p className="mt-2 text-gray-400">
            Traveling by air? Kenya has a great mix of local and international airports.<br/>
            </p>
            <p className="mt-2 text-gray-400">
            Jomo Kenyatta International Airport (JKIA) in Nairobi is your main hub for international flights, while places like Wilson Airport cater to domestic flights.<br />
            </p>
            <p className="mt-2 text-gray-400">
            Super handy for reaching places like Maasai Mara or Lake Nakuru quickly!<br />
            </p>
        </div>
        <div className="mt-6">
            <h4 className="text-lg font-semibold text-indigo-600">The Inter City Railway</h4>
            <motion.div
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:0.5}}
            className="flex items-center gap-x-4 mt-4">
            <img
                alt=""
                src={images.Get5} 
                className="h-auto w-auto rounded-lg"
            />
            </motion.div>
            <p className="mt-2 text-gray-400">
            For a chill ride across the country, check out the intercity trains!<br/>
            </p>
            <p className="mt-2 text-gray-400">
            The Madaraka Express connects Nairobi to Mombasa in a snap.<br />
            </p>
            <p className="mt-2 text-gray-400">
            With comfy seats and beautiful views, it’s a fab way to travel and experience the scenic beauty of Kenya.<br />
            </p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default GettingAround