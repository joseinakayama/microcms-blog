
import { client } from '@/libs/client'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog'
  })
  const categoryData = await client.get({
    endpoint: 'categories'
  })

  return{
    props: {
      blog: data.contents,
      category: categoryData.contents,
    }
  }
}

export default function Home({blog, category}) {
  return (
    <div className={styles.container}>
      <ul>
        {category.map((category) => (
          <li>
            <Link href={`/category/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
            {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
