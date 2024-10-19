export const BorderedButtonComponent = (props: {
    text: string;
}) => {
    return (
        <button type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-transparent
                 dark:border dark:text-purple-700 dark:border-purple-700 dark:hover:border-transparent dark:hover:text-white dark:hover:bg-purple-700">{props.text}
        </button>
    );
};