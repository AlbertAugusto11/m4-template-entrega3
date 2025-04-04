import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksControllers{
    registerBook(req: Request, res: Response): Response{
        const booksServices = new BooksServices()

        const response = booksServices.registerBook(req.body.name, req.body.pages, req.body.category)

        return res.status(201).json(response)
    }

    getBooks(req: Request, res: Response): Response {
        const booksServices = new BooksServices()

        const response = booksServices.getBooks(req.query.search as string)

        return res.status(200).json(response)
    }

    getOneBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices()

        const response  = booksServices.getOneBook(Number(req.params.id))

        return res.status(200).json(response)
    }

    updateBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices()

        const response = booksServices.updateBook(Number(req.params.id), req.body)

        return res.status(200).json(response)
    }

    deleteBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices()

        const response = booksServices.deleteBook(Number(req.params.id))

        return res.status(204).json(response)
    }

   
}