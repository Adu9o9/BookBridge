import React from 'react'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import Button from '@mui/material/Button';
import ImageSection from '../components/ImageSection'


const Signup = () => {
  return (
    <div className='flex flex-wrap h-[500px] w-[900px] rounded-xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] '>
      <div id='form-control-section' className='flex flex-col w-[100%] h-[100%] rounded-xl sm:w-[50%]'>
        <h1 className='text-3xl'>Welcome to </h1>
        <span className='text-blue-400 text-5xl font-bold'>BookBridge</span>
        <form>
          <TextField id="outlined-basic2"  label="username" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }} variant="outlined" sx={{mt:2 , width:"80%"}}/>

          <TextField id="outlined-basic3"  label="password" type='password' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon/>
            </InputAdornment>
          ),
        }} variant="outlined" sx={{mt:2 , width:"80%"}}/>

        

        <div className='text-blue-400 mt-1 hover:underline'>
          <a href='#'>forgot password?</a>
        </div>

          
        <Button variant="contained" sx={{mt:3, width:"80%"}}>Login</Button>

        </form>

        <div className='text-blue-400 mt-1 hover:underline'>
          <a href='#'>New here? Create an account</a>
        </div>
      </div>
      <div id='image-container' className='w-[50%] rounded-tr-xl rounded-br-xl hidden sm:block '>
        <ImageSection/>
      </div>
      
    </div>
  )
}

export default Signup
