import React , {useState} from 'react'

import Navbar from '../components/Navbar';
import HomeTab from '../tabs/HomeTab';
import DonateTab from '../tabs/DonateTab';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import { ContactTab } from '../tabs/ContactTab';

import useBackground from '../hooks/useBackground';

import { createTheme } from '@mui/material/styles';



const Home = () => {
    const {isDark} = useBackground();
    const [value, setValue] = useState('2');

    const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };
  return (
    <div className='flex flex-col w-[95vw] h-screen overflow-x-hidden bg-white rounded-xl opacity-90 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]
    justify-items-start'>
        <Navbar/>
        <div id='tab-forms' className={`flex items-center justify-center ${!isDark?"bg-slate-800":""} `}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider',color: !isDark?"bg-slate-500":"" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        textColor='inherit'
                        sx={{
                          '& .MuiTab-root': {
                              color: !isDark ? 'white' : 'inherit',
                              '&.Mui-selected': {
                                  color: !isDark ? 'white' : 'inherit',
                              }
                          }
                      }}
                        
                      >
                        <Tab label="Home" value="1" className={!isDark?"bg-slate-800":""}/>
                        <Tab label="Donate!" value="2" />
                        <Tab label="Contact Us" value="3"/>
                      </Tabs>
                </Box>
        </div>
        <div id='main-hero-section' className={`${value==1?"":"h-screen"} ${!isDark?"bg-slate-800":""}`}>
          {value==1?<HomeTab darkmode={true}/>:
          value==2?<DonateTab/>:
          value==3?<ContactTab/>:console.log("Tab Error") }
        </div>
        
    
    </div>
  )
}

export default Home
