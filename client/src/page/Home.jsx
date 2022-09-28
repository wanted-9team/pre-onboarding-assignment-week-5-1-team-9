import React from 'react'
import SearchResults from 'components/SearchResults'
import SearchInput from 'components/SearchInput'
import useDebounce from 'hooks/useDebounce'
import styled from 'styled-components'
import useKeydown from 'hooks/useKeydown'

const Home = () => {
  const { searchResult, searchWord, setSearchWord, loading } = useDebounce(500)
  const { listIndex, liRef, handleKeyArrow } = useKeydown(searchResult)

  return (
    <Container>
      <SearchInput setSearchWord={setSearchWord} handleKeyArrow={handleKeyArrow} />
      <SearchResults
        searchResult={searchResult}
        searchWord={searchWord}
        loading={loading}
        listIndex={listIndex}
        liRef={liRef}
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
