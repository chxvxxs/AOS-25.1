const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Express de Matheus Chaves');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
