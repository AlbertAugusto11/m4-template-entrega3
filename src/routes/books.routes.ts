import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { BooksIsValid } from "../middleware/booksIsValid.middleware";
import { BooksIsRegistered } from "../middleware/booksIsRegistered.middleware";
import { ValidRequest } from "../middleware/validRequest.middleware";
import { booksSchemas, updateBooksSchemas } from "../schemas/books.schemas";

export const booksRouter = Router()

const booksControllers = new BooksControllers()

booksRouter.get("/", booksControllers.getBooks)
booksRouter.get("/:id", BooksIsValid.execute,booksControllers.getOneBook)
booksRouter.post("/", ValidRequest.execute( {body: booksSchemas} ), BooksIsRegistered.execute ,booksControllers.registerBook)
booksRouter.patch("/:id", BooksIsValid.execute, ValidRequest.execute( {body: updateBooksSchemas} ),BooksIsRegistered.execute, booksControllers.updateBook)
booksRouter.delete("/:id", BooksIsValid.execute, booksControllers.deleteBook)