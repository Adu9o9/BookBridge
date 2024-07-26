import React from 'react'
import useBackground from '../hooks/useBackground';

const Leaderboard = ({darkmode}) => {
  const {isDark} = useBackground();
  return (
    <>

            <div id='leaderboard' className={` w-[30%] h-64 ${!isDark?"bg-slate-500":"bg-white"} rounded-lg shadow-lg transition-all duration-500 ease-custom border-4
             border-transparent ${!isDark?"hover:border-blue-50":"hover:border-blue-600"} ${!isDark?"text-white":""} mt-5`}>
                <h1 className='text-2xl font-bold'>TOP DONATERS</h1>
                <ul className='mt-5'>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>1.</span><span>Amal Varghese</span><span>96</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>2.</span><span>Sandra Varghese</span><span>89</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>3.</span><span>John Doe</span><span>72</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>4.</span><span>Krishna</span><span>69</span></li>
                    <li className='flex justify-between ml-3 mt-2 mr-3 hover:bg-slate-300 border-b-2'><span>5.</span><span>Anonymous</span><span>53</span></li>
                </ul>



             </div>
    </>

      
  )
}

export default Leaderboard
