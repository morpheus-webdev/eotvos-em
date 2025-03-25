import { defineConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import 'dotenv/config'
import express, { json, Request, Response } from 'express'
import mongoose, { Schema } from 'mongoose';

const app = express();
app.use(json());

const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODBPASSWORD}@animals.thgcw.mongodb.net/game-db?retryWrites=true&w=majority&appName=animals`;
async function connectToDb() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  catch(e){
    console.error(e)
  }
}
await connectToDb();

const gameSchema = new Schema({
  id: String,
  title: String,
  releaseDate: Date,
  genre: String,
  score: Number,
  lowestPrice: Number,
  img: String
})

if(mongoose.modelNames().includes('games')){
  mongoose.deleteModel('games')
}
const GameModel = mongoose.model('games', gameSchema);

async function getGames(){
  let allGames = await GameModel.find({});
  return allGames;
}

app.get('/api/games', async (req: Request, res: Response) => {
  let allGames = await getGames();
  res.status(200).send(allGames)
})

app.post('/api/games', async (req: Request, res: Response) => {
  const newGame = req.body;
  try {
    const gamePeldany = new GameModel(newGame);
    await gamePeldany.save();
    res.status(201).send({message: 'New game is created in the DB'})
  }
  catch(e){
    console.error(e);
    res.status(500).send({message: 'Upload of the new game was unsuccessful'})
  }
})

function expressPlugin() {
  return {
    name: "express-plugin",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), expressPlugin()],
  server: {
    proxy: {
      "/api": "http://localhost:5173/", // Ensure Vite dev server routes requests properly
    },
  },
})