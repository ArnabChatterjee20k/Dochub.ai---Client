import { server } from "../data/Constants";
export default async function fetchSingleBlog(id) {
  if(!id) return 
  const response = await fetch(`${server}/blog/${id}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const err = await response.text();
    throw Error(err)
  }
}
