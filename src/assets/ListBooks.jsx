import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSaveBooks } from "./components/store";
import AddWish from "./AddWish";

const ListBooks = () => {
    const books = useLoaderData();

    const [addBooks, setListBooks] = useState([]);
    useEffect(() => {
        const showIds = getSaveBooks();
        if (books.length > 0) {

            const booksSelect = books.filter(book => showIds.includes(book.bookId))
            setListBooks(booksSelect)
            // console.log(books, showIds, booksSelect)
        }
    }, [])
    return (
        <div>
            lol {addBooks.length}
            <AddWish></AddWish>
        </div>
    );
};

export default ListBooks;