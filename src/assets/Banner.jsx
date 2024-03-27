
const Banner = () => {
    return (
        <div className="mt-7  ml-7 mr-7">
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col justify-between lg:flex-row-reverse gap-4">
    <img src="https://i.ibb.co/dLfmypY/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-6xl font-bold">Books to freshen <br></br> up your bookshelf</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <button className="btn btn-success  mt-5">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;