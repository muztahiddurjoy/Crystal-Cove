import express from 'express'
const app = express()

app.get('/',async (req, res) => {
    res.send('Hello World!')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})