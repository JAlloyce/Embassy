 
    const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:kenyaembassymoscow@gmail.com';
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+74956372186'; // Format for telephone link
    };

    return (
        <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            {/* Centered Header */}
            <h2 className="text-3xl font-extrabold tracking-tight text-center">Contact Us</h2>
            
            {/* Left Side: Contact Info */}
            <div className="flex flex-col mt-8 w-full">
            <div className="mt-4">
                <h3 className="text-xl font-bold">Email</h3>
                <button
                onClick={handleEmailClick}
                className="text-blue-500 hover:text-blue-400 focus:outline-none focus:underline"
                >
                kenyaembassymoscow@gmail.com
                </button>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold">Phone</h3>
                <button
                onClick={handlePhoneClick}
                className="text-blue-500 hover:text-blue-400 focus:outline-none focus:underline"
                >
                +7 (495) 637 21 86
                </button>
                <p>Fax: +7 (495) 637 54 63</p>
            </div>
            </div>

            {/* Right Side: Address */}
            <div className="flex flex-col items-end mt-8 w-full">
            <h3 className="text-xl font-bold">Address</h3>
            <p className="mt-2 text-right">
                Lopukhinsky Pereulok 5, Moscow, Russia, 119034
            </p>
            </div>
        </div>

        {/* Static Map */}
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <iframe
            title="Embassy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9620089287985!2d37.61729931594226!3d55.75745858055672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6f5e0a9b9b7%3A0x8c6faeac5e9c8e7d!2sLopukhinsky%20Pereulok%205%2C%20Moscow%2C%20Russia%2C%20119034!5e0!3m2!1sen!2sus!4v1633107281605!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-sm">
            © 2005-2024 Embassy of the Republic of Kenya in the Russian Federation
        </div>
        </div>
    );
    };

    export default Contact;