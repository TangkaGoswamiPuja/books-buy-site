import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";

const A = ({a}) => {
   const { image ,tags, bookName, author, category, rating, review, totalPages, publisher, yearOfPublishing} = a
    return (
        <div className="mt-7 ml-7 mr-7 ">
            <div className="card card-side bg-base-100 shadow-xl pl-10">
  <figure><img className="h-32" src={image}alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p> <span className="font-semibold">By: </span>{author}</p>
   
     <p className=" flex gap-3"><span>Tag :</span> {tags.map((tag, index) => (
        <div key={index} className="badge badge-success gap-3 p-2">{tag}</div>
    ))}
   <div className="flex"> <CiLocationOn className="text-2xl"></CiLocationOn ><span className="font-semibold">Year of Publishing: </span>{yearOfPublishing}</div>

</p>
<p className="flex gap-4">
<IoPeopleOutline className="text-2xl"></IoPeopleOutline ><span className="font-semibold">Publisher: </span>{publisher}
<HiOutlineBookOpen className="text-2xl"></HiOutlineBookOpen><span className="font-semibold ">Number of Pages: </span>{totalPages}
</p>
<hr></hr>
 <div className="card-actions">
      <button className="btn btn-info rounded-full text-white"><span className="font-semibold">Category: </span>{category}</button>
      <button className="btn btn-error rounded-full text-white"><span className="font-semibold">Rating:</span> {rating}</button>
      <button className="btn btn-success rounded-full text-white">View Details</button>
    </div>
    </div>
    </div>

  </div>

        
    );
};

export default A;