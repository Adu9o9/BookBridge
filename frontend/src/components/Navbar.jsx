import React, { useState, forwardRef } from 'react'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import useBackground from '../hooks/useBackground';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button  from '@mui/material/Button';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = () => {
  const [open, setOpen] = useState(false);
}

const handleClickOpen = () => {
    setOpen(true);
  };


const handleClose = (e) => {
    console.log("Clicked close")
    setOpen(false);
    console.log(open)
  };  

const Navbar = () => {
  const {isDark , setIsDark} = useBackground();
  const [check , setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
  
  const handleAccount = (e) => {
    setOpen(true);
  }
 

  const handleSwitch = (e)=>{
    console.log(e.target.checked)
    setChecked(e.target.checked);
    setIsDark(check);
  }
  return (
    <div>
        <div className={`flex flex-row w-[100%] rounded-t-xl ${!isDark?"bg-slate-400":"bg-slate-200"} opacity-1 h-20 flex-wrap`} id='navbar'>
            <div className='text-4xl font-semibold pl-5 text-blue-700 h-[100%] w-[50%] flex items-center'>
                <h1>BookBridge</h1>
            </div>
            <div id='nav-buttons-holder' className='flex flex-row  items-center gap-10 w-[50%] justify-end pr-5'>
                
                <div id='toggle-dark-mode' className='flex justify-center items-center'>
                    <label className="inline-flex items-center relative">
                      <input className="peer hidden" id="toggle" type="checkbox" value={check} onClick={handleSwitch} />
                      <div
                        className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
                      ></div>
                      <svg
                        height="0"
                        width="100"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
                      >
                        <path
                          d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                        ></path>
                      </svg>
                      <svg
                        height="512"
                        width="512"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
                      >
                        <path
                          d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                        ></path>
                      </svg>
                    </label>

                </div>

                <div id='nav-buttons-right' className='flex gap-5'>
                <div id='profile-button' onClick={handleAccount}>
                    <button
                      className="group flex items-center justify-start w-11 h-11 bg-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                    >
                      <div
                        className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                      >
                        <Person2RoundedIcon/>
                      </div>
                      <div
                        className="absolute right-5 transform translate-x-full opacity-0 text-black text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        Account
                      </div>
                      <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Disagree</Button>
                          <Button onClick={handleClose}>Agree</Button>
                        </DialogActions>
                      </Dialog>
                    </button>
                
                
 
                </div>

                <div id='logout-button'>
                    <button
                      className="group flex items-center justify-start w-11 h-11 bg-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                    >
                      <div
                        className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 512 512" fill="black">
                          <path
                            d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="absolute right-5 transform translate-x-full opacity-0 text-black text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        Logout
                      </div>
                    </button>

                </div>
                </div>

                
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
