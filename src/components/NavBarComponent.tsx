import logo from '../assets/icons8-working-with-a-macbook-64.png';
import {ListNavBarComponent} from "./ListNavBarComponent.tsx";
import {BorderedButtonComponent} from "./BorderedButtonComponent.tsx";
import "./NavBarComponent.css";
export const NavBarComponent = () => {
    return (
        <nav
            className="drop-filter bg-white dark:bg-transparent fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-purple-800">Murilo José</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <BorderedButtonComponent text="Contact Me"/>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-sticky">
                    <ListNavBarComponent />
                </div>
            </div>
        </nav>


    );
};