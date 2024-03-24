import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx/Root.jsx';
import Home from './components/Home/Home.jsx';

import Blogs from './components/Blog/Blogs.jsx';
import Bookmarks from './components/Bookmarks/Bookmarks.jsx';
import SingleBlogCart from './components/SingleBlogCart/SingleBlogCart.jsx';
import Content from './components/pages/Content.jsx';
import Author from './components/pages/Author.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')

      },
      {
        path: '/blogs/:id',
        element: <SingleBlogCart></SingleBlogCart>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),

        children: [
          {
            index: true,
            element:<Content></Content> ,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)

          },
          {
            path : 'author' ,
            element : <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          }



        ]

      },

      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
