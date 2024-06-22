import { response } from "express";

export const MovieIndex = (req, res) => {
    res.send("Get all movie lists");
};

export const MovieCreate = (req, res) => {
    //Create the movie info.
    //Structure - id, title, desc
    console.log(req.body);

    return res.json(req.body);  //Need to add data understanding middleware app.use(express.json())
};

export const MovieUpdate = (req, res) => {
    res.send("Update a movie");
};

export const MovieDelete = (req, res) => {
    res.send("Delete a movie");
};

