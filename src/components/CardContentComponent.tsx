export const CardContentComponent = (props: {
    text: string;
    img: string;
    alt: string;
    level: string;
}) => {
    return (
        <div className="card-container rounded-lg py-4 w-56 flex flex-col gap-4 border-2 border-purple-700 shadow-dropButton items-center transform transition hover:-translate-y-3 ease-in">
            <h1 className="text-white text-3xl">{props.text}</h1>
            <img src={props.img} alt={props.alt} className=" object-cover bg-cover" width="100" height="100"/>
            <p className="text-white text-xl">{props.level}</p>
        </div>
    );
};