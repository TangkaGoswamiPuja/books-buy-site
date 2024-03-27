import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root';
import Home from './assets/components/Home';
import ListBooks from './assets/ListBooks';
import Reading from './assets/Reading';
import Error from './assets/Error';
import Details from './assets/components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      
      {
        path:"/books",
        element:<ListBooks></ListBooks>
      },{
        path:"/read",
        element:<Reading></Reading>

      },
      {
        path: "/book/:bookId",
        element:<Details></Details>,
        loader:()=>fetch('bookData.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
