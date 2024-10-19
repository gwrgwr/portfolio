import useFetch from "../hooks/useFetch.tsx";
import {useEffect} from "react";
import {CardNumberComponent} from "../components/CardNumberComponent.tsx";
import GithubProfilePhoto from "../assets/GithubProfilePhoto.png";
import {GoDownComponent} from "../components/GoDownComponent.tsx";

export const About = () => {

    const {data,loading, error,request} = useFetch();

    useEffect(() => {
        const fetchData = async () => {
            await request('https://api.github.com/users/gwrgwr', {method: 'GET'});
        }
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <div id="about" className="col-start-1 col-end-8 bg-gradient-to-b from-zinc-950 to-zinc-800 grid grid-cols-9 grid-rows-1">
            <div className="col-start-2 col-end-9 self-center flex flex-col gap-24">
                <div className="flex flex-row items-center justify-center justify-items-center">
                    <img src={GithubProfilePhoto} alt="GithubProfilePhoto" width="960" height="700" className="shadow-dropButton"/>
                    <p className="text-right rtl:text-left text-gray-500 dark:text-gray-400 w-1/2">I am
                        passionate about technology and how it can transform ideas into innovative solutions. I
                        constantly seek to improve my skills in new tools and programming languages. My goal is to
                        develop expertise across various layers of web development and become a complete fullstack
                        developer, capable of delivering efficient and functional solutions.</p>
                </div>
                <div className="flex flex-row justify-evenly">
                    <CardNumberComponent number={data!.public_repos} text="Public Repositories"/>
                    <CardNumberComponent number={data!.following} text="Following"/>
                    <CardNumberComponent number={data!.followers} text="Followers"/>
                </div>
            </div>
            <GoDownComponent href="#skills"/>
        </div>
    );
};