import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getSaveBooks } from "./components/store";
import AddWish from "./AddWish";
import A from "./A";
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
              <div className="text-5xl font-bold flex justify-center bg-gray-200 mt-5 ml-10 mr-10 p-5 rounded-md">
                Books
            </div>
            <div role="tablist" className="tabs tabs-lifted mt-5">
  <Link  role="tab" className="tab"> Read Books {addBooks.length}</Link>
  <a role="tab" className="tab tab-active">Wish List book</a>
 
</div>
<p className="text-3xl font-semibold mt-7">Read Books: {addBooks.length}</p>
             {addBooks.map(a=><A key={a.id} a={a}></A>)} 
            <AddWish></AddWish>
        </div>
    );
};

export default ListBooks;