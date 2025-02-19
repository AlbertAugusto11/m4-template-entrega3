import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { BooksIsValid } from "../middleware/booksIsValid.middleware";
import { BooksIsRegistered } from "../middleware/booksIsRegistered.middleware";

export const booksRouter = Router()

const booksControllers = new BooksControllers()

booksRouter.get("/", booksControllers.getBooks)
booksRouter.get("/:id", BooksIsValid.execute, booksControllers.getOneBook)
booksRouter.post("/", BooksIsRegistered.execute ,booksControllers.registerBook)
booksRouter.patch("/:id", BooksIsValid.execute, BooksIsRegistered.execute, booksControllers.updateBook)
booksRouter.delete("/:id", BooksIsValid.execute, booksControllers.deleteBook)