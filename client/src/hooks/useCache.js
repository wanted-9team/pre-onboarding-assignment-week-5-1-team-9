import { useReducer, useRef, useEffect } from 'react'
import { getSickDetail } from 'api/searchAPI'

export const useCache = query => {
  const cacheApi = useRef({})

  const initialState = {
    status: 'idle',
    data: [],
    error: null,
    isLoading: false,
  }

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'RESET':
        return { ...initialState, status: 'Reset', data: [] }
      case 'NORESULTS':
        return { ...initialState, status: 'NoResults', data: [], isLoading: false }
      case 'RENDERING':
        return { ...initialState, status: 'Rendering', data: [], isLoading: true }
      case 'RENDERED':
        return { ...initialState, status: 'Rendered', data: action.payload, isLoading: false }
      case 'ERROR':
        return { ...initialState, status: 'Error', error: action.payload, isLoading: false }
      default:
        return state
    }
  }, initialState)

  useEffect(() => {
    let cancelReq = false
    if (!query || !query.trim()) {
      dispatch({ type: 'RESET' })
      return
    }

    const getData = async () => {
      dispatch({ type: 'RENDERING' })
      if (cacheApi.current[query]) {
        const data = cacheApi.current[query]
        dispatch({ type: 'RENDERED', payload: data })
      } else {
        try {
          const res = await getSickDetail(query)
          const data = await res.data
          console.info('calling api')
          if (data.length === 0 || cancelReq) {
            dispatch({ type: 'NORESULTS' })
            return
          }
          cacheApi.current[query] = data
          dispatch({ type: 'RENDERED', payload: data })
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
