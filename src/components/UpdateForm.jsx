import React, { useState,useEffect } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

const UpdateForm = () => {
  // const [todo, setTodo] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState()
  const [mobile, setMobile] = useState()
  const [work, setWork] = useState('')
  const [description, setDescription] = useState('')
  const [ID, setID] = useState(null)

  // const handleChange = (e) =>{
  //   e.preventDefault
  //   setTodo({
  //   //  ...todo,
  //   //   [e.target.name] : e.target.value
  // })
  // const { name, value } = e.target;
  // setTodo({ ...todo, [name]: value });
  // }
      
  const handleUpdate = () => {
    toast.success('Item Added Successfully!')
    axios.put(`https://64c0c7f50d8e251fd1129181.mockapi.io/crud/${ID}`, {
      username,email,age,work,description,address,mobile
    })
    window.location.reload
  }

  useEffect(()=>{
    setUsername(localStorage.getItem('username'))
    setEmail(localStorage.getItem('email'))
    setAddress(localStorage.getItem('address'))
    setAge(localStorage.getItem('age'))
    setMobile(localStorage.getItem('mobile'))
    setWork(localStorage.getItem('work'))
    setDescription(localStorage.getItem('description'))
    setID(localStorage.getItem('ID'))
  },[])
  return (
    <>
        <Typography variant='h3' bgcolor={'black'} color={'red'} textAlign={'center'} paddingY={1}>STAFF LISTING APP</Typography>
    <Box sx={{width:'50%',boxShadow:'10px 10px 20px gray'}} marginX={'auto'} marginTop={5} padding={2}>
        <Typography variant='h5' bgcolor={'blue'} textAlign={'center'} paddingY={1} color={'white'} marginBottom={2}>UPDATE STAFF</Typography>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Name' required value={username} name='username' onChange={(e)=>setUsername(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Email' required value={email} name='email' onChange={(e)=>setEmail(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Age' type='number' required value={age} name='age' onChange={(e)=>setAge(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Mobile' type='number' required value={mobile} name='mobile' onChange={(e)=>setMobile(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Work' required value={work} name='work' onChange={(e)=>setWork(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Address' required value={address} name='address' onChange={(e)=>setAddress(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Description' required value={description} name='description' onChange={(e)=>setDescription(e.target.value)}></TextField>
            <Link to='/read'>
            <Button variant='contained' sx={{width:'100%',marginTop:'20px'}} type='submit' onClick={handleUpdate}>SUBMIT</Button>
            </Link>
            <Link to='/read'>
            <Button variant='contained' sx={{width:'100%',marginTop:'20px'}}>CANCEL</Button>
            </Link>
            <Toaster/>
    </Box>
</>
  )
}

export default UpdateForm