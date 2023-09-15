let myFavorites = []

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character)
    res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    // myFavorites.splice(id - 1, 1)
    myFavorites = myFavorites.filter(char => char.id !== Number(id))
    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}
