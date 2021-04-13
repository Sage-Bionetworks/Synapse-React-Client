import { useEffect, useState } from 'react'

/**
 * Custom hook for retrieving a resource and assigning it a localhost URL. This is useful for
 * fetching resources from URLs that may expire before the resource renders
 * @param preSignedURL
 * @returns a localhost URL referencing the prefetched resource
 */
export default function usePreFetchResource(
  preSignedURL: string,
): string | undefined {
  const [objectURL, setObjectURL] = useState<string>()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(preSignedURL)
        const blob = await response.blob()
        setObjectURL(URL.createObjectURL(blob))
      } catch (e) {
        console.error(
          `Failed to fetch object with presigned URL ${preSignedURL}. See network log for details`,
        )
      }
    }
    getData()
  }, [preSignedURL])

  return objectURL
}
