import React from 'react'
import useBackground from '../hooks/useBackground';

const Latest = () => {
  const {isDark} = useBackground();
  return (
    <>

            <div id='latestbooks' className={`sm:w-[30%] w-[99%] sm:h-64 sm:ml-0 ml-1 ${!isDark?"bg-slate-500":"bg-white"} rounded-lg shadow-lg transition-all duration-500 ease-custom border-4
             border-transparent ${!isDark?"hover:border-blue-50":"hover:border-blue-600"} ${!isDark?"text-white":""} mt-5`}>
                <h1 className='text-2xl font-bold'>LATEST DONATIONS</h1>
                <ul className='mt-5'>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>1.</span><span>Harry Potter</span><span>24/7/24</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>2.</span><span>Lord of the Rings</span><span>24/7/24</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>3.</span><span>Game of thrones</span><span>24/7/24</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>4.</span><span>Dune</span><span>24/7/24</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>5.</span><span>Aadujeevitham</span><span>24/7/24</span></li>
                </ul>



             </div>
    </>
  )
}

export default Latest
