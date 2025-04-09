/**
 * Application entry point
 */
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`User microservice running at http://localhost: ${PORT}`);
});
