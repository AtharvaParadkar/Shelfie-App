import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Role, Permission } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "69fc6671001890a995b6"
const COLLECTION_ID = "books"

export const BooksContext = createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

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
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, userId: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    async function deleteBook(id) {
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