import client from "../../helpers/sanity";
import { PortableText } from "@portabletext/react";
import { parseISO, format } from "date-fns";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Container from "../../components/ui/Container";
import Navbar from "../../components/ui/Navbar";
import { useEffect } from "react";
import { Slug } from "@sanity/types";

const builder = imageUrlBuilder(client);

interface Params {
  slug: {
    current: string;
  };
}

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

const ImageComponent = ({ value }: any) => {
  const imageProps: any = useNextSanityImage(client, value);

  return (
    <Image
      {...imageProps}
      alt={value.alt}
      style={{ width: "100%", height: "auto", borderRadius: "5px" }} // layout="responsive" prior to Next 13.0.0
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
};

export default function Post({ post }: { post: any }) {
  const mainImageProps: any = useNextSanityImage(client, post.mainImage);

  const meta = {
    title: post.title,
    description: post.excerpt,
    image: builder.image(post.mainImage).url(),
    type: "article",
    date: post.publishedAt,
  };

  return (
    <>
      <Navbar />
      <Container customMeta={meta}>
        <article className="prose prose-red prose-invert prose-lg lg:prose-xl mx-auto max-w-prose lg:max-w-prose-xl my-40 px-4 lg:px-0">
          <Image
            {...mainImageProps}
            alt={post.title + "banner"}
            style={{ width: "100%", height: "auto", borderRadius: "5px" }} // layout="responsive" prior to Next 13.0.0
            sizes="(max-width: 800px) 100vw, 800px"
          />

          <div className="text-center mb-10">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd>
                <time className="text-slate-400">
                  {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                </time>
              </dd>
            </dl>
            <h1 className="text-3xl lg:text-4xl font-extrabold">
              {post.title}
            </h1>
            <dl>
              <dt className="sr-only">Author</dt>
              <dd className="sr-only text-slate-100 text-md lg:text-lg">
                Luke Vakasisikakala
              </dd>
            </dl>
          </div>
          <PortableText value={post.body} components={components} />
        </article>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const posts = await client.fetch(`*[_type == "blogPost"]`);
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (params: any) => {
  const post = await client.fetch(
    `
  *[_type == "blogPost" && slug.current == $slug][0]
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post: post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};
