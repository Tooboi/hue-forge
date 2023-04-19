import React, { useState, useEffect } from 'react';
// import Overlay from '../components/Overlay'
// import HueCube from '../assets/HueCube4.webm';
import Scroll from '../components/Scroll';
import SaturationValuePicker from '../components/SaturationValuePicker';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [value, setValue] = useState(50);

  const handleSVChange = (newSaturation, newValue) => {
    setSaturation(newSaturation);
    setValue(newValue);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      console.log(position);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [];

  for (let i = 1; i <= 250; i++) {
    const fileName = i.toString().padStart(4, '0') + '.webp';
    images.push(require(`../assets/CubeHueWEBP/${fileName}`).default);
  }

  const currentFrame = Math.floor(scrollPosition / 10); // divide by 10 to get a frame rate of 10 frames per 1px of scroll

  return (
    <div className="bg-stone-950 flex justify-center">
      {/* <video src={HueCube} autoPlay loop muted /> */}
      <SaturationValuePicker hue={hue} saturation={saturation} value={value} onSVChange={handleSVChange} />
      {/* <img src={images[currentFrame]} alt={`Image ${currentFrame}`} /> */}
      <div className="flex ">
        {/* <div className="container mx-auto">
      <img
        className="mx-auto"
        src={images[currentImageIndex]}
        alt="animation"
      />
    </div> */}
        {/* <Scroll /> */}
      </div>
    </div>
  );
};

export default Hero;
