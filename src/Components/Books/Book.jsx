import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName,author,image,rating,category,tags}=book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 p-5 bg-[#F3F3F3]">
                        <img
                        src={image}
                        alt="Book"
                        className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body  text-left">
                        <div className='space-x-10 text-center '>
                            {
                                tags.map((tag, index)=><button key={index} className="btn btn-xs  text-emerald-500 bg-emerald-50 rounded-xl">#{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title"> {bookName}</h2>
                        <p>By: {author}</p>
                        <div className='border border-dashed'></div>
                        <div className='flex justify-between'>
                            <div>
                                <p>{category}</p>
                            </div>
                            <div>
                                <p>{rating} ⭐</p>
                            </div>
                        
                        </div>
                        
                    </div>
            </div>
        </Link>
    );
};

export default Book;