import React, { Suspense, useEffect, useState, } from 'react';
import Navbar from './components/Navbar/Navbar';
import DisplayData from './components/DisplayData/DisplayData';
import { ErrorBoundary } from 'react-error-boundary';
import toast, { Toaster } from 'react-hot-toast';


const App = () => {

  const [singleData, setSingleData] = useState([])
  const [singleDataTime, setSingleDataTime] = useState(0)

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


  const handleBookmarked = (clickedData) => {
    setSingleData([...singleData, clickedData])
    setSingleDataTime(clickedData.reading_time + singleDataTime)
    toast.success('Your Bookmarked is added!')
  }

  const handleMarkAsRead = (id) => {
    const remainingData = singleData.filter((data) => data.id !== id)
    setSingleData(remainingData)
    toast.success('Congratulation, you successfully Read a blog!')
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>

        <div className='px-4 xl:px-0 flex flex-col-reverse md:flex-none md:grid md:grid-cols-12 mt-8 mb-52'>
          {/* left side */}
          <div className='md:col-span-8'>
            {loading && <div className='text-center '>
              <span className="loading size-16 loading-spinner"></span>
            </div>}
            {error && <p className='text-center text-3xl text-red-500'>{error.message}</p>}
            <DisplayData data={data} handleBookmarked={handleBookmarked} handleMarkAsRead={handleMarkAsRead}></DisplayData>
          </div>

          {/* right side */}
          <div className='mb-10 md:mb-0 md:col-span-4'>
            <p className='text-[#6047EC] mb-6 font-bold text-sm lg:text-2xl border border-[#6047EC] bg-[#6047EC10] rounded-lg py-5 px-5 lg:px-12 text-center'>
              Spent time on read : {singleDataTime} min
            </p>

            <div className='rounded-lg bg-[#11111105] dark:bg-white p-7 '>
              <h3 className='lg:text-2xl font-bold mb-6 dark:text-black text-center'>Bookmarked Blogs : {singleData.length}</h3>

              {
                singleData.map((data) => <p key={data.id} className='text-sm lg:text-lg font-semibold p-5 mb-6 rounded-lg bg-white dark:bg-black'>{data.title}</p>)
              }

            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default App;