import connectDB from './db/connect.js'
import express from "express";
import tasks from "./routes/tasks.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
// app.use(express.static('./public'))

app.get('/hello', (req, res) => {
  res.send("task management app")
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listen on port ${port}`))
  } catch (error) {
    console.log(error);
  }
}

start()