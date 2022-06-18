const {
    getBooks,
    createBook,
    getBook,
    deleteBook,
    updateBook,
}= require("../controllers/book.controller");



const router = require("express").Router();

router.post("/",createBook);
router.get("/", getBooks);
router.get("/:bookId", getBook);
router.delete("/:bookId",deleteBook);
router.put("/:bookId", updateBook);
module.exports = router;