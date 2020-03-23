const express = require('express');

const app = express();

app.get('/', (resquest, response) => {
  return response.json({
      evento: 'Semana OmniStack 11.0',
      aluno: 'Caio Vinícius Gomes'
  });
});

app.listen(3333);