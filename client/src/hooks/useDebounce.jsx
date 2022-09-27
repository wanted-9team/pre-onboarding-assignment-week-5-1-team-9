import React, { useState, useEffect } from 'react'
import { getSearchApi } from 'api'

const useDebounce = delay => {
  const [searchResult, setSearchResult] = useState([])
  const [search, setSearch] = useState('')

  const fetchApi = async () => {
    try {
      const response = await getSearchApi()
      setSearchResult(response)
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    if (!search) return
    const handler = setTimeout(() => {
      fetchApi()
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [delay, search])

  return { searchResult, search, setSearch }
}

export default useDebounce
