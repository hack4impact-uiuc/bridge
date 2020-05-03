import React from 'react'
import {useParams} from 'react-router-dom'

// Pages explaining design system
// name prop is from route `/design/{name}`
// examples of types of names: color, spacing, etc
const DesignPage = () => {
  let { name } = useParams();
  return (
    <div>
      <p>Design {name}</p>
    </div>
  )
}

export default DesignPage