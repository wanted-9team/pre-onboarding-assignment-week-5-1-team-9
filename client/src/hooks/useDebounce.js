import { useEffect, useState } from 'react'

function useDebounce(value, setCurrentIndex, delay = 800) {
  const [debounceVal, setDebounceVal] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value)
      setCurrentIndex(-1)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay, setCurrentIndex])

  return { debounceVal }
}

export default useDebounce
