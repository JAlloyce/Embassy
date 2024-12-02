
import { Link } from 'react-router-dom';
    import images from '../../assets/images'; // Ensure this imports your images correctly

    const News = () => {
    return (
        <div className="relative bg-cover bg-center h-80 sm:h-96 lg:h-[400px]" style={{ backgroundImage: `url(${images.Flag})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Latest News
            </h1>
            <p className="mt-2 text-lg text-gray-300">
            The news, events and communication from the embassy of Republic of Kenya in Russia Federation.
            </p>
        </div>
        <Link to="/news" className="absolute right-6 bottom-6 flex items-center">
            <span className="inline-block w-16 h-16 border border-white rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-white hover:text-gray-900 transition duration-200">
            ➔
            </span>
        </Link>
        </div>
    );
    }

    export default News;