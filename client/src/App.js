import React, { useState } from 'react'
import styled from 'styled-components'
import { useCache } from 'hooks/useCache'
import useDebounce from 'hooks/useDebounce'
import Header from 'components/Header'
import Searchbar from 'components/Searchbar'
import RecommendedKeyword from 'components/RecommendedKeyword'

const App = () => {
  const [query, setQuery] = useState('')
  const debounceVal = useDebounce(query)

  const { data, isLoading, status } = useCache(debounceVal)
  return (
    <Container>
      <Header />
      <Searchbar setQuery={setQuery} />
      <RecommendedKeyword status={status} isLoading={isLoading} data={data} query={debounceVal} />
    </Container>
  )
}

export default App

const Container = styled.div`
  margin: 0 auto;
  width: 600px;
  padding: 30px;
  background-color: #d0e8fd;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`
