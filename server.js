const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Veo server is running ✅');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Server is ready' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

module.exports = app;
