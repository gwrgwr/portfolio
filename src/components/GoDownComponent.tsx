import arrowDown from '../assets/icons8-arrow-down-50.png';
import arrowDownBlack from '../assets/icons8-arrow-down-50-black.png';
import {useState} from "react";

export const GoDownComponent = (props: {
    href: string;
}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="shadow-dropButton rounded-full self-end justify-self-center col-start-1 col-end-10 mb-10 hover:bg-purple-900 hover:shadow-dropButtonWhite">
            <a href={props.href} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={!isHovered ? arrowDown : arrowDownBlack} alt="" width="50" className="p-2"/>
            </a>
        </div>
    );
};