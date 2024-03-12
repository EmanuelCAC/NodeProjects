import dotenv from 'dotenv'
dotenv.config();
import expressAsyncErrors from 'express-async-errors'

import express from 'express';
const app = express();

import mainRouter from './routes/main.js'
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
