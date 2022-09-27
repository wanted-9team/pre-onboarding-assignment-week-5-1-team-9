import React, { useCallback } from 'react'
import styled from 'styled-components'

const SearchInput = ({ setSearch }) => {
  const handleSearchInput = useCallback(
    ({ target }) => {
      setSearch(target.value)
    },
    [setSearch],
  )

  return (
    <InputWrapper>
      <SearchInputField onChange={handleSearchInput} />
      <SearchButton>검색</SearchButton>
    </InputWrapper>
  )
}

export default SearchInput

const InputWrapper = styled.div`
  display: flex;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid royalblue;
`

const SearchInputField = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`

const SearchButton = styled.button`
  border: 1px solid royalblue;
  background-color: royalblue;
  color: #fff;
`
