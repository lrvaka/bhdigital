import Link from "next/link";

function PostCard({ title, date, description, slug }) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      <time className="text-gray-400">{date}</time>

      <Link
        href="/blog/[slug]"
        className="text-blue-500 mt-4 mb-2 block"
        as={`/blog/${slug}`}
      >
        Read more
      </Link>
    </div>
  );
}

export default PostCard;
