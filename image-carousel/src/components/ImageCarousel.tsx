import React, { useState, useEffect } from 'react';

import { bluesky, fall, mountainlake, redsky, snowpeak } from '../assets';

const images = [
  { src: bluesky, caption: 'Blue Sky' },
  { src: fall, caption: 'Autumn Leaves' },
  { src: mountainlake, caption: 'Mountain Lake' },
  { src: redsky, caption: 'Red Sky' },
  { src: snowpeak, caption: 'Snow Peak' },
];
const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

	const setSlide = (index: number) => {
		setCurrentSlide(index)
	}

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div>
      {images.map((image, index) => (
        <div>
          <div className="">{`${index + 1} / ${images.length}`}</div>
          <img src={image.src} alt={image.caption} style={{ width: '100%' }} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}

      <a href="" onClick={prevSlide}>
        &lt;
      </a>
      <a href="" onClick={nextSlide}>
        &gt;
      </a>
    </div>
  );
};

export default ImageCarousel;
