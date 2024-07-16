import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import RaiseTicketPage from '../Pages/RaiseTicketPage'
import LoginPage from '../Pages/LoginPage'
import ForgotPasswordPage from '../Pages/ForgotPasswordPage'
import ResetPassworsPage from '../Pages/ResetPassworsPage'

function PageRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/raise-ticket/:id?' element={<RaiseTicketPage />} />
        <Route path='*' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='reset-password/:id' element={<ResetPassworsPage />} />
    </Routes>
  )
}

export default PageRoute