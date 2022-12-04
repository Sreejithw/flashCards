import { config } from "dotenv";
config();

import express,{ Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import IndexDeck from './models/IndexDeck';

const PORT = 5000;
const app = express();

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
    const decks = await IndexDeck.find();
    res.json(decks);
})

app.post("/decks", async (req: Request ,res: Response) => {
    const newDeck = new IndexDeck({    
        title: req.body.title
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
})


mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
});

