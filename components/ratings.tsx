const element = 
    {
        image: ["/ratings/review1.png", "/ratings/review2.png", "/ratings/review3.png", "/ratings/review4.png"]

    }

const Ratings = () => {
    return (
    <div className="flex sm:flex-row flex-wrap w-full h-auto items-center sm:justify-center sm:gap-10 gap-3 pt-10">
        {element.image.map((image, index) => (
            <div key={index} className="sm:w-64  w-40 sm:h-32 flex items-center justify-center">
                <img src={image} className=" w-36  sm:w-40  h-24 "/>
            </div>
        ))}

    </div>
    );
}

export default Ratings;