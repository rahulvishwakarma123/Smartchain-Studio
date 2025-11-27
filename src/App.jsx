import React from 'react'
import { Home } from './Pages'
import { HomeNavbar } from './components'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      {/* <HomeNavbar/> */}
      <Navbar/>
      <Home/>
    </>
  )
}

export default App