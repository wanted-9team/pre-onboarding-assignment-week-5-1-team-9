import React, { useCallback } from 'react'
import styled from 'styled-components'

const SearchInput = ({ setSearchWord, handleKeyArrow }) => {
  const handleSearchInput = useCallback(
    ({ target }) => {
      setSearchWord(target.value)
    },
    [setSearchWord],
  )

  return (
    <InputWrapper onKeyUp={handleKeyArrow}>
      <SearchInputField onChange={handleSearchInput} />
      <SearchButton>검색</SearchButton>
    </InputWrapper>
  )
}

export default SearchInput

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid royalblue;
`

const SearchInputField = styled.input`
  border: none;
  padding: 0 20px;
  font-size: 1.2rem;
  flex: 1;
  &:focus {
    outline: none;
  }
`

const SearchButton = styled.button`
  width: 80px;
  border: 1px solid royalblue;
  background-color: royalblue;
  color: #fff;
`
