import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup" 
import axios from 'axios'
import { registerSchema } from '../../validation/RegisterSchema'

import { useState } from 'react'
function Register() {


  const [serverErrors,setServerErrors]=useState([])

    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
    resolver:yupResolver(registerSchema)
})

    const RegisterForm=async(data)=>{

        try{
        const response = await axios.post(
  `${import.meta.env.VITE_BURL}/auth/Account/Register`,
  data
);
            console.log(response);
            

        }catch(err){
           setServerErrors(err.response.data.errors)
            
            

        }
        
        
    }
  return (
   <Box component='section' className='registerPage'>
    <Typography component='h1' variant='h2'>
Register
    </Typography>
    {serverErrors?.length>0?serverErrors.map((error)=>
     <Typography color="error" >{error}</Typography>
    ):''}
    <Box onSubmit={handleSubmit(RegisterForm)} component='form' sx={{marginTop:2,display:'flex',flexDirection:'column',gap:2}}>
<TextField fullWidth {...register("userName")} label="userName" variant="outlined"

error={errors.userName}
helperText={errors.userName?.message}
/>
<TextField fullWidth  {...register("fullName")} label="fullName" variant="outlined"
error={errors.fullName}
helperText={errors.fullName?.message}
/>
<TextField fullWidth  {...register("email")} label="email" variant="outlined"
error={errors.email}
helperText={errors.email?.message}
/>
<TextField fullWidth  {...register("password")} label="password" variant="outlined"
error={errors.password}
helperText={errors.password?.message}
/>
<TextField fullWidth  {...register("phoneNumber")} label="phoneNumber" variant="outlined"

error={errors.phoneNumber}
helperText={errors.phoneNumber?.message}
/>
<Button variant='contained' type='submit' disabled={isSubmitting}>
    {isSubmitting?<CircularProgress/>:'register'}
</Button>
    </Box>

   </Box>

   
  )
}

export default Register