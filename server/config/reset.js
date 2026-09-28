import { pool } from './database.js'
import './dotenv.js'
import gameData from '../data/games.js'

const createGamesTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS games;

        CREATE TABLE IF NOT EXISTS games (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            minPlayers INT NOT NULL,
            maxPlayers INT NOT NULL,
            playingTime VARCHAR(50) NOT NULL,
            minAge INT NOT NULL,
            complexity DECIMAL(3,2) NOT NULL,
            image VARCHAR(255) NOT NULL,
            mechanics VARCHAR(100)[] NOT NULL,
            shortDescription TEXT NOT NULL,
            description TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `
    try {
        await pool.query(createTableQuery);
        console.log('🎉 games table created successfully')
    } catch (error) {
        console.error('⚠️ error creating games table', error)
    }
}

const seedGamesTable = async () => {
    await createGamesTable()

    gameData.forEach((game) => {
        const insertQuery = {
            text: 'INSERT INTO games (name, minPlayers, maxPlayers, playingTime, minAge, complexity, image, mechanics, shortDescription, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
        }
        const values = [
            game.name,
            game.minPlayers,
            game.maxPlayers,
            game.playingTime,
            game.minAge,
            game.complexity,
            game.image,
            game.mechanics,
            game.shortDescription,
            game.description,
            game.submittedBy,
            game.submittedOn
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting game', err)
                return
            }
            console.log(`✅ ${game.name} added successfully`)
        })
    })
}

seedGamesTable()