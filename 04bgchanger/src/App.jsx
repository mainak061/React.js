import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (

<div className="fixed inset-0 overflow-hidden font-libertinus text-white" style={{ backgroundColor: color }}>
<h1 className='text-center text-4xl text py-8'>
  Back-Ground Colour Changer
</h1>

      <div className="absolute bottom-12 inset-x-0 flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-xl bg-white shadow-lg">
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: '#c1121f' }}
            onClick={() => setColor('#c1121f')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: '#669bbc' }}
            onClick={() => setColor('#669bbc')}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: '#588157' }}
            onClick={() => setColor('#588157')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: '#bc6bff' }}
            onClick={() => setColor('#bc6bff')}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'olive' }}
            onClick={() => setColor('olive')}
          >
            Default Colour
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;
