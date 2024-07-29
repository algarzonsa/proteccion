const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/fibonacci', (req, res) => {
  const { seed1, seed2, count } = req.query;
  
  const num1 = parseInt(seed1, 10);
  const num2 = parseInt(seed2, 10);
  const n = parseInt(count, 10);
  
  if (isNaN(num1) || isNaN(num2) || isNaN(n)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const fibonacciSeries = [];
  let a = num1, b = num2;
  
  for (let i = 0; i < n; i++) {
    fibonacciSeries.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  res.json(fibonacciSeries);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});