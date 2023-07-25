import client from "../helpers/sanity";

export default function SiteMap() {
  return <div>Loading</div>;
}

export async function getServerSideProps({ res }) {
  const posts = await client.fetch(`*[_type == "blogPost"]`);

  const baseUrl = `https://www.blockhead.digital/blog`;
  const defaultUrls = [
    "https://www.blockhead.digital",
    "https://www.blockhead.digital/blog",
  ].map((page) => {
    return `
    <loc>${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  `;
  });

  const postItems = posts.map((page) => {
    const slug = page.slug.current === "/" ? "/" : `/${page.slug.current}`;
    return `
        <loc>${baseUrl}${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      `;
  });

  const final = [...defaultUrls, ...postItems];

  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${final
            .map((url) => {
              return `<url>
                        ${url}
                      </url>
                    `;
            })
            .join("")}
      </urlset>
      `;
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
}
