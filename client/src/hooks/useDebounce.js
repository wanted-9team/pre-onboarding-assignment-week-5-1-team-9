import { useEffect, useState } from 'react'

function useDebounce(value, setCurrentIndex, delay = 800) {
  const [debounceVal, setDebounceVal] = useState('')

  useEffect(() => {
    if (!value) {
      setDebounceVal('')
    }
    const handler = setTimeout(() => {
      if (value) {
        setDebounceVal(value)
        setCurrentIndex(-1)
      }
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay, setCurrentIndex])

  return { debounceVal }
}

export default useDebounce
