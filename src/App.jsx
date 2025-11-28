import React from 'react'
import { Home } from './Pages'
import { HomeNavbar } from './components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* <HomeNavbar/> */}
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App