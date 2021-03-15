import React from 'react'
import NoSearchResults from '../../assets/icons/NoSearchResults.svg'

export default function SearchResultsNotFound() {
  return <div className="text-center">
    <img src={NoSearchResults} alt="no data"></img>
    <h4>No Matching Results</h4>
    <p>
      Try checking the spelling or removing filters.
    </p>
  </div>
}
