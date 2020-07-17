const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/RollingNews2.png', (req, res) => res.sendFile(path.join(__dirname, 'RollingNews.png')));
app.all('*', function(req, res) {
  res.sendFile(path.join(__dirname, './redirect.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`))
