import React from 'react'
import styled from 'styled-components'

const highlightText = (text, query) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'))

    return (
      <>
        {parts.map((part, idx) =>
          part.toLowerCase() === query.toLowerCase() ? <BoldText key={idx}>{part}</BoldText> : part,
        )}
      </>
    )
  }
  return text
}

const SearchResults = ({ searchResult, searchWord, loading }) => {
  return (
    <ResultUl>
      {searchResult.map(data => (
        <ResultLi key={data.sickCd}>{highlightText(data.sickNm, searchWord)}</ResultLi>
      ))}
    </ResultUl>
  )
}

export default SearchResults

const ResultUl = styled.ul`
  width: 100%;
  list-style: none;
`

const ResultLi = styled.li`
  font-size: 1.2rem;
`

const BoldText = styled.span`
  font-weight: bold;
`
