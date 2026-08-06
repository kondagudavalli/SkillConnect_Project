const express = require("express");

const router = express.Router();

const {
    getUsers,
    getUserByName,
    createUser,
    addSkill,
    connectUsers,
    getRecommendations
} = require("../controllers/userController");

router.get("/users", getUsers);

router.get("/users/:name", getUserByName);

router.post("/users", createUser);

router.post("/users/skill", addSkill);

router.post("/users/connect", connectUsers);

router.get("/recommendations/:name", getRecommendations);

module.exports = router;