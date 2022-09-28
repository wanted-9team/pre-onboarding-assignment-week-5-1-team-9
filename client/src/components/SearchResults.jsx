import React from 'react'
import styled from 'styled-components'
import { highlightText } from 'utils/highligtText'

const SearchResults = ({ searchResult, searchWord, listIndex, liRef }) => {
  return (
    <ResultUl ref={liRef}>
      {searchWord && (
        <>
          {searchResult.length > 0 ? (
            searchResult.map((data, idx) => (
              <ResultLi key={data.sickCd} isFocus={listIndex === idx + 1}>
                {highlightText(data.sickNm, searchWord)}
              </ResultLi>
            ))
          ) : (
            <ResultLi>검색 결과가 없습니다.</ResultLi>
          )}
        </>
      )}
    </ResultUl>
  )
}

export default SearchResults

const ResultUl = styled.ul`
  width: 100%;
  list-style: none;
  padding: 10px 0;
  margin: 0;
`

const ResultLi = styled.li`
  font-size: 1.2rem;
  padding: 5px 0;
  background-color: ${({ isFocus }) => (isFocus ? '#c2d2ff' : 'none')};
`
