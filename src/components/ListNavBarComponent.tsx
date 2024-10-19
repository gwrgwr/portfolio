import {ListTileNavBarComponent} from "./ListTileNavBarComponent.tsx";

export const ListNavBarComponent = () => {
    return (
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
            <ListTileNavBarComponent text="Home" href="#home"/>
            <ListTileNavBarComponent text="About Me" href="#about"/>
            <ListTileNavBarComponent text="Skills" href="#skills"/>
            <ListTileNavBarComponent text="Projects" href="#project"/>
        </ul>
    );
};