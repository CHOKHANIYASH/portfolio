// "use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profilePhoto from "../../public/assets/images/profilePhoto.png";
import Carousel from "./Carousal";

export default function About() {
  const skills = [
    { name: "Expressjs" },
    { name: "MongoDB" },
    { name: "Postgresql" },
    { name: "Terraform" },
    { name: "GraphQL" },
    { name: "Redis" },
    { name: "Docker" },
    { name: "Auth0" },
    { name: "AWS Cognito" },
    { name: "Nextjs" },
    { name: "Tailwind CSS" },
    { name: "Redux" },
  ];
  return (
    <>
      <div id="About" className="font-mono scroll-my-16 ">
        <h1 className="mb-2 text-5xl font-bold text-center text-blue-400">
          About
        </h1>
        <div className="flex flex-col w-full bg-blue-300 md:flex-row dark:bg-slate-800 max-md:p-5">
          <div className="flex place-content-center">
            <Image
              className="w-64 h-64 m-10 border-8 border-white border-solid rounded-full"
              src={profilePhoto}
              alt="profile photo"
              loading="lazy"
            />
          </div>
          <div className="w-full p-2 md:w-5/6 place-self-center ">
            <div className="flex flex-col text-white dark:text-white">
              <div className="place-self-center ">
                <p>
                  Hello there! My name is Yash Chokhani, and I&apos;m thrilled
                  to introduce myself to you.
                </p>
              </div>
              <div className="place-self-center">
                <p>
                  I am currently pursuing a Bachelor&apos;s degree in
                  Information Technology
                </p>
              </div>
              <div className="place-self-center">
                <p>
                  I am a full stack developer, specializing in the MERN
                  (MongoDB, Express.js, React.js, and Node.js) stack. This
                  comprehensive skill set allows me to work seamlessly across
                  the entire development process, from designing the user
                  interface to managing the back-end infrastructure.I am a GSSoC
                  2023 contributor
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="z-[-1] text-cyan-500 w-100 ">
          <h2 className="mt-2 text-3xl font-bold text-center text-blue-400">
            My Skills
          </h2>
        </div>
        <div className="relative z-10 grid w-full grid-cols-3 text-lg text-blue-400 max-md:grid-cols-1 md:text-4xl md:gap-4 place-items-center h-96">
          <FontAwesomeIcon className="" icon="fa-brands fa-node " size="5x" />
          <FontAwesomeIcon className="" icon="fa-brands fa-aws" size="5x" />
          <FontAwesomeIcon className="" icon="fa-brands fa-react " size="5x" />
        </div>
      </div>
      <Carousel className="mb-5 text-blue-400" slidesToShow={3}>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="font-mono text-3xl text-center text-blue-400 max-md:text-sm"
          >
            {skill.name}
          </div>
        ))}
      </Carousel>
    </>
  );
}
