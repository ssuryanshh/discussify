import React from 'react'

function parent(props) {
  return (
    <div>
      Parent
      {console.log("Props from parent",props)}
    </div>
  )
}

export default parent
