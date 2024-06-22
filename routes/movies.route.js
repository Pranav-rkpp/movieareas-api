import express from 'express'

const router = express.Router()

//CRUD functionality

//R - Read movies
router.get('/', (req, res) => {
    res.send("Get all movie lists")
})

//C - create movies
router.post('/', (req, res) => {
    res.send("Create a movie")
})

//U - Update movies
router.put('/:id', (req, res) => {
    res.send("Update a movie")
})

//D - Delete movies
router.delete('/:id', (req, res) => {
    res.send("Delete a movie")
})

export default router;