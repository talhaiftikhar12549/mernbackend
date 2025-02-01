import express from 'express'
import cors from 'cors'

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get('/api', (req, res) => {
  res.send(`I am coming from backend! `)
})

app.post('/api/userRegister', (req, res) => {
  console.log(req.json)
  res.send(`user is sucessfully registered!`)
})

export { app }