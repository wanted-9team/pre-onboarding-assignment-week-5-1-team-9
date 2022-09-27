import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getSearchApi } from 'api'
import useDebounce from 'hooks/useDebounce'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const fetchApi = async () => {
    await getSearchApi()
  }
  const debouncedSearch = useDebounce(search, 500)
  useEffect(() => {
    if (!debouncedSearch) return
    fetchApi()
  }, [debouncedSearch])
  const handleSearchInput = ({ target }) => {
    setSearch(target.value)
  }
  return (
    <div>
      <SearchInputField onChange={handleSearchInput} />
    </div>
  )
}

export default SearchInput

const SearchInputField = styled.input``
