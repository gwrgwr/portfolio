import {BorderedButtonComponent} from "./BorderedButtonComponent.tsx";

export const HeadingComponent = () => {
    return (
        <div className="flex flex-col gap-2 items-start">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-purple-800">Murilo Ramos</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"><span className="bg-clip-text text-transparent from-purple-700 to-purple-900 bg-gradient-to-r ">Fullstack Developer </span>
                 Passionate About Technology Turning Passion<p> into Innovative Solutions</p></p>
            <BorderedButtonComponent text="About me"/>
        </div>
    );
};