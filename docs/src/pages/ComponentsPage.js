import React from 'react'
import {useParams} from 'react-router-dom'

// Component Documention Page
// name is from route `/component/{name}`
const ComponentPage = () => {
  let { name } = useParams();
  return (
    <div>
      <p>Design {name}</p>
    </div>
  )
}

export default ComponentPage