import { useEffect, useState } from "react";
import { getBlogs } from "../LocalStorage/localstorage";
import BlogsCart from "../BlogsCart/BlogsCart";


const Bookmarks = () => {

const [blogs , setBlogs] = useState([])

useEffect (() =>{

const storedBlogs = getBlogs()
setBlogs(storedBlogs)


},[])

    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {
                    blogs.map(blog => <BlogsCart deletable={true} blog={blog} key={blog.id}></BlogsCart>)
                }
            </div>
    );
};

export default Bookmarks;