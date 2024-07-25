const express = require('express')
const app = express();
const port = 8080;

app.use(express.static('C:/Users/Andrey-SB/Desktop/portfolio'));

app.get('/', (res, req) => {
    res.sendFile('index.html', {root: 'C:/Users/Andrey-SB/Desktop/portfolio'})
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});