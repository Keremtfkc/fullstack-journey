const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());           // React'ten gelen isteğe izin
app.use(express.json());   // JSON body okuyabilmek için

app.get("/health", (req, res) => {
  res.json({ ok: true, message: "API çalışıyor 🚀" });
});

app.get("/api/quote", (req, res) => {
  const quotes = [
    "Bug fixlemek, zaman yolculuğudur: geçmişteki seni yakalarsın.",
    "Kodu değil, alışkanlığı büyüt.",
    "Bugün küçük commit, yarın büyük rahatlık.",
  ];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: pick, at: new Date().toISOString() });
});

app.listen(3000, () => console.log("API running: http://localhost:3000"));
