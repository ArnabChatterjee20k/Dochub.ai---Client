import { server } from "../data/Constants";
export default async function fetchPrompt(prompt) {
  const response = await fetch(server + "/blog");

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const err = await response.text();
    throw Error(err)
  }
}
