import { PiStar } from "react-icons/pi";
import { Link } from "react-router-dom";

const CardBook = ({book}) => {
    const { bookId,image ,tags,bookName,author,category,rating}=book
    return (
       <Link to={`/book/${bookId}`}>
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-5">
  <figure className="h-60"><img src={image} alt="" /></figure>
 
  <div className="card-body">
  <div className="card-actions text-green-500">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">{tag}</div>
            ))}
          </div>
    <h2 className="card-title">
      {bookName}
     
    </h2>
    <p>By:{author}</p>
    <hr></hr>
    <div className="flex">
       <p> {category}</p>
       <p>
       <div className="rating  gap-2" >
        {rating}
        <PiStar className="text-2xl"></PiStar>

 </div>
       </p>
    </div>
   
  </div>
</div>
        </div>
       </Link>
    );
};

export default CardBook;