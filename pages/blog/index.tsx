import PostCard from "../../components/PostCard";
import client from "../../helpers/sanity";
import { parseISO, format } from "date-fns";
import Container from "../../components/ui/Container";
import Navbar from "../../components/ui/Navbar";
import { Slug } from "@sanity/types";

interface ImageMeta {
  blurhash?: string;
  lqip?: string;
  palette?: any; // Replace with the proper type
  exif?: any; // Replace with the proper type
  location?: any; // Replace with the proper type
}

interface Image {
  asset: {
    _ref: string;
  };
  alt?: string;
  metadata?: ImageMeta;
}

interface Block {
  _type: "block";
  children: { _key: string; _type: "span"; marks: string[]; text: string }[];
  markDefs: any[]; // Replace with the proper type if you have a specific type for markDefs
  style: string;
}

interface BlogPost {
  _id: string;
  _type: "blogPost";
  title: string;
  slug: Slug;
  publishedAt: string;
  mainImage: Image;
  excerpt?: string;
  body: Array<Block | Image>;
  author: string; // Replace with an Author type if you have an author schema.
  views?: number;
  likes?: number;
  categories?: string[];
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
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
            <h1 className="font-bold text-6xl lg:text-8xl ">Blog</h1>
            <p className="text-xl lg:text-2xl text-gray-300">
              Check out what&apos;s on Blockhead&apos;s mind 👁️
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
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};
