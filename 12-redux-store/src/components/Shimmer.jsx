const ShimmerDiv = () => {
  return (
    <div className="w-64 h-[50vh] p-4 border-2 border-gray-100 shadow-lg flex flex-col gap-2 animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-[59%] bg-gray-200 rounded"></div>  

      {/* Text placeholder */}
      <div className="w-full h-[39%] flex flex-col gap-2">
        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
        <div className="w-full h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};



const Shimmer = () => {
  return (
    <>
      <div className="shimmer-container flex justify-evenly items-centers gap-5 m-5">
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
      </div>
      <div className="shimmer-container flex justify-evenly items-centers gap-5 m-5 my-8">
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
      </div>
    </>
  );
};

export default Shimmer;
