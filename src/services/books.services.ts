import { booksDatabase, createId } from "../database/database";
import { IBooks } from "../interfaces/interface";

type TBooks = Partial<IBooks>

export class BooksServices {
    registerBook(name: string, pages: number, category: string) {
        const newBook: IBooks = {id: createId(), name: name, pages: pages, category: category, createdAt: new Date, updatedAt: new Date }

        booksDatabase.push(newBook)

        return newBook
    }

    getBooks() {
        return booksDatabase
    }

    getOneBook(id:number) {
        const findBook = booksDatabase.find(book => book.id == id)
        
        return findBook

    }

    updateBook(id: number, obj: TBooks) {
        const index = booksDatabase.findIndex(book => book.id == id)

        if(index != -1) {
            const bookUpdate = {...booksDatabase[index], ...obj, updatedAt: new Date}
            booksDatabase.splice(index,1,bookUpdate)

            return bookUpdate
        }
    }

    deleteBook(id: number) {
        const index = booksDatabase.findIndex(book => book.id == id)
        booksDatabase.splice(index,1)

        return {menssage: "Book deleted successfully"}
    }
}