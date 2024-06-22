import express from 'express';

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({ message: "Hello Students" })
});

//CRUD functionality

//C - create movies
app.post('/movies', () => {

})

//R - Read movies
app.get('/movies', () => {

})

//U - Update movies
app.put('/movies/:id', () => {

})

//D - Delete movies
app.delete('/movies/:id', () => {

})


app.listen(PORT, () => {
    console.log(`the server is running at http://localhost:${PORT}`)
})

//DRY Principle- Don't Repeat Yourself
//KISS Principle- Keep it Simple, Stupid