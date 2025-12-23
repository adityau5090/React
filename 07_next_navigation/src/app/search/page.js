"use client"

import { useSearchParams } from 'next/navigation'
import React from 'react'

const Search = () => {
    const searchParams = useSearchParams()
    // console.log(searchParams);

    const query = searchParams.get("query");
    const color = searchParams.get("color")
    const hook = searchParams.get("h")

    // http://localhost:3000/search?query=search&h=searchParams&color=black

    const allParams = Array.from(searchParams.entries())
    console.log(allParams)
  return (
    <div>
      Search Params Page
      <h2>Query : {query}</h2>
      <h2>Color : {color}</h2>
      <h2>Hook : {hook}</h2>
    </div>
  )
}

export default Search
