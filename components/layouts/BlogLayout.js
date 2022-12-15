import Navbar from "../../components/Navbar";

const BlogLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-prose lg:max-w-prose-xl mt-40 px-4 lg:px-0">
        {children}
      </div>
    </>
  );
};

export default BlogLayout;
