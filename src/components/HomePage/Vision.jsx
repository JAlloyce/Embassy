import { Link } from 'react-router-dom';
import images from '../../assets/images'; // Ensure this imports your images correctly
import { useTranslation } from 'react-i18next';

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-8"> {/* Added a black background for the margin area */}
      <div className="relative bg-cover bg-center h-screen sm:h-96 lg:h-[360px]" style={{ backgroundImage: `url(${images.Flag})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl text-center mb-4">
            {t('vision.title')}
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div className="flex-1 mx-2">
              <h2 className="text-2xl font-bold text-white">{t('vision.visionSection.title')}</h2>
              <p className="mt-1 text-md text-gray-300 text-justify">
                {t('vision.visionSection.description')}
              </p>
            </div>
            <div className="flex-1 mx-2">
              <h2 className="text-2xl font-bold text-white">{t('vision.missionSection.title')}</h2>
              <p className="mt-1 text-md text-gray-300 text-justify">
                {t('vision.missionSection.description')}
              </p>
            </div>
            <div className="flex-1 mx-2">
              <h2 className="text-2xl font-bold text-white">{t('vision.valuesSection.title')}</h2>
              <p className="mt-1 text-md text-gray-300 text-justify">
                {t('vision.valuesSection.description')}
              </p>
            </div>
          </div>
        </div>
        <Link to="/embassy" className="absolute right-6 bottom-6 flex items-center">
          <span className="inline-block w-12 h-12 border border-white rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-white hover:text-gray-900 transition duration-200">
            ➔
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Vision;