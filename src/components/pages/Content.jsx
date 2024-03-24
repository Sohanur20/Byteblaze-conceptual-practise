import { useLoaderData, useNavigation } from "react-router-dom";
import placeholderImage from '../../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Loader from "../Loader/Loader";

const Content = () => {

    const blogs = useLoaderData()
    const { title, body_html, cover_image, tags } = blogs

const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <Loader></Loader>
    }


    return (
        <div>

            <div className="w-full mx-auto border-2 p-2  border-opacity-30    group hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />

                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-400">

                    {
                        tags.map(tag => <a key={tag} href="#"

                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"

                        >
                            #{tag}


                        </a>)
                    }


                </div>


                <div className=" space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>

                    <Markdown rehypePlugins={[rehypeRaw]}>
                        {body_html}

                    </Markdown>



                </div>

            </div>
        </div>
    );
};

export default Content;