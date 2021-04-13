import { useEffect, useState } from 'react'

/**
 * Custom hook for retrieving a resource and assigning it a localhost URL. This is useful for
 * fetching resources from URLs that may expire before the resource renders.
 * @param preSignedURL
 * @returns a localhost URL referencing the prefetched resource
 */
export default function usePreFetchResource(
  preSignedURL?: string,
): string | undefined {
  const [resourceURL, setResourceURL] = useState<string>()

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const response = await fetch(url)
        const blob = await response.blob()
        setResourceURL(URL.createObjectURL(blob))
      } catch (e) {
        console.error(
          `Failed to fetch object with presigned URL ${url}. See network log for details`,
        )
      }
    }
    if (preSignedURL) {
      getData(preSignedURL)
    }
  }, [preSignedURL])

  // When we no longer need the object, we release it.
  // See https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  useEffect(() => {
    return () => {
      if (resourceURL) {
        URL.revokeObjectURL(resourceURL)
      }
    }
  }, [resourceURL])

  return resourceURL
}
