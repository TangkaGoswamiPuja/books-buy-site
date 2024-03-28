import { useEffect, useState } from "react";
import { getwishBooks } from "./components/wish";
import { useLoaderData } from "react-router-dom";



const AddWish = () => {
    const wishBooks = useLoaderData();

    const [addWishBooks,setAddWish] = useState([]);
    useEffect(() => {
        const showWishIds = getwishBooks();
        if (wishBooks.length > 0) {

            const wishBooksSelect = wishBooks.filter(wishBook => showWishIds.includes(wishBook.bookId))
            setAddWish(wishBooksSelect);
            // console.log(books, showIds, booksSelect)
        }
    }, [])
    return (
        <div>
           wish : {addWishBooks.length}
        </div>
    );
};

export default AddWish;