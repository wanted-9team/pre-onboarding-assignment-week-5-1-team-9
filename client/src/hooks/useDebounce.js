import { useEffect, useState } from 'react'

function useDebounce(value, delay = 800) {
  const [debounceVal, setDebounceVal] = useState(value)
  const [currentIndex, setCurrentIndex] = useState(-1)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value)
      setCurrentIndex(-1)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay, setCurrentIndex])

  return { debounceVal, currentIndex, setCurrentIndex }
}

export default useDebounce
