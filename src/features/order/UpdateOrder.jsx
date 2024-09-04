import React from 'react'
import Button from '../../Ui/Button'
import { useFetcher } from 'react-router-dom'

export default function UpdateOrder({order}) {
  const fetcher = useFetcher()
  return (
    <fetcher.Form method="PATCH" className='text-right'>
      <Button type='primary'>Make Priority</Button>
    </fetcher.Form>
  )
}
