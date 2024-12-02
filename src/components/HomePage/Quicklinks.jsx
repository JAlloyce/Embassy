import React from 'react';
import images from '../../assets/images';

const Quicklinks = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Quick Links</h2>
      <div className="flex justify-center items-center flex-wrap">
        <a href="https://www.invest.go.ke/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src={images.Keninvestlogo} alt="Keninvest" className="w-24 h-auto md:w-32" />
        </a>
        <a href="https://www.epzakenya.go.ke/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src={images.Epzalogo} alt="EPZA" className="w-24 h-auto md:w-32" />
        </a>
        <a href="https://www.makeitkenya.go.ke/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src={images.KenyaExportLogo} alt="Kenya Export" className="w-24 h-auto md:w-32" />
        </a>
        <a href="https://www.vision2030.go.ke/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src={images.Vision2030logo} alt="Vision 2030" className="w-24 h-auto md:w-32" />
        </a>
        <a href="https://www.magicalkenya.com/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src={images.MagicalKenyalogo} alt="Magical Kenya" className="w-24 h-auto md:w-32" />
        </a>
        <a href="https://www.ktb.go.ke/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src={images.KenyaTourism} alt="Kenya Tourism" className="w-24 h-auto md:w-32" />
        </a>
      </div>
    </div>
  );
};

export default Quicklinks;