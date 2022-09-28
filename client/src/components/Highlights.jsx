import React from 'react'
function Highlights({ query, total }) {
  const firstIndex = total.indexOf(query)
  const length = query.length
  return (
    <>
      {total.slice(0, firstIndex)}
      <strong>{total.slice(firstIndex, firstIndex + length)}</strong>
      {total.slice(firstIndex + length)}
    </>
  )
}

export default Highlights
