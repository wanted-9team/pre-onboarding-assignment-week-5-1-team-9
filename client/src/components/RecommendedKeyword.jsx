import React from 'react'

function RecommendedKeyword({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <li key={index}>{item.sickNm}</li>
      ))}
    </div>
  )
}

export default RecommendedKeyword
