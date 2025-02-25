import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import RaiseTicketPage from '../Pages/RaiseTicketPage'
import LoginPage from '../Pages/LoginPage'
import ForgotPasswordPage from '../Pages/ForgotPasswordPage'
import ResetPassworsPage from '../Pages/ResetPassworsPage'
import NotFoundPage from '../Pages/NotFoundPage'
import RegsterPage from '../Pages/RegsterPage'

function PageRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/raise-ticket/:id?' element={<RaiseTicketPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegsterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='reset-password/:id' element={<ResetPassworsPage />} />
    </Routes>
  )
}

export default PageRoute