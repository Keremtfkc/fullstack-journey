import { useEffect, useState } from "react";

export default function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/quote")
      .then((r) => r.json())
      .then((data) => setQuote(data.quote))
      .catch(() => setQuote("API'ye bağlanamadım 😅"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Full Stack Journey</h1>
      <p>React ➜ Node API bağlantısı test</p>

      {loading ? <p>Yükleniyor...</p> : <pre>{quote}</pre>}

      <button
        onClick={() => window.location.reload()}
        style={{ marginTop: 12, padding: "8px 12px" }}
      >
        Yeni söz getir
      </button>
    </div>
  );
}
