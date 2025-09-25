import React, { Suspense, useEffect, useState, } from 'react';
import Navbar from './components/Navbar/Navbar';
import DisplayData from './components/DisplayData/DisplayData';
import { ErrorBoundary } from 'react-error-boundary';


const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))

  }, [])



  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <div className='grid grid-cols-12 mt-8 mb-52'>
        {/* left side */}
        <div className='col-span-8'>
          {loading && <div className='text-center '>
            <span className="loading size-16 loading-spinner"></span>
          </div>}
          {error && <p className='text-center text-3xl text-red-500'>{error.message}</p>}
          <DisplayData data={data}></DisplayData>
        </div>

        {/* right side */}
        <div className='col-span-4'>
          <p className='text-[#6047EC] mb-6 font-bold text-2xl border border-[#6047EC] bg-[#6047EC10] rounded-lg py-5 px-12'>
            Spent time on read : 0 min
          </p>

          <div className='rounded-lg bg-[#11111105] p-7 '>
            <h3 className='text-2xl font-bold mb-6'>Bookmarked Blogs : 0</h3>

            <p className='text-lg font-semibold p-5 mb-6 rounded-lg bg-white'>Master Microsoft Power Platform and Become an In-Demand!</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default App;