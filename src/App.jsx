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
        <div className='col-span-8'>
          <Suspense fallback={<span className="loading loading-spinner loading-xl text-center"></span>}>
            <DisplayData fetchData={fetchData}></DisplayData>
          </Suspense>
        </div>

        {/* right side */}
        <div className='col-span-4'>
          <p className='text-[#6047EC] mb-6 font-bold text-2xl border border-[#6047EC] bg-[#6047EC10] rounded-lg py-5 px-12'>Spent time on read : 177 min</p>

          <div className='rounded-lg bg-[#11111105] p-7 '>
            <h3 className='text-2xl font-bold mb-6'>Bookmarked Blogs : 8</h3>

            <p className='text-lg font-semibold p-5 mb-6 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default App;