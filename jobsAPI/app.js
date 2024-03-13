import dotenv from 'dotenv'
import expreessAsyncErrors from 'express-async-errors'
import express from 'express'
import authenticateUser from './middleware/authentication.js'

// connectDB
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/auth.js'
import jobsRouter from './routes/jobs.js'


// error handler
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

const app = express();
dotenv.config()
app.use(express.json());
// extra packages

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
