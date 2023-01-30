import { createClient } from "next-sanity";

const client = createClient({
  projectId: "oq7ztcx9",
  dataset: "production",
  apiVersion: "2023-01-10",
  useCdn: false,
});

export default client;
