const express = require('express')
const app = express()

const url = process.cwd() + '/images/'
const port = process.env.PORT || 3000

app.get('/:url', function (req, res) {
    const dir = req.params.url
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.sendFile(url + dir)
})

app.listen(port)