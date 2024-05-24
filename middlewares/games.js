const { readData } = require("../utils/data");

const getAllGames = async (req, res) => {
    const games = await readData("./data/games.json");
    if (!games) {
        res.status(400);
        res.send({
        status: "error",
        message: "Нет игр в базе данных. Добавьте игру."
        });
        return;
    }
    req.games = games;
};
const updateGamesFile = async (req, res, next) => { 
    await writeData("./data/games.json", req. games);
    next(); I
};

module.exports = {
    getAllGames,
}