import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import gameData from '../data/games.js'
import GamesController from '../controllers/games.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// GET /games - return all games
router.get('/', GamesController.getGames)

// GET /games/:gameId - return a specific game by ID
router.get('/:gameId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/game.html'))
})

export default router