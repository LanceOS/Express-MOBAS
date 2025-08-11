import express, { json, urlencoded } from 'express'
const app = express()
app.use(urlencoded({ extended: true }));
app.use(json());
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})