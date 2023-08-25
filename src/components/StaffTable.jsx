import { Delete, Edit, RemoveRedEyeOutlined, TextFieldsOutlined } from '@mui/icons-material'
import { TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { Toaster, toast } from 'react-hot-toast'

const StaffTable = () => {
  const [apiData, setApiData] = useState([])
  const [search,setSearch] = useState('')
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(2)

  // pagination 
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex-postsPerPage;
  const currentPosts = apiData.slice(firstPostIndex, lastPostIndex)

  useEffect(()=>{
     axios.get(`https://64c0c7f50d8e251fd1129181.mockapi.io/crud`).then((getData)=>{
      setApiData(getData.data)
    })
  },[])
  
  const setData = (id,username,email,address,age,mobile,work,description) => {
    localStorage.setItem('ID',id)
    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    localStorage.setItem('address',address)
    localStorage.setItem('age',age)
    localStorage.setItem('mobile',mobile)
    localStorage.setItem('work',work)
    localStorage.setItem('description',description)
  }

  const getData = () => {
    axios.get(`https://64c0c7f50d8e251fd1129181.mockapi.io/crud`).then((getData)=>{
      setApiData(getData.data)
  })
  }

  const onDelete = (id) => {
    toast.error('Deleted Successfully!')
    axios.delete(`https://64c0c7f50d8e251fd1129181.mockapi.io/crud/${id}`).then(()=>{
      getData()
    })

  }

  return (
    <>
    <div className='d-flex flex-column'>
     <Typography variant='h3' bgcolor={'black'} color={'red'} textAlign={'center'} paddingY={1}>STAFF LISTING APP</Typography>
     <TextField color='primary' sx={{width:'100%',height:'35px',marginTop:'50px',marginBottom:'20px',borderWidth:'2px'}} label='SEARCH HERE' onChange={(e)=>setSearch(e.target.value)} autoFocus></TextField>
      <table className="table my-2">
  <thead>
    <tr className="table-dark">
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Mobile</th>
      <th scope="col">Work</th>
      <th scope="col">Address</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

  {
    currentPosts.filter((data)=>{
    return search.toLowerCase() === '' ? data : data.username.toLowerCase().includes(search)
  }).map((data,id)=>{
    return(
      <>
      {
        
    <tr key={id}>
      <th scope="row">{data.id}</th>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>{data.age}</td>
      <td>{data.mobile}</td>
      <td>{data.work}</td>
      <td>{data.location}</td>
      <td>{data.description}</td>
      <td>
      <Link to='/details'>
      <button className='btn' onClick={()=>setData(data.id,data.username,data.email,data.address,data.age,data.mobile,data.work,data.description)}><RemoveRedEyeOutlined sx={{color:'black',fontSize:'20px',cursor:'pointer'}}/></button>
      </Link>
      <Link to='/update'>
      <button className='btn' onClick={()=>setData(data.id,data.username,data.email,data.address,data.age,data.mobile,data.work,data.description)}><Edit sx={{color:'blue',fontSize:'20px',cursor:'pointer'}}/></button>
      </Link>
      <button className='btn' onClick={()=>onDelete(data.id)}>
      <Delete sx={{color:'red',fontSize:'20px',cursor:'pointer'}}/>
      </button>
      </td>
    </tr>
    
      }
      </>
    )
  })}

  </tbody>
</table>
<Pagination totalPosts={apiData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
<Link to='/'>
    <button className='btn btn-primary my-2'>Back To Home</button>
</Link>
</div>
<Toaster/>
    </>
  )
}

export default StaffTable