import React, { useState, useRef, useEffect } from 'react'
const ARROW_DOWN = 'ArrowDown'
const ARROW_UP = 'ArrowUp'

const useKeydown = searchResult => {
  const [listIndex, setListIndex] = useState(0)
  const liRef = useRef(null)

  const handleKeyArrow = ({ key }) => {
    if (searchResult.length > 0)
      switch (key) {
        case ARROW_DOWN:
          setListIndex(listIndex + 1)
          if (liRef.current?.childElementCount === listIndex + 1) setListIndex(0)
          return
        case ARROW_UP:
          setListIndex(listIndex - 1)
          if (listIndex <= 0) {
            setListIndex(0)
          }
          return
        default:
          return
      }
  }
  useEffect(() => {
    console.log(listIndex)
  }, [listIndex])
  return { listIndex, liRef, handleKeyArrow }
}

export default useKeydown
