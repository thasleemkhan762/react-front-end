import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import { Route, Routes } from 'react-router-dom'


const MainRouter = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<MainLayout />} />
        </Routes>
      </>
    )
  }
  
  export default MainRouter