import { Delete, Edit, Email, LocationOnOutlined, MobileFriendlyOutlined, Work } from '@mui/icons-material'
import { Avatar, Button, Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState()
  const [mobile, setMobile] = useState()
  const [work, setWork] = useState('')
  const [description, setDescription] = useState('')
  const [ID, setID] = useState(null)

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
    <div className="container">
        <Typography variant='h4' marginTop={5} marginBottom={10}>Welcome{username}!</Typography>
        <Card>
            <CardContent style={{display:'flex',justifyContent:'space-between'}}>
                <div className="left" style={{width:'50%'}}>
                 <Avatar/>
                 <Typography sx={{display:'flex',alignItems:'center'}}><Typography fontWeight={600} variant='h6'>Name:</Typography><Typography fontWeight={500} marginLeft={1}>{username}</Typography></Typography>
                 <Typography fontWeight={600} variant='h6'>Age:<span>{age}</span></Typography>
                 <Typography fontWeight={600} variant='h6'><Email sx={{color:'red'}}/> Email:<span>{email}</span></Typography>
                 <Typography fontWeight={600} variant='h6'><MobileFriendlyOutlined sx={{color:'black'}}/> Mobile:<span>{mobile}</span></Typography>
                 <Typography fontWeight={600} variant='h6'><Work sx={{color:'blue'}}/> Work:<span>{work}</span></Typography>
                </div>
                <div className="right" style={{display:'block',gap:'20px',width:'50%'}}>
                  <div>
                 <Link to='/update'><button className='btn'><Edit sx={{color:'blue'}}/></button></Link> 
                 <Link><button className='btn'><Delete sx={{color:'red'}}/></button></Link> 
                  </div>
                  <Typography fontWeight={600} marginY={1} variant='h6'><LocationOnOutlined sx={{color:'green'}}/>Location:<span>{address}</span></Typography>
                  <Typography fontWeight={600} variant='h6'>Description:<span>{description}</span></Typography>
                </div>
            </CardContent>
        </Card>
        <Link to='/'>
        <Button variant='contained' sx={{marginTop:'20px'}}>Back to home</Button>
        </Link>
    </div>
    </>
  )
}

export default Details