import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getSaveBooks } from "./components/store";
import AddWish from "./AddWish";
import A from "./A";
const ListBooks = () => {
    const books = useLoaderData();

    const [addBooks, setListBooks] = useState([]);
    const [display, setDisplay] = useState([]);

    const handleBook = filter => {
        if (filter === "Rating") {
            const rate = addBooks.filter(book => book.rating === 4.8)
            setDisplay(rate)
        }
        else if(filter==="Number of pages"){const page = addBooks.filter(book => book.totalPages <=300)
            setDisplay(page)

        }

    }

    useEffect(() => {
        const showIds = getSaveBooks();
        if (books.length > 0) {

            const booksSelect = books.filter(book => showIds.includes(book.bookId))
            setListBooks(booksSelect)
            setDisplay(booksSelect)
            // console.log(books, showIds, booksSelect)
        }
    }, [])
    return (
        <div>
            <div className="text-5xl font-bold flex justify-center bg-gray-200 mt-5 ml-10 mr-10 p-5 rounded-md">
                Books
            </div>
            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn btn-success">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleBook("Rating")}><a>Rating</a></li>
                        <li onClick={()=>handleBook("Number of pages")}><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div role="tablist" className="tabs tabs-lifted mt-5">
                <Link role="tab" className="tab"> Read Books {addBooks.length}</Link>
                <a role="tab" className="tab tab-active">Wish List book</a>

            </div>
            <p className="text-3xl font-semibold mt-7">Read Books: {addBooks.length}</p>
            {display.map(a => <A key={a.id} a={a}></A>)}
            <AddWish></AddWish>
        </div>
    );
};

export default ListBooks;