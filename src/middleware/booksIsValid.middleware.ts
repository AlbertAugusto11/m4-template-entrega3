import { Request, Response, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class BooksIsValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!booksDatabase.some(book => book.id === Number(req.params.id))){
            throw new AppError(404, "Book not found.");
        }

        next();
    }
}