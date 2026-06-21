import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Register() {

    const {register,handleSubmit}=useForm()

    const RegisterForm=async(data)=>{

        try{
            const response=await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
            console.log(response);
            

        }catch(err){
            console.log(err);
            

        }
        
        
    }
  return (
   <Box component='section' className='registerPage'>
    <Typography component='h1' variant='h2'>
Register
    </Typography>
    <Box onSubmit={handleSubmit(RegisterForm)} component='form' sx={{marginTop:2,display:'flex',flexDirection:'column',gap:2}}>
<TextField fullWidth {...register("userName")} label="userName" variant="outlined"/>
<TextField fullWidth  {...register("fullName")} label="fullName" variant="outlined"/>
<TextField fullWidth  {...register("email")} label="email" variant="outlined"/>
<TextField fullWidth  {...register("password")} label="password" variant="outlined"/>
<TextField fullWidth  {...register("phoneNumber")} label="phoneNumber" variant="outlined"/>
<Button variant='contained' type='submit'>
    Register
</Button>
    </Box>

   </Box>

   
  )
}

export default Register