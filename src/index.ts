import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
  return response.json({message: "Backend em TS"})
})

app.listen(3333)