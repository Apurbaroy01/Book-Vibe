import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
    const [books, setBooks]=useState([]);

    useEffect(()=>{
        fetch('/public/booksData.json')
        .then(response=>response.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center m-10">Books</h2>
            <div className="grid lg:grid-cols-3 text-center gap-5">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;