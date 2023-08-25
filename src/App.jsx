import React from 'react'
import Add from './pages/Add'
import Staff from './pages/Staff'
import Update from './pages/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Details from './pages/Details'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/read' exact element={<Staff/>}/>
        <Route path='/details' exact element={<Details/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App