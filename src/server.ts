import './database';
const express = require('express');
const app = express();

app.listen(3333, () => console.log("Servidor inicializado"));

app.get('/', (request, response) => {
    return response.json({message: "Hello world"});
});