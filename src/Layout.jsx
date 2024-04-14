import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
 
function Layout() {
  return (
    <>
    <ScrollToTop />
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout