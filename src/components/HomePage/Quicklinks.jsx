import images from "../../assets/images";

const Quicklinks = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Centered Header */}
        <h2 className="text-3xl font-extrabold tracking-tight text-center">Quicklinks</h2>
        
        {/* Quick Links List */}
        <div className="mt-8 flex flex-wrap justify-center space-x-4">
          <a href="https://magicalkenya.com/">
            <img src={images.MagicalKenyalogo} alt="Magical Kenya" className="h-20 w-24 md:h-20 md:w-32" />
          </a>
          <a href="https://ktb.go.ke/">
            <img src={images.KenyaTourism} alt="Kenya Tourism Board" className="h-20 w-24 md:h-20 md:w-32" />
          </a>
          <a href="https://epzakenya.com/">
            <img src={images.Epzalogo} alt="EPZA Kenya" className="h-20 w-24 md:h-24 md:w-32" />
          </a>
          <a href="https://www.invest.go.ke/">
            <img src={images.Keninvestlogo} alt="Invest Kenya" className="h-20 w-24 md:h-20 md:w-32" />
          </a>
          <a href="https://vision2030.go.ke/">
            <img src={images.Vision2030logo} alt="Vision 2030" className="h-20 w-24 md:h-20 md:w-32" />
          </a>
          <a href="https://makeitkenya.go.ke/">
            <img src={images.KenyaExportLogo} alt="Make It Kenya" className="h-20 w-24 md:h-20 md:w-32" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Quicklinks;