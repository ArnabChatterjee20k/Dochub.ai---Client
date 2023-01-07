import { server } from "../data/Constants";
export default async function fetchPrompt(prompt) {
  const response = await fetch(server+"/bot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const data = await response.json();
    const parsedData = data.bot.trim();
    return parsedData;
  } else {
    const err = await response.text();
    return err;
  }
}
