import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const TodoForm = () => {
  const navigate = useNavigate()
  // const [todo, setTodo] = useState({})
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState()
  const [mobile, setMobile] = useState()
  const [work, setWork] = useState('')
  const [description, setDescription] = useState('')


  // const handleChange = (e) =>{
  //   e.target.value
  //        e.preventDefault
  //        setTodo({
  //         ...todo,
  //          [e.target.name] : e.target.value
  //        })

  //       const { name, value } = e.target;
  //       setTodo({ ...todo, [name]: value });
  //       }


      
  const handleSubmit = () => {
    if (username && email && address && age && mobile && work && description) {
      axios.post(`https://64c0c7f50d8e251fd1129181.mockapi.io/crud`, {
        username,email,age,work,description,address,mobile
       })
       window.location.reload
       navigate('/read')
       toast.success('Item Added Successfully!')

      } else {
      toast.error("Please fill all fields!")
      navigate('/')
    }
    
  }
  return (
    <>
        <Typography variant='h3' bgcolor={'black'} color={'red'} textAlign={'center'} paddingY={1}>STAFF LISTING APP</Typography>
        <Link to='/read'>
        <Button variant='contained' sx={{marginBlock:'20px',marginLeft:'20px'}}>Check Staff List</Button>
        </Link>
        <Box sx={{width:'50%',boxShadow:'10px 10px 20px gray'}} marginX={'auto'} marginTop={5} padding={2}>
            <Typography variant='h5' bgcolor={'blue'} textAlign={'center'} paddingY={1} color={'white'} marginBottom={2}>ADD STAFF</Typography>
            <form>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Name' required  name='username' onChange={(e)=>setUsername(e.target.value)} autoFocus></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Email' required  name='email' onChange={(e)=>setEmail(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Age' type='number' required  name='age' onChange={(e)=>setAge(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Mobile' type='number' required  name='mobile' onChange={(e)=>setMobile(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Work' required  name='work' onChange={(e)=>setWork(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Address' required  name='address' onChange={(e)=>setAddress(e.target.value)}></TextField>
            <TextField sx={{width:'100%',height:'35px',marginBlock:'15px'}} label='Enter Description' required  name='description' onChange={(e)=>setDescription(e.target.value)}></TextField>
            <Button variant='contained' sx={{width:'100%',marginTop:'20px'}} type='submit' onClick={handleSubmit}>SUBMIT</Button>
            </form>
        <Toaster/>
        </Box>
    </>
  )
}

export default TodoForm