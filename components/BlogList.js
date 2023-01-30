import Link from 'next/link'
import React from 'react'


function BlogList({blog}) {
  return (
    <ul className='grid grid-cols-2 gap-2.5'>
        {blog.map((blog) => (
          <li key={blog.id} className=''>
            <Link href={`/blog/${blog.id}`}>
            <img src={blog.thumbnail && blog.thumbnail.url} alt="" className='max-h-40' />
            {/* <Image src={blog.thumbnail && blog.thumbnail.url}  width={64} height={64} alt="My avatar" /> */}
            {blog.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default BlogList