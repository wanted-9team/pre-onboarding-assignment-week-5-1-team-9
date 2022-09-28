import React, { useState } from 'react'
import styled from 'styled-components'
import { useCache } from 'hooks/useCache'
import useDebounce from 'hooks/useDebounce'
import Header from 'components/Header'
import Searchbar from 'components/Searchbar'
import RecommendedKeyword from 'components/RecommendedKeyword'
import NoResults from 'components/NoResults'

const App = () => {
  const [query, setQuery] = useState('')
  const debounceVal = useDebounce(query)

  const { data, status, error } = useCache(debounceVal)

  // console.log(status)

  return (
    <Container>
      <Header />
      <Searchbar setQuery={setQuery} />
      {query ? <RecommendedKeyword data={data} /> : <NoResults />}
    </Container>
  )
}

export default App

const Container = styled.div`
  margin: 0 auto;
  width: 600px;
  border: 3px solid black;
  padding: 10px;
`
