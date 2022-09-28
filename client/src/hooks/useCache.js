import { useReducer, useRef, useEffect } from 'react'
import { getSickDetail } from 'api/searchAPI'

export const useCache = query => {
  const cacheApi = useRef({})

  const initialState = {
    status: 'idle',
    data: [],
    error: null,
  }

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'RENDERING':
        return { ...initialState, status: 'Rendering' }
      case 'RENDERED':
        return { ...initialState, status: 'Rendered', data: action.payload }
      case 'ERROR':
        return { ...initialState, status: 'Error', error: action.payload }
      default:
        return state
    }
  }, initialState)

  useEffect(() => {
    let cancelReq = false
    if (!query || !query.trim()) return

    const getData = async () => {
      dispatch({ type: 'RENDERING' })
      if (cacheApi.current[query]) {
        const data = cacheApi.current[query]
        dispatch({ type: 'RENDERED', payload: data })
      } else {
        try {
          const res = await getSickDetail(query)
          const data = await res.data
          cacheApi.current[query] = data
          if (cancelReq) return
          dispatch({ type: 'RENDERED', payload: data })
          console.info('calling api')
        } catch (error) {
          if (cancelReq) return
          dispatch({ type: 'ERROR', payload: error.message })
        }
      }
    }

    getData()

    return function cleanReq() {
      cancelReq = true
    }
  }, [query])

  return state
}
