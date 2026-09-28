import { pool } from '../config/database.js'

const getGames = async (req, res) => {
    try {
        const selectQuery = `
            SELECT
                id,
                name,
                minplayers AS "minPlayers",
                maxplayers AS "maxPlayers",
                playingtime AS "playingTime",
                minage AS "minAge",
                complexity,
                image,
                mechanics,
                shortdescription AS "shortDescription",
                description,
                submittedby AS "submittedBy",
                submittedon AS "submittedOn"
            FROM games
            ORDER BY id ASC
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
}

export default {
    getGames
}