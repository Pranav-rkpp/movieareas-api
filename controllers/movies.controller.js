import { response } from "express";
import Movie from "../models/movie.model.js";

export const MovieIndex = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

export const MovieDetail = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie == null) {
            return res.status(404).json({ message: "Cannot find movie" })
        }
        else {
            res.json(movie)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
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

export const MovieUpdate = async (req, res) => {

    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc
            },
            {
                new: true,
            }
        );
        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

    //Validate the user input
    // if (req.body.title != null) {
    //     res.movie.title = req.body.title;
    // }
    // if (req.body.desc != null) {
    //     res.movie.desc = req.body.desc;
    // }
    // try {
    //     const updatedMovie = await res.movie.save()
    //     res.json(updatedMovie)
    // } catch (err) {
    //     res.status(400).json({ message: err.message })
    // }
};

export const MovieDelete = async (req, res) => {
    const MovieId = req.params.id;
    try {
        await Movie.deleteOne({ _id: MovieId });
        res.json({ message: "Movie Deleted!" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

