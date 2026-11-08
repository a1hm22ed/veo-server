const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const GEMINI_KEY = "حط_مفتاحك_هنا";
app.post('/make-video', async (req, res) => {
  const prompt = req.body.prompt;
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: `حول الفكرة دي لسيناريو فيديو 8 ثواني بالمصري: ${prompt}` }] }] })
  });
  const data = await response.json();
  res.json(data);
});
app.get('/', (req,res) => res.send('السيرفر شغال'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("شغال"));
