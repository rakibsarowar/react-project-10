import { Outlet } from "react-router-dom";
import Hero from "../Hero";
import Nav from "../Nav";
import Project from "../Project";

const Main = () => {
    return (
        <div className="bg-gray-900 ">
            <Nav></Nav>
            <div className="container mx-auto  px-5 md:pt-0 relative">
                <img className="mt-5 hidden xl:block absolute" src="/src/assets/element.svg" alt="" />
            </div>
            <Hero></Hero>
            <Project></Project>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;