import React from 'react'
import styled from 'styled-components'
import Highlights from './Highlights'
import NoResults from './NoResults'
import Spinner from './Spinner'
import { AiOutlineSearch } from 'react-icons/ai'
import { css } from 'styled-components'

function RecommendedKeyword({ data, query, isLoading, status, currentIndex }) {
  return (
    <>
      {query && (
        <RecommendedContainer>
          <RecommendedHeader>추천 검색어</RecommendedHeader>
          <RecommendedKeywordUL>
            {isLoading ? (
              <Spinner />
            ) : (
              data.map((item, index) => (
                <RecommendedLI key={index} selected={index === currentIndex}>
                  <AiOutlineSearch />
                  <Highlights query={query} total={item.sickNm} />
                </RecommendedLI>
              ))
            )}
            {(status === 'NoResults' || status === 'Reset') && <NoResults />}
          </RecommendedKeywordUL>
        </RecommendedContainer>
      )}
    </>
  )
}

export default React.memo(RecommendedKeyword)

const RecommendedKeywordUL = styled.ul`
  list-style: none;
  & Spinner {
    margin: 0 auto;
  }
`

const RecommendedLI = styled.li`
  list-style: none;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  line-height: 20px;
  ${({ selected }) => {
    if (selected) {
      return css`
        background-color: rgb(220, 220, 220);
      `
    }
  }}
`

const RecommendedHeader = styled.div`
  margin: 5px 0 0 5px;
  font-weight: 300;
  font-size: 12px;
`

const RecommendedContainer = styled.div`
  width: 75%;
  background-color: white;
  border-radius: 10px;
`
