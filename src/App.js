import { BrowserRouter } from 'react-router-dom';
import Hero from './pages/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-stone-950'>
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
