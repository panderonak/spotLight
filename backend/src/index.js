import dotenv from 'dotenv';
import connectDB from './db/db.js';
dotenv.config({
  path: './env',
});

connectDB()
  .then(() => {
    app.on('error', (error) => {
      console.log('An error occurred:', error.message);
      console.error('Stack trace:', error.stack);
    });
    app.listen(process.env.PORT || 8000, () =>
      console.log(`Server is running at port ${process.env.PORT || 8000}`)
    );
  })
  .catch((error) => {
    console.log(`MONGODB CONNECTION FAILED! ${error}`);
  });
