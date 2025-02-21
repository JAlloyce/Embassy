import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    
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
            <h2 className="text-3xl font-extrabold tracking-tight text-center">{t('contact.title')}</h2>
            
            {/* Left Side: Contact Info */}
            <div className="flex flex-col mt-8 w-full">
            <div className="mt-4">
                <h3 className="text-xl font-bold">{t('contact.email.title')}</h3>
                <button
                onClick={handleEmailClick}
                className="text-blue-500 hover:text-blue-400 focus:outline-none focus:underline"
                >
                {t('contact.email.primary')}
                </button>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold">{t('contact.email.title')}</h3>
                <button
                onClick={handleEmailClick}
                className="text-blue-500 hover:text-blue-400 focus:outline-none focus:underline"
                >
                {t('contact.email.secondary')}
                </button>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold">{t('contact.phone.title')}</h3>
                <button
                onClick={handlePhoneClick}
                className="text-blue-500 hover:text-blue-400 focus:outline-none focus:underline"
                >
                {t('contact.phone.number')}
                </button>
                <p>{t('contact.phone.fax')}</p>
            </div>
            </div>

            {/* Right Side: Address */}
            <div className="flex flex-col items-end mt-8 w-full">
            <h3 className="text-xl font-bold">{t('contact.address.title')}</h3>
            <p className="mt-2 text-right">
                {t('contact.address.text')}
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
            {t('contact.copyright')}
        </div>
        </div>
    );
    };

    export default Contact;