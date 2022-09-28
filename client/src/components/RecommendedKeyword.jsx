import React from 'react'
import Highlights from './Highlights'
import NoResults from './NoResults'
import styled, { keyframes } from 'styled-components'

function RecommendedKeyword({ data, query, isLoading, status }) {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        data.map((item, index) => (
          <li key={index}>
            <Highlights query={query} total={item.sickNm} />
          </li>
        ))
      )}
      {status === 'NoResults' && <NoResults />}
    </div>
  )
}

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`

export default React.memo(RecommendedKeyword)
