import { Link } from 'react-router-dom';
import svg from '../../assets/wave.svg'


const Home = () => {


    return (
        <div>

            <div className="hero  mt-52 mb-64">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Wellcome to <span className='bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>ByteBlaze</span></h1>
                        <p className="py-6">ByteBlaze is the bridge between the complex world of technology and <br /> the curious minds eager to understand it</p>
                        <div className="flex justify-center gap-5">
                            <Link to='/blogs'>


                                <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-red-400 group-hover:bg-yellow-300"></span>
                                    <span className="relative text-black group-hover:text-black">Read Blogs</span>
                                </a>

                            </Link>



                            <Link to='/bookmarks'>
                                <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-red-400 group-hover:bg-purple-500"></span>
                                    <span className="relative text-black group-hover:text-white">Bookmarks</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-full' src={svg} alt="" />
            </div>



        </div>
    );
};

export default Home;