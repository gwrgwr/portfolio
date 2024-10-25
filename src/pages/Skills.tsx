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
import linuxLogo from "../assets/icons8-linux-48.png";
import tailwindLogo from "../assets/icons8-tailwindcss-48.png";
import dartLogo from "../assets/icons8-dart-48.png";


export const Skills = () => {
    return (
        <div id="skills" className="col-start-1 col-end-8 bg-gradient-to-b to-zinc-950 from-zinc-800 grid grid-cols-9 grid-rows-1 items-center justify-center">
            <div className="self-center col-start-2 col-end-9 flex flex-row justify-between items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl text-white mb-4">My Skills</h1>
                    <div className="flex flex-row gap-4">
                        <CardContentComponent img={reactLogo} alt="React"/>
                        <CardContentComponent img={javaLogo} alt="Java"/>
                        <CardContentComponent img={mysqlLogo} alt="MySQL"/>
                        <CardContentComponent img={flutterLogo} alt="Flutter"/>
                        <CardContentComponent img={dartLogo} alt="Dart"/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <CardContentComponent img={typescriptLogo} alt="TypeScript"/>
                        <CardContentComponent img={springBootLogo} alt="Spring Boot"/>
                        <CardContentComponent img={firebaseLogo} alt="Firebase"/>
                        <CardContentComponent img={prismaLogo} alt="Prisma"/>
                        <CardContentComponent img={linuxLogo} alt="Linux"/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <CardContentComponent img={javascriptLogo} alt="JavaScript"/>
                        <CardContentComponent img={postmanLogo} alt="Postman"/>
                        <CardContentComponent img={viteLogo} alt="Vite"/>
                        <CardContentComponent img={gitLogo} alt="Git"/>
                        <CardContentComponent img={tailwindLogo} alt="TailwindCSS"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-3/6 text-white">
                    <p className="text-2xs text-end">
                        I work with a versatile tech stack that allows me to develop robust applications across web,
                        mobile, and backend. For backend development, Java is my primary choice due to its strong typing
                        and extensive libraries, making it perfect for scalable APIs and complex business logic.
                        Additionally, Flutter with Dart is essential in my mobile development process, enabling
                        cross-platform apps for iOS and Android with a consistent and high-performance user experience.
                        Dart’s efficiency in asynchronous operations complements Flutter's dynamic UI capabilities,
                        making mobile applications responsive to real-time data.
                    </p>
                    <p className="text-2xs text-end">On the front end, React combined with TypeScript allows me to create interactive and robust web
                        interfaces with added reliability from static typing, catching potential issues early in
                        development. TailwindCSS enhances this process by providing utility classes that streamline
                        responsive design, speeding up styling without compromising on quality. For version control, Git
                        is essential in managing code changes and collaborating efficiently. This cohesive stack
                        empowers me to build comprehensive applications, ensuring a seamless, well-integrated user
                        experience across platforms.</p>
                </div>

            </div>
            <GoDownComponent href="#project"/>
        </div>
    );
};