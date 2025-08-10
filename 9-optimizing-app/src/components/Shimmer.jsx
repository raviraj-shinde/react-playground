const ShimmerDiv = () => {
    return (
        <div className="shimmer-card">
            {/*css if you want */}
            <div></div>
            <div></div>
        </div>
    )
}


const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <ShimmerDiv/>
            <ShimmerDiv/>
            <ShimmerDiv/>
            <ShimmerDiv/>
            <ShimmerDiv/>
        </div>
    )
}

export default Shimmer;