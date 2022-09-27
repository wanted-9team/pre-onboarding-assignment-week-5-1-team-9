import React from 'react'

const SearchResults = ({ searchResult }) => {
  return (
    <div>
      {searchResult.map(data => (
        <div key={data.sickCd}>{data.sickNm}</div>
      ))}
    </div>
  )
}

export default SearchResults
