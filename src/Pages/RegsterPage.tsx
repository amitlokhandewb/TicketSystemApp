import React from 'react'
import GenericFormLayout from '../Components/GenericComponents/GenericFormLayout'
import RegisterForm from '../Components/RegisterPageComponents/RegisterForm'

function RegsterPage() {
  return (
   <GenericFormLayout Title="Register to Ticket System">
     <RegisterForm />
   </GenericFormLayout>
  )
}

export default RegsterPage