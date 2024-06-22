import express from 'express'
import { MovieCreate, MovieDelete, MovieDetail, MovieIndex, MovieUpdate } from '../controllers/movies.controller.js';

const router = express.Router();

//CRUD functionality

//MVC - Model View Controller

//R - Read movies
router.get('/', MovieIndex)

router.get('/:id', MovieDetail)

//C - create movies
router.post('/', MovieCreate)

//U - Update movies
router.put('/:id', MovieUpdate)

//D - Delete movies
router.delete('/:id', MovieDelete)

export default router;