import {HeadingComponent} from "../components/HeadingComponent.tsx";
import {GoDownComponent} from "../components/GoDownComponent.tsx";

export const Home = () => {
    return (
        <div id="home" className="col-start-1 col-end-8 row-start-1 row-end-2 bg-gradient-to-b to-zinc-950 from-zinc-800 grid grid-cols-9 grid-rows-1">
            <div className="col-start-2 col-end-9 self-center">
                <HeadingComponent/>
            </div>
                <GoDownComponent href="#about"/>
        </div>
    );
};