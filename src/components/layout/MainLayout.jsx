/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
