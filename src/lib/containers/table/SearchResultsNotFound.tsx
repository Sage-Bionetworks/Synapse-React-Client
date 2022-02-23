import React from 'react'
import { ReactComponent as NoSearchResults } from '../../assets/icons/NoSearchResults.svg'

export default function SearchResultsNotFound() {
  return (
    <div className="text-center">
      <NoSearchResults title="no data" />
      <h4>No Matching Results</h4>
      <p>Try checking the spelling or removing filters.</p>
    </div>
  )
}
