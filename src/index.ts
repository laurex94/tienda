import express from 'express';
import config from './config/index';
const app = express()

app.use(express.json()) // for parsing application/json 

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))