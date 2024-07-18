import React from 'react'
import GenricTabLayout from '../Components/GenericComponents/GenricTabLayout'
import RaiseTicketForm from '../Components/RaiseTicketComponents/RaiseTicketForm'

function RaiseTicketPage() {
  return (
    <GenricTabLayout title="Raise Ticket"><RaiseTicketForm /></GenricTabLayout>
  )
}

export default RaiseTicketPage