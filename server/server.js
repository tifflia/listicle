import express from 'express'
import gamesRouter from './routes/games.js'

const app = express();

// middleware function to serve static files from scripts directory
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/games', gamesRouter);

// root URL of server to see if server is running
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})