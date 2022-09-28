import React from 'react'
import styled from 'styled-components'

function Searchbar({ setQuery }) {
  return (
    <SearchBarContainer>
      <input type="text" onChange={event => setQuery(event.target.value)} />
    </SearchBarContainer>
  )
}

export default Searchbar

const SearchBarContainer = styled.div``
