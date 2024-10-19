export const CardNumberComponent = (props: {
    number: number;
    text: string;
}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl text-gray-900 dark:text-white">
                {props.number}
            </h1>
            <p className="text-1xl text-gray-900 dark:text-white">
                {props.text}
            </p>
        </div>
    );
};