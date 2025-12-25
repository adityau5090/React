import React from 'react'

export async function generateMetadata({params}) {
    const { slug } = await params;
    const ogImgURL = `http://localhost:3000/api/og?title=${encodeURIComponent(`Blog ${slug}`)} & description= ${encodeURIComponent("This is blog page")}`
    return {
    title: `Blog ${slug}`,
    description: "This is blog page you are visiting",
    openGraph: {
        title: `Blog ${slug}`,
        description: "This is blog page you are visiting",
        images: [ogImgURL],
    }
}
}
const Blog = () => {
  return (
    <div>
      This is blog page
    </div>
  )
}

export default Blog
