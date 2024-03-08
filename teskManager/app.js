import connectDB from './db/connect.js'
import express from "express";
import tasks from "./routes/tasks.js"
import dotenv from "dotenv"
import notFound from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)

app.use(notFound)

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listen on port ${port}`))
  } catch (error) {
    console.log(error);
  }
}

start()