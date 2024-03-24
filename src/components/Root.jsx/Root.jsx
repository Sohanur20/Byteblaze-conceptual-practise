import { Outlet } from "react-router-dom";
import Nav from "../Navber/Nav";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="mx-auto container">
            <Nav></Nav>
            <Outlet></Outlet>
            <div className="">
            <Footer></Footer>
            </div>
            </div>
            
        </div>
    );
};

export default Root;