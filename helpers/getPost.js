import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPost = (slug) => {
  const fileContents = fs.readFileSync(path.join(`blog/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
