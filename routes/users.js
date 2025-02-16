const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers); // 모든 유저 조회
router.get("/:id", userController.getUserById); // 특정 유저 조회

module.exports = router;
