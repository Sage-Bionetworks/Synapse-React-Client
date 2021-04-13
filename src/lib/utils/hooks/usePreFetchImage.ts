import { useEffect, useState } from 'react'

/**
 * Custom hook for retrieving a resource and assigning it a localhost URL. This is useful for
 * fetching resources from URLs that may expire before the resource renders.
 *
 * When the object is no longer needed, you can release it by calling `releaseURL`. For more info,
 * see docs on `createObjectURL` (https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
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

  useEffect(() => {
    return () => {
      if (resourceURL) {
        URL.revokeObjectURL(resourceURL)
      }
    }
  }, [resourceURL])

  return resourceURL
}
