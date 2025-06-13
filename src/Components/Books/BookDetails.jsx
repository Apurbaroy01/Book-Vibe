import { useLoaderData, useParams } from "react-router-dom";
import { addStoreReadList } from "../Utility/Utility";
import { toast } from "react-toastify";


const BookDetails = () => {
    const {bookid}= useParams();
    const id=parseInt(bookid)
    

    const data=useLoaderData();
    // const book = data.find(book=> book.bookId ===id )
    const book=data.find(book=> book.bookId ===id);
    console.log( book,id)


    // -----------------------------------
    const handelmarkAsRed=(id)=>{

        addStoreReadList(id)
    }



    const {bookName,author,image,review,tags,totalPages,publisher,yearOfPublishing,rating,category,bookId}=book;

    const toasy=()=>{
        toast("this book added")
    }
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div>
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl h-100"
                     />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="text-2xl font-bold">By: {author}</p>
                    <div className="border border-gray-500"></div>
                    <p>{category}</p>
                    <div className="border border-gray-500"></div>
                    <p className="py-6">
                        <span className="font-bold">Review:</span> {review}
                    </p>
                    <div className="flex space-x-5">
                        <p className="font-bold">Tag</p>
                        <div>
                            {
                                tags.map((tag, index)=><button key={index} className="btn btn-xs  text-emerald-500 bg-emerald-50 rounded-xl">#{tag}</button>)
                            }
                            </div>
                    </div>
                    <div className="border border-gray-500"></div>
                    <div className="flex space-x-10">
                        <p>Number of Pages:</p>
                        <p>{totalPages}</p>
                    </div>
                    <div className="flex space-x-10">
                        <p>Publisher:</p>
                        <p>{publisher}</p>
                    </div>
                    <div className="flex space-x-10">
                        <p>Year of Publishing:</p>
                        <p>{yearOfPublishing}</p>
                    </div>
                    <div className="flex lg:space-x-10">
                        <p>Rating:</p>
                        <p>{rating}</p>
                    </div>
                    <div className="flex space-x-5 mt-5">
                        <button onClick={()=> handelmarkAsRed(bookId)} className="btn bg-amber-50">Mark As Read</button>
                        <button onClick={toasy} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;