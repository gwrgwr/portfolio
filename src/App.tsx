import {Home} from "./pages/Home.tsx";
import {NavBarComponent} from "./components/NavBarComponent.tsx";
import {About} from "./pages/About.tsx";
import {Skills} from "./pages/Skills.tsx";
import {Project} from "./pages/Project.tsx";

const App = () => {
    return (
        <div className="grid grid-rows-page grid-cols-7">
            <NavBarComponent />
            <Home />
            <About />
            <Skills />
            <Project />
        </div>
    );
}

export default App;