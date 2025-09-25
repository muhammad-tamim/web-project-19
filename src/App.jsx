import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import DisplayData from './components/DisplayData/DisplayData';
import { ErrorBoundary } from 'react-error-boundary';

const fetchData = fetch('./data.json')
  .then(res => res.json())

const App = () => {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <div className='grid grid-cols-12 mt-8 mb-52'>
        {/* left side */}
        <div className='col-span-9'>
          <Suspense fallback={<span className="loading loading-spinner loading-xl text-center"></span>}>
            <DisplayData fetchData={fetchData}></DisplayData>
          </Suspense>
        </div>

        {/* right side */}
        <div className='col-span-3 bg-gray-200'>

        </div>

      </div>

    </div>
  );
};

export default App;