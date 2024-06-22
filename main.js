import express from 'express';
import movieRoutes from './routes/movies.route.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 6969;


//Connect MongoDB
connectDB();

app.get('/', (req, res) => {
    res.json({ message: "Hello Students!!" })
});

//CRUD functionality
//client -- middlewares -- server
app.use('/movies', movieRoutes)

app.listen(PORT, () => {
    console.log(`the server is running at http://localhost:${PORT}`)
})

//DRY Principle- Don't Repeat Yourself
//KISS Principle- Keep it Simple, Stupid