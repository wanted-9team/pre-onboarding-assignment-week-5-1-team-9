import React, { useState, useEffect, useCallback } from 'react'
import { getSearchApi } from 'api'

const useDebounce = delay => {
  const [searchResult, setSearchResult] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchSearchApi = useCallback(async () => {
    setLoading(true)
    try {
      const response = await getSearchApi(searchWord)
      setSearchResult(response)
    } catch (err) {
      throw new Error(err)
    } finally {
      setLoading(false)
    }
  }, [setSearchResult, searchWord])

  useEffect(() => {
    if (!searchWord) return
    const handler = setTimeout(() => {
      fetchSearchApi()
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [delay, searchWord, fetchSearchApi])

  return { searchResult, searchWord, setSearchWord, loading }
}

export default useDebounce
