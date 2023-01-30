import BlogList from "@/components/BlogList";
import { client } from "@/libs/client";

export default function CategoryId({blog}) {
    if(blog.length === 0) {
        return <div>ブログコンテンツはありません。</div>
    }
    return (
        <div>
            <BlogList blog={blog} />
        </div>

    )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "categories" });
  
    const paths = data.contents.map((content) => `/category/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}` } });
  
    return {
      props: {
        blog: data.contents,
      },
    };
};