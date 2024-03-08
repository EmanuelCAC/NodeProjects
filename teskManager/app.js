import express from "express";
import tasks from "./routes/tasks.js"

const app = express()

app.use(express.json())
// app.use(express.static('./public'))

app.get('/hello', (req, res) => {
  res.send("task management app")
})

app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(port, console.log(`server listen on port ${port}`))