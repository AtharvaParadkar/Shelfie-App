import { createContext, useState } from "react";

const DATABASE_ID = "69fc6671001890a995b6"
const COLLECTION_ID = "books"

export const BooksContext = createContext()

export function BooksProvider({ children }) {
    cosnt[books, setBooks] = useState([])

    async function fetchBooks() {
        try { } catch (eror) {
            console.error(eror.message)
        }
    }

    async function fetchBookById(id) {
        try { } catch (eror) {
            console.error(eror.message)
        }
    }

    async function createBook(data) {
        try { } catch (eror) {
            console.error(eror.message)
        }
    }

    async function deleteBok(id) {
        try { } catch (eror) {
            console.error(eror.message)
        }
    }

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    )
}