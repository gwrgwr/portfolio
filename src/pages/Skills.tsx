import {GoDownComponent} from "../components/GoDownComponent.tsx";
import {CardContentComponent} from "../components/CardContentComponent.tsx";
import reactLogo from "../assets/icons8-react-40.png";
import javaLogo from "../assets/icons8-java-48.png";
import mysqlLogo from "../assets/icons8-mysql-48.png";
import flutterLogo from "../assets/icons8-flutter-48.png";
import firebaseLogo from "../assets/icons8-firebase-96.png";
import prismaLogo from "../assets/icons8-prisma-orm-50.png";
import typescriptLogo from "../assets/icons8-typescript-96.png";
import springBootLogo from "../assets/icons8-spring-boot-96.png";
import postmanLogo from "../assets/postman.png";
import viteLogo from "../assets/icons8-vite-96.png";
import gitLogo from "../assets/icons8-git-96.png";
import javascriptLogo from "../assets/icons8-javascript-96.png";
export const Skills = () => {
    return (
        <div id="skills" className="col-start-1 col-end-8 bg-gradient-to-b to-zinc-950 from-zinc-800 grid grid-cols-9 grid-rows-1 items-center justify-center">
            <div className="self-center col-start-2 col-end-9 flex flex-col gap-6">
                <div className="flex flex-row justify-evenly">
                    <CardContentComponent text="React" img={reactLogo} alt="React" level="Intermediate"/>
                    <CardContentComponent text="Java" img={javaLogo} alt="Java" level="Intermediate"/>
                    <CardContentComponent text="MySQL" img={mysqlLogo} alt="MySQL" level="Basic"/>
                    <CardContentComponent text="Flutter" img={flutterLogo} alt="Flutter" level="Intermediate"/>
                </div>
                <div className="flex flex-row justify-evenly">
                    <CardContentComponent text="TypeScript" img={typescriptLogo} alt="TypeScript" level="Intermediate"/>
                    <CardContentComponent text="Spring Boot" img={springBootLogo} alt="Spring Boot" level="Intermediate"/>
                    <CardContentComponent text="Firebase" img={firebaseLogo} alt="Firebase" level="Intermediate"/>
                    <CardContentComponent text="Prisma" img={prismaLogo} alt="Prisma" level="Intermediate"/>
                </div>
                <div className="flex flex-row justify-evenly">
                    <CardContentComponent text="JavaScript" img={javascriptLogo} alt="JavaScript" level="Advanced"/>
                    <CardContentComponent text="Postman" img={postmanLogo} alt="Postman" level="Intermediate"/>
                    <CardContentComponent text="Vite" img={viteLogo} alt="Vite" level="Basic"/>
                    <CardContentComponent text="Git" img={gitLogo} alt="Git" level="Intermediate"/>
                </div>

            </div>
                <GoDownComponent href="#project"/>
        </div>
    );
};