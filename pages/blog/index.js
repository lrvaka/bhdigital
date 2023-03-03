import PostCard from "../../components/PostCard";
import BlogLayout from "../../components/layouts/BlogLayout";
import client from "../../helpers/sanity";
import { parseISO, format } from "date-fns";
import Container from "../../components/ui/Container";
import Navbar from "../../components/ui/Navbar";

export default function Blog({ posts }) {
  const meta = {
    title: "Blog - Blockhead Digital",
    description: "Learn about everything Blockhead Digital and technology",
  };

  return (
    <>
      <Navbar />
      <Container customMeta={meta}>
        <div className="py-32 lg:py-40 max-w-screen-lg mx-auto px-4 lg-px-4">
          <div className="mb-5 lg:mb-10">
            <h1 className="font-bold text-6xl lg:text-8xl uppercase text-rose-500">
              All Posts
            </h1>
            <p className="text-xl lg:text-2xl">
              Check out what&apos;s in Blockhead Digital&apos;s zeitgeist
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <PostCard
                key={post.slug.current}
                title={post.title}
                date={format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                slug={post.slug.current}
                image={post.mainImage}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await client.fetch(`*[_type == "blogPost"]`);

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
