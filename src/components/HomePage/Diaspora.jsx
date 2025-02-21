import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import images from '../../assets/images'; // Ensure this imports your images correctly

const Diaspora = () => {
    const { t } = useTranslation();

    return (
        <div className="relative bg-cover bg-center h-80 sm:h-96 lg:h-[400px]" style={{ backgroundImage: `url(${images.Diaspora})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                    {t('diaspora.title')}
                </h1>
                <p className="mt-2 text-lg text-gray-300">
                    {t('diaspora.description')}
                </p>
            </div>
            <Link to="https://forms.gle/KtPK2YkVgbsPA2rw9" className="absolute right-6 bottom-6 flex items-center">
                <span className="inline-block w-16 h-16 border border-white rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-white hover:text-gray-900 transition duration-200">
                    {t('diaspora.registerButton')}
                </span>
            </Link>
        </div>
    );
}

export default Diaspora;