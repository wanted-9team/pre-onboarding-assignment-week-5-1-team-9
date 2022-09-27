import React from 'react'
import SearchResults from 'components/SearchResults'
import SearchInput from 'components/SearchInput'
import useDebounce from 'hooks/useDebounce'
import styled from 'styled-components'

const Home = () => {
  const { searchResult, search, setSearch } = useDebounce(500)

  return (
    <Container>
      <SearchInput setSearch={setSearch} />
      <SearchResults searchResult={searchResult} search={search} />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
