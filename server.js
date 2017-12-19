const path = require('path')
const express = require('express')
const app = express();

const indexPath = path.join(__dirname, './index.html')
const publicPath = express.static(path.join(__dirname, './public'))

app.use('/', publicPath)

app.get('/', function (req, res) { res.sendFile(indexPath) });
const port = (process.env.PORT || 2244);

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
