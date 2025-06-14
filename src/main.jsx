import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import BookDetails from './Components/Books/BookDetails';
import ListedBooks from './Components/Books/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/DashBoard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/public/booksData.json')
      },
      {
        path: "/book/:bookid",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/public/booksData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    <ToastContainer />
    
  </StrictMode>,
)
