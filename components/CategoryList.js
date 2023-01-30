import Link from 'next/link'
import React from 'react'

function CategoryList({category}) {
  return (
    <ul>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
  )
}

export default CategoryList