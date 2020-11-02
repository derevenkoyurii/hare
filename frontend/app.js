const path = require('path');
const express = require('express');
const compression = require('compression');

const CONTEXT = `/${process.env.CONTEXT || 'frontend'}`;
const PORT = process.env.PORT || 3002;

const app = express();

app.use(compression());
app.use(CONTEXT, express.static(path.resolve(__dirname, 'dist/frontend')));
app.use('/', express.static(path.resolve(__dirname, 'dist/frontend')));

app.listen(PORT, () =>
  console.log(`App running on http://localhost:${PORT}${CONTEXT}`)
);
