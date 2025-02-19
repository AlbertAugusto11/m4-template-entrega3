import { IBooks } from "../interfaces/interface";

export const booksDatabase: IBooks[] = []

let id = 0

export const createId = () => {
    id++
    return id
}