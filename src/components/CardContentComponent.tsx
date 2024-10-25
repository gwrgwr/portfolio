export const CardContentComponent = (props: {
    img: string;
    alt: string;
}) => {
    return (
        <div className="rounded-lg p-3 w-56border-2 border-purple-700 shadow-dropButton transform transition hover:-translate-y-3 ease-in">
            <img src={props.img} alt={props.alt} width="50" height="50"/>
        </div>
    );
};