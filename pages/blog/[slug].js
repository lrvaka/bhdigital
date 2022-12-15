import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import BlogLayout from "../../components/layouts/BlogLayout";

export default function Post({ data, content }) {
  return (
    <BlogLayout>
      <article>
        <div className="text-center mb-10">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd>
              <time className="text-slate-400">{data.date}</time>
            </dd>
          </dl>
          <h1 className="text-3xl lg:text-4xl font-extrabold">{data.title}</h1>
          {/* <dl>
          <dt className="sr-only">Name</dt>
          <dd className=" text-slate-100 text-md lg:text-lg">{data.author}</dd>
        </dl> */}
        </div>
        <div className="prose prose-invert prose-lg lg:prose-xl">
          <MDXRemote {...content} />
        </div>
      </article>
    </BlogLayout>
  );
}

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
