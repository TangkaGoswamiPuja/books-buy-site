import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const { bookId } = useParams()
    const idInt = parseInt(bookId)
    const detail = details.find(detail => detail.bookId === idInt)
    console.log(detail)
    const { image, tags, bookName, author, category, rating, review, totalPages, publisher, yearOfPublishing } = detail
    return (
        <div className=" h-full grid grid-rows-1 gap-5 mt-7 mr-10 ml-10  lg:grid-cols-2">


            <div className="bg-gray-200 p-10">
                <img className="w-96 h-96" src={image} alt="" />
            </div>
            <div className="p-3 my-5">
                <h3 className="text-6xl font-bold my-3">
                    {bookName}
                </h3>
                <p className="text-3xl font-light my-3">
                    <span className="font-semibold">By: </span>{author}
                </p>
                <hr></hr>
                <p className="text-2xl font-thin my-3">{category}</p>
                <hr></hr>
                <p className="text-2xl font-extralight my-3">
                    <span className="font-semibold "> Review:</span> {review}

                </p>
                <p className="text-2xl my-3 "><span>Tag :</span> {tags.map((tag, index) => (
                    <div key={index} className="badge badge-success gap-3">{tag}</div>
                ))}</p>
                <hr></hr>
                <p className="text-xl my-2"><span className="font-semibold ">Number of Pages: </span>{totalPages}</p>
                <p className="text-xl my-2"><span className="font-semibold">Publisher: </span>{publisher}</p>
                <p className="text-xl my-2"><span className="font-semibold">Year of Publishing: </span>{yearOfPublishing}</p>
                <p className="text-xl"><span className="font-semibold">Rating:</span> {rating}</p>
            </div>
        </div>
    );
};

export default Details;