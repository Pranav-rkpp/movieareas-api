import { response } from "express";
import Movie from "../models/movie.model.js";

export const MovieIndex = (req, res) => {
    res.send("Get all movie lists");
};

export const MovieCreate = async (req, res) => {
    //Create the movie info.
    //Structure - id, title, desc
    // console.log(req.body);

    //Validate your data. Never trust user

    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    });

    //Successful or error
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }

    // return res.json(req.body);  //Need to add data understanding middleware app.use(express.json())
};

export const MovieUpdate = (req, res) => {
    res.send("Update a movie");
};

export const MovieDelete = (req, res) => {
    res.send("Delete a movie");
};

