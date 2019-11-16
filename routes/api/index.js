const router = require("express").Router();
const BookRoutes = require("./books");

//book routes
router.use("/books", BookRoutes);

module.exports = router;
