import Image from "next/image";
import Link from "next/link";
import client from "../helpers/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { useEffect } from "react";

function PostCard({ title, date, description, slug, image }) {
  const imageProps = useNextSanityImage(client, image);

  return (
    <Link href={`/blog/${slug}`} className="my-4 py-4 glass-morph-1 rounded-md px-4">
      <Image
        {...imageProps}
        alt={title + " banner"}
        style={{ width: "100%", height: "auto", borderRadius: "5px" }} // layout="responsive" prior to Next 13.0.0
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <h2 className="font-bold text-lg mt-4 line-clamp-2">{title}</h2>
      <time className="text-gray-400">{date}</time>

      <Link href={`/blog/${slug}`} className="text-blue-500 mt-4 mb-2 block">
        Read more
      </Link>
    </Link>
  );
}

export default PostCard;
