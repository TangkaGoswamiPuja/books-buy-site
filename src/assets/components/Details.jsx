import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const {bookId}= useParams()
    const idInt = parseInt(bookId)
    const detail = details.find(detail=> detail.bookId===idInt) 
    console.log ( detail)
    return (
        <div>
            bokknk:
            {/* detak:{detail}
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h3>
                
                </h3>
            </div> */}
        </div>
    );
};

export default Details;