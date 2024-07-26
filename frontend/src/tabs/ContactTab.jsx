import React from 'react'
import {TextField} from '@mui/material'
import { Button } from '@mui/material'
import useBackground from '../hooks/useBackground';

export const ContactTab = () => {
    const {isDark} = useBackground();
  return (
    <div className='flex flex-col w-full flex-wrap'>
        <div id='feedback-form' className='flex flex-col items-center justify-center  mt-5 min-w-[50%]'>
            <h1 className={`text-2xl font-semibold ${!isDark?"text-white":""}`}>Your Feedbacks are valuable to us</h1>
            <form className='flex flex-col w-[60%]'>
                <TextField id="outlined-basic1" fullWidth multiline rows={7}
                    label="Describe your experience using this platform" 
                    variant="outlined" sx={{
                        mt: 3,
                        ...( !isDark && {
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white',
                            }
                        })
                    }}/>
                <Button variant="contained" type='submit' fullWidth sx={{mt:2}}>Submit Your feedback</Button>
            </form>
        </div>
        {/* <div id='customer-service' className='flex justify-center items-center w-[40%]'>
            <img src={Customergirl} alt="" className='mt-10 h-3/5 '/>
        </div> */}
    </div>
  )
}
