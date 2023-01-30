import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import client from "../../helpers/sanity";
import BlogLayout from "../../components/layouts/BlogLayout";
import { parseISO, format } from "date-fns";

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
          <dl>
            <dt className="sr-only">Author</dt>
            <dd className=" text-slate-100 text-md lg:text-lg">
              Luke Vakasisikakala
            </dd>
          </dl>
        </div>
        <div className="prose prose-invert prose-lg lg:prose-xl">
          <MDXRemote {...content} />
        </div>
      </article>
    </BlogLayout>
  );
}

export const getStaticPaths = async () => {
  const posts = await client.fetch(`*[_type == "Blog"]`);
  const paths = posts.map((post) => ({ params: { slug: post.slug.current } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await client.fetch(
    `
  *[_type == "Blog" && slug.current == $slug][0]
  `,
    {
      slug: params.slug,
    }
  );

  const mdxSource = await serialize(post.content);

  return {
    props: {
      data: {
        date: format(parseISO(post.publishedAt), "MMMM dd, yyyy"),
        title: post.title,
      },
      content: mdxSource,
    },
  };
};
