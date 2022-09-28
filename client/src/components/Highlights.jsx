import React from 'react'
import styled from 'styled-components'

function Highlights({ query, total }) {
  const firstIndex = total.indexOf(query)
  const length = query.length
  return (
    <HighLightsContainer>
      {total.slice(0, firstIndex)}
      <strong>{total.slice(firstIndex, firstIndex + length)}</strong>
      {total.slice(firstIndex + length)}
    </HighLightsContainer>
  )
}

export default Highlights

const HighLightsContainer = styled.div`
  margin-left: 5px;
`
