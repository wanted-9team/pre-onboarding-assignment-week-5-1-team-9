import React from 'react'
import styled from 'styled-components'

function NoResults() {
  return <NoResultsContainer>검색어 없음</NoResultsContainer>
}

export default NoResults

const NoResultsContainer = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
  text-align: center;
`
