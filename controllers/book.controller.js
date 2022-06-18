const Book = require("../models/book.model");

const getBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json(books);
	} catch (err) {
		res.status(500).json(err);
	}
};
const getBook = async (req, res) => {
	const id = req.params.bookId;
	try {
		const book = await Book.findById(id);
		res.status(200).json(book);
	} catch (err) {
		res.status(500).json(err);
	}
};
const deleteBook = async (req, res) => {
	const id = req.params.bookId;
	try {
		const book = await Book.findByIdAndDelete(id);
		res.status(204).json(book);
	} catch (err) {
		res.status(500).json(err);
	}
};
const updateBook = async (req, res) => {
	const id = req.params.bookId;
	try {
		const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json(book);
	} catch (err) {
		res.status(500).json(err);
	}
};
const createBook = async (req, res) => {
	const newBook = new Book({
		title: req.body.title,
		author: req.body.author,
	});
	try {
		const savedBook = await newBook.save();
		res.status(200).json(savedBook);
	} catch (err) {
		res.status(500).json(err);
	}
};
module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports.getBook = getBook;
module.exports.deleteBook = deleteBook;
module.exports.updateBook = updateBook;