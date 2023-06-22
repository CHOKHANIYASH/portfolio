import React from "react";
import dash from "./assets/images/dash.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const boxContent = [
    {
      logo: (
        <FontAwesomeIcon
          className="w-20 h-20 mt-2  border-2 text-white bg-blue-400  rounded-full p-4"
          icon="fa-solid fa-code"
        />
      ),
      title: "Backend",
      desceiption:
        "I am a full stack developer but more involved in backend and love to work with nodejs as well as worked a lot of time on user authentications.",
    },
    {
      logo: (
        <FontAwesomeIcon
          className="w-20 h-20  mt-2  border-2 text-white bg-blue-400 rounded-full p-4"
          icon="fa-brands fa-java"
        />
      ),
      title: "Java",
      desceiption:
        "Java is the first programming language I learned and it is my favourite programming language.I almost do all my DSA coding in java only",
    },
    {
      logo: (
        <FontAwesomeIcon
          className="w-20 h-20  mt-2 text-white border-2 bg-blue-400 rounded-full p-4"
          icon="fa-solid fa-database"
        />
      ),
      title: "Databases",
      desceiption:
        "As a developer databases are one of my favourite topic.I have worked with many databases like mongoDB,mysql,redis,firebase and I think databases are the core of any application.Figuring out which type of database and when to use it in project make it more interesting as a developer.",
    },
  ];
  return (
    <>
      <div id="Home" className="scroll-my-16">
        <Image
          className="absolute z-[-2] max-md:hidden max-lg:max-h-96 max-lg:max-w-max-h-96 top-0 right-0 "
          src={dash}
          alt=""
        />

        {/* main content */}
        <div className="m-4 md:m-40 flex flex-col md:flex-row justify-between space-x-5 p-10">
          <div className="basis-full md:basis-1/2">
            <h3 className="text-left text-xl dark:text-white">
              Hello, I&apos;m
            </h3>
            <h1 className="text-left text-4xl font-bold  text-blue-500">
              YASH CHOKHANI
            </h1>
            <h2 className="mb-4 text-left text-lg dark:text-white">
              Full Stack Developer(MERN)
            </h2>
            <div className="social-handles flex space-x-2">
              <a href="https://github.com/CHOKHANIYASH" target="_blank">
                <FontAwesomeIcon
                  className="w-6 h-6 text-blue-500"
                  icon="fa-brands fa-github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-chokhani-55b27b225/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="w-6 h-6 text-blue-500"
                  icon="fa-brands fa-linkedin"
                />
              </a>
              <a href="https://twitter.com/yashchokhani6" target="_blank">
                <FontAwesomeIcon
                  className="w-6 h-6 text-blue-500"
                  icon="fa-brands fa-twitter"
                />
              </a>
            </div>
          </div>
          {/* ionfoCard */}
          <div className=" basis-full md:basis-1/2">
            <div className="rounded-xl font-serif bg-white shadow-2xl text-blue-400 p-10">
              <p className="text-left ">
                1&nbsp;className <b>Person</b> &#123;
              </p>
              <p className="text-left ">
                2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() &#123;
              </p>
              <p className="text-left">
                3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name=
                <b> &ldquo;YASH CHOKHANI&rdquo;</b>;
              </p>
              <p className="text-left ">
                4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits=[
                <b> &ldquo;BACKEND&rdquo;</b>,<b> &ldquo;REACT&rdquo;</b>];
              </p>
              <p className="text-left ">
                5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age=20;
              </p>
              <p className="text-left ">6&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
              <p className="text-left ">7&nbsp;&#125;</p>
            </div>
          </div>
          {/* infocard ends */}
        </div>
        {/* main content ends */}
        {/* //read */}
        <h1 className="text-center  text-blue-400 font-bold text-5xl">
          Things I Love
        </h1>
        {/* //md:mx-40 my-4  */}
        <div className=" w-full flex flex-col md:flex-row justify-center  content-center  md:space-x-5">
          {boxContent.map((item) => {
            return (
              <>
                <div className="my-4 max-w-sm rounded-lg hover:-translate-y-10 ease-in duration-300  border border-gray-200  shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  <div href="#" className="text-center w-100 ">
                    {item.logo}
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-blue-700 dark:text-white">
                      {item.title}{" "}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.desceiption}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
