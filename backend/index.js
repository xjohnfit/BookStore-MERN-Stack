import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing req body
app.use(express.json());

//Cors allow custom origins
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN Stack');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`APP is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });