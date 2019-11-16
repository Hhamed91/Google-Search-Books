const router = require("express").Router();
const booksController = require ("../../controller/BooksController")


// routes api/books
router.route("/")
.get(booksController.findAll)
.post(booksController.create);


// books with ids
router.route("/:id")
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove);

module.exports = router;