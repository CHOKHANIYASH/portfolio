import Image from "next/image";
import profilePhoto from "../../public/assets/images/profilePhoto.png";
import Carousel from "./Carousal";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { FaAws } from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "Java" },
    { name: "Expressjs" },
    { name: "MongoDB" },
    { name: "Postgresql" },
    { name: "Terraform" },
    { name: "Docker" },
    { name: "AWS ECS" },
    { name: "AWS Lambda" },
    { name: "AWS DynamoDb" },
    { name: "AWS Cognito" },
    { name: "Nextjs" },
    { name: "Tailwind CSS" },
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
                  I’m a backend developer who enjoys building reliable and
                  scalable systems. I work with Spring Boot, Node.js, and AWS to
                  create APIs and cloud-based solutions that perform well and
                  scale smoothly. I enjoy solving challenging problems,
                  optimizing performance, and making sure systems run
                  efficiently. My goal is to build systems that are not only
                  functional but also clean, efficient, and easy to maintain.
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
        <div className="relative grid w-full my-5 text-blue-400 md:grid-cols-3 max-md:grid-rows-3 place-items-center">
          <BiLogoSpringBoot className="w-28 h-28 md:w-52 md:h-52" />
          <FaAws className="max-md:mt-3 w-28 h-28 md:w-52 md:h-52" />
          <DiNodejs className="w-28 h-28 md:w-52 md:h-52" />
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
