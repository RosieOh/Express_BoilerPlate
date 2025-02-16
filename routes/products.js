const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController"); // ✅ 컨트롤러 가져오기

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);

module.exports = router;
