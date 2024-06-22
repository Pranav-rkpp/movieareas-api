import express from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller';

const router = express.Router();

//CRUD functionality

//MVC - Model View Controller

//R - Read movies
router.get('/', MovieIndex)

//C - create movies
router.post('/', MovieCreate)

//U - Update movies
router.put('/:id', MovieUpdate)

//D - Delete movies
router.delete('/:id', MovieDelete)

export default router;