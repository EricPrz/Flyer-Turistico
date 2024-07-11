const express = require('express')
const app = express()

const url = process.cwd()
console.log(url)

app.get('/:url', function (req, res) {
    const dir = req.params.url
    console.log(dir)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.sendFile(url + "/images/" + dir)
})

app.listen(3000, '192.168.1.36')