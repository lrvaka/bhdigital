import PostCard from "../../components/PostCard";
import BlogLayout from "../../components/layouts/BlogLayout";
import client from "../../helpers/sanity";
import { parseISO, format } from "date-fns";

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <BlogLayout>
      <h1 className="mb-2 font-bold text-5xl">All Posts</h1>
      <div class="relative max-w-lg">
        <input
          aria-label="Search articles"
          type="text"
          placeholder="Search articles"
          className="block w-full rounded-md border focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-800 text-gray-100"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      {posts.map((post) => (
        <PostCard
          key={post.slug.current}
          title={post.title}
          date={format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
          slug={post.slug.current}
        />
      ))}
    </BlogLayout>
  );
}

export const getStaticProps = async () => {
  const posts = await client.fetch(`*[_type == "Blog"]`);

  return {
    props: {
      posts,
    },
  };
};
