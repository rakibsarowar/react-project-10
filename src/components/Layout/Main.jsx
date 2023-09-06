import { Outlet } from "react-router-dom";
import Header from "../Header";
import Hero from "../Hero";

const Main = () => {
    return (
        <div className="bg-gray-900">
            <Hero></Hero>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;