import React from 'react'
import Highlights from './Highlights'

function RecommendedKeyword({ data, query }) {
  return (
    <div>
      {data.map((item, index) => (
        <li key={index}>
          <Highlights query={query} total={item.sickNm} />
        </li>
      ))}
    </div>
  )
}

export default RecommendedKeyword
