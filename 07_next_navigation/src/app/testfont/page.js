import React from 'react'
import localFont from "next/font/local"
import { Nunito } from 'next/font/google'

const nunito = Nunito({
    weight: [ "200", "300", "400", "500", "600", "700", "800" ],
    subsets: ['latin'],
})

const myFont = localFont({
    src: "../../font/ShadeBlue.ttf"
})
const TestFont = () => {
  return (
    <div className='container mx-auto my-3'>
      <h2 className={`text-3xl mb-4 ${myFont.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>

      <p className={`${nunito.className} `} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur repellat deleniti harum molestiae nostrum amet voluptas nam tenetur aliquam.</p>
    </div>
  )
}

export default TestFont
