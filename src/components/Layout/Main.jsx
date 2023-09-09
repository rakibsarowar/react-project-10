import { Outlet } from "react-router-dom";
import Hero from "../Hero";

const Main = () => {
    return (
        <div className="bg-gray-900 ">
            <div className="container mx-auto  px-5 md:pt-0 relative">
                <img className="mt-5 hidden xl:block absolute" src="/src/assets/element.svg" alt="" />
            </div>
            <Hero></Hero>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;