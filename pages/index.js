
import CategoryList from '@/components/CategoryList'
import { client } from '@/libs/client'
import BlogList from '@/components/BlogList'
import { Pagination } from '@/components/Pagination'


export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: { offset: 0, limit: 2 }
  })
  const categoryData = await client.get({
    endpoint: 'categories'
  })

  return{
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: categoryData.contents,
    }
  }
}

export default function Home({blog, category, totalCount}) {
  return (
    <div className="flex justify-center">
      <main className="max-w-5xl">
        <CategoryList category={category} />
        <BlogList blog={blog} />
        <Pagination totalCount={totalCount} />
      </main>
    </div>
  )
}
