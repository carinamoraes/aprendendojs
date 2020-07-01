const express = require('express');
const cors = require('cores');
const routes = require('./routes'); /*importando rotas de routes.js; ./ referencia que routes.js
                                     está na mesma pasta que o index.js */

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);