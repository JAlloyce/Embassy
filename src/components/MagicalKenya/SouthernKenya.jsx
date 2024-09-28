import images from '../../assets/images'; // Adjust the path to where your images are stored

const SouthernKenya = () => {
  const slides = [
    images.Slide24,
    images.Slide25,
  ];

  return (
    <div className="relative isolate flex flex-col items-center gap-y-6 px-6 py-4">
      {/* New Background Layer */}
      <div className="absolute top-0 z-[-2] h-full w-full rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />

      {slides.map((slide, index) => {
        // Determine alignment and size based on index
        const isEven = index % 2 === 0;
        const alignmentClass = isEven ? 'end' : 'start';
        const maxWidthClass = isEven ? '600px' : '800px';
        const translateY = isEven ? '20px' : '-20px';

        return (
          <div key={index} className={`relative w-full flex justify-${alignmentClass} mb-4`}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`max-w-[${maxWidthClass}] h-auto rounded-lg shadow-lg`}
              style={{ transform: `translateY(${translateY})` }} // Stagger effect
            />
          </div>
        );
      })}
    </div>
  );
};

export default SouthernKenya;