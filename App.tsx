import { useState } from "react";
import { generateGeminiResponse } from "./services/geminiService";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setResponse("");
    try {
      const data = await generateGeminiResponse(prompt);
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "No response received.";
      setResponse(text);
    } catch {
      setResponse("Error communicating with Gemini.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Finance Companion</h1>

      <textarea
        rows={6}
        style={{ width: "100%" }}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask a finance-related question..."
      />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>

      <pre style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
        {response}
      </pre>
    </div>
  );
}
