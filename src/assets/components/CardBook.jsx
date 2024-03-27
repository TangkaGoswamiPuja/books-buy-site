
const CardBook = ({book}) => {
    const {image ,tags,bookName,author,category,rating}=book
    return (
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
       
  <input type="radio" name="rating-1" className="mask mask-star " /></div>
       </p>
    </div>
   
  </div>
</div>
        </div>
    );
};

export default CardBook;