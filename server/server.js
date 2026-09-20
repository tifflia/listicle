import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import gamesRouter from './routes/games.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

// middleware function to serve static files from scripts directory
// index: false leaves '/' to the handler below instead of serving index.html
app.use(express.static('./public', { index: false }))
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/games', gamesRouter);

// root URL of server to see if server is running
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle</h1>')
})

// nothing above matched this URL, so it really doesn't exist
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})