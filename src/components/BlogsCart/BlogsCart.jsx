/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import placeholderImage from '../../assets/404.jpg'



const BlogsCart = ({ blog }) => {


    const { title, description, id, cover_image } = blog;




    return (
        <div>
            <div>


                    <Link to={`/blogs/${id}`} className="max-w-sm mx-auto  p-2 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline ">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                            <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                            <p>{description}</p>
                        </div>

                    </Link>

        
               

            </div>
        </div>
    );
};

export default BlogsCart;