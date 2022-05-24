const hello : String = 'hello world!';
console.log("🚀 ~ file: index.ts ~ line 2 ~ hello", hello);

import express from 'express';

const app : express.Application = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('hello world.');
})

app.listen(PORT, () => {
    console.log(`Listeing on port ${PORT}`);
})
