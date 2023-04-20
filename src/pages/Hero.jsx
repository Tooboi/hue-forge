import HueCube from '../assets/HueCubeA2.webm';

const Hero = () => {
  return (
    <div className="bg-[#000] flex flex-col justify-center overflow-hidden">
      <div className='to-black'>
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-amber-500 text-center text-6xl py-12 animate-background">Welcome to HueForge</h1>
      </div>
      <video src={HueCube} autoPlay loop muted className="w-5/6 m-auto max-w-xl " />
      <div className="mx-auto flex flex-col justify-center from-black w-full py-12">
        <h2 className="text-white text-center text-4xl py-12">forge the perfect palette</h2>
        <button className="text-white w-48 bg-stone-400 mx-auto">Enter</button>
      </div>
    </div>
  );
};

export default Hero;
