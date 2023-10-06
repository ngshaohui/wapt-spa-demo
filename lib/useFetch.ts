import { useCallback, useEffect, useState } from 'react'

function useFetch<Type>(url?: RequestInfo, options?: RequestInit) {
  const [data, setData] = useState<Type | null>(null)
  const [requestInfo, setRequestInfo] = useState<RequestInfo | undefined>(url)
  const [requestInit, setRequestInit] = useState<RequestInit | undefined>(options)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = useCallback(
    async function () {
      if (requestInfo === undefined) {
        return
      }
      setIsLoading(true)
      setError(null) // clear previous errors
      try {
        const res = await fetch(requestInfo, requestInit)
        const json = await res.json()
        setData(json)
      } catch (error) {
        if (error instanceof Error) {
          // can consider setting data as null here
          setError(error)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [requestInfo, requestInit],
  )

  useEffect(() => {
    fetchData()
  }, [fetchData])

  function setNewArgs(newUrl?: RequestInfo, newOptions?: RequestInit) {
    // note: after calling setNewArgs there is no need to call reFetch
    // fetchData will be triggered automatically with the useEffect hook
    if (newUrl !== undefined) {
      setRequestInfo(newUrl)
    }
    if (newOptions !== undefined) {
      setRequestInit(newOptions)
    }
  }

  return { data, error, isLoading, setNewArgs, reFetch: fetchData }
}

export default useFetch
