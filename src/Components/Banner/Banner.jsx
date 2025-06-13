

const Banner = () => {
    return (
        <div className="max-w-full mx-auto px-10 rounded-3xl">
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src="/src/assets/books.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                
                <button className="btn bg-[#23BE0A] text-white mt-5">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;