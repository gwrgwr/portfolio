export const ListTileNavBarComponent = (props: {
    text: string;
    href: string;
}) => {
    return (
        <li>
            <a href={props.href}
               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:text-purple-900 md:p-0 md:dark:hover:text-purple-700 dark:text-white dark:hover:bg-transparent dark:border-gray-700">{props.text}</a>
        </li>
    );
};