import { useEffect, useState } from "react";
import { getwishBooks } from "./components/wish";
import { useLoaderData } from "react-router-dom";

import B from "./B" ;

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
          
           <p className="text-3xl font-semibold mt-5">Wishlist Books :{addWishBooks.length}</p>
           {addWishBooks.map(b=><B key={b.id} b={b}></B>)} 
        </div>
    );
};

export default AddWish;