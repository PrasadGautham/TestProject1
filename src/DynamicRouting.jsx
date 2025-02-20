import React from 'react'
import { useParams } from 'react-router'

const DynamicRouting = () => {
    const {id}=useParams()
  return (
    
    <div>DynamicRouting-{id}</div>
  )
}

export default DynamicRouting