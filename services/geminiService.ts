export async function generateGeminiResponse(prompt: string) {
  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Gemini response");
  }

  return response.json();
}
