
import React from 'react'
import { useNewCustomer, useCreateCustomerStatus } from '../hooks'
import Form from '../Form'

const New = ({region}) => {
  console.log('New.region:', region);
  const { onSubmit } = useNewCustomer()
  const status = useCreateCustomerStatus()

  return (
    <Form handleSubmit={onSubmit} status={status} customerID={null} propRegion={region} />
  )
}

export default New
  