import React from 'react'
import SearchPage from '../page/SearchPage'
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element = {<SearchPage />}/>
    </Routes>
  )
}

export default AllRoutes