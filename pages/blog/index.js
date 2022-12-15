import getPosts from "../../helpers/getPosts";
import PostCard from "../../components/PostCard";
import BlogLayout from "../../components/layouts/BlogLayout";

export default function Blog({ posts }) {
  return (
    <BlogLayout>
      <h1 className="mb-12 font-bold text-3xl">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={`${post.slug}`}
        />
      ))}
    </BlogLayout>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
