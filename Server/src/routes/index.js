const express = require("express");
const router = express.Router();
const getCharById = require('../controllers/getCharById.js')
const { postFav, deleteFav } = require('../controllers/handleFavorites.js')
const postUser = require('../controllers/postUser.js')

router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;