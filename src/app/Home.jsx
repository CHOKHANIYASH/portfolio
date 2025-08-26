import React from "react";
import dash from "../../public/assets/images/dash.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Atag from "@/components/util/Atag";

export default function Home() {
  const boxContent = [
    {
      logo: (
        <FontAwesomeIcon
          className="w-20 h-20 p-4 mt-2 text-white bg-blue-400 border-2 rounded-full"
          icon="fa-solid fa-code"
          size="3x"
        />
      ),
      title: "Backend",
      desceiption:
        "What fascinates me about backend development is the efficiency and power behind it. Whether it's automating complex workflows or seamlessly handling numerous API requests, the backend does the heavy lifting with precision. The ability to optimize performance using different cloud architectures and scale effortlessly across systems is what makes backend development so intriguing to me.",
    },
    {
      logo: (
        <FontAwesomeIcon
          className="w-20 h-20 p-4 mt-2 text-white bg-blue-400 border-2 rounded-full"
          icon="fa-brands fa-java"
          size="3x"
        />
      ),
      title: "Java",
      desceiption:
        "Java was the first programming language I learned, and it remains my favorite. I find its versatility and strong object-oriented principles particularly appealing. I often use Java for my data structures and algorithms coding, as it provides a robust framework for tackling complex problems.",
    },
    {
      logo: (
        <FontAwesomeIcon
          className="w-20 h-20 p-4 mt-2 text-white bg-blue-400 border-2 rounded-full"
          icon="fa-solid fa-database"
          size="3x"
        />
      ),
      title: "Databases",
      desceiption:
        "As a developer databases are one of my favourite topic.I have worked with many databases like mongoDB,postgresql,dynamodb and I think databases are the core of any application.Figuring out which type of database and when to use it in project make it more interesting as a developer.",
    },
  ];
  const socials = [
    {
      name: "Github",
      link: "https://github.com/CHOKHANIYASH",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yash-chokhani-55b27b225/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Medium",
      link: "https://medium.com/@yashchokhani95",
      icon: "fa-brands fa-medium",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/yashchokhani6",
      icon: "fa-brands fa-twitter",
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
        <div className="flex flex-col justify-between p-10 m-4 space-x-5 md:m-40 md:flex-row">
          <div className="mb-4 font-mono basis-full md:basis-1/2">
            <h3 className="text-xl text-left dark:text-white max-md:mb-1">
              Hello,I&apos;m
            </h3>
            <h1 className="text-4xl font-bold text-left text-blue-500 max-md:mb-1">
              YASH CHOKHANI
            </h1>
            <h2 className="mb-4 text-lg text-left dark:text-white">
              Backend Developer
            </h2>
            <div className="flex space-x-2 social-handles">
              {socials.map((social, index) => (
                <Atag key={index} link={social.link} icon={social.icon} />
              ))}
            </div>
          </div>
          <InfoCardLarge />
        </div>
        {/* main content ends */}
        <InfoCardSmall />
        {/* //read */}
        <h1 className="mb-10 text-5xl font-bold text-center text-blue-400 max-md:my-5">
          Things I Love
        </h1>
        {/* //md:mx-40 my-4  */}
        <div className="flex flex-col content-center justify-center w-full md:flex-row md:space-x-5 max-md:p-5">
          {boxContent.map((item) => {
            return (
              <>
                <div className="max-w-sm py-4 my-4 duration-300 ease-in border border-gray-200 rounded-lg shadow-sm shadow-slate-500 dark:shadow-white hover:-translate-y-10 max-md:hover:-translate-y-5 dark:border-gray-700 dark:bg-slate-800">
                  <div href="#" className="text-2xl text-center w-100 ">
                    {item.logo}
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-blue-700 dark:text-white">
                      {item.title}{" "}
                    </h5>

                    <p className="mb-3 font-mono text-gray-700 dark:text-gray-400">
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

const InfoCardLarge = () => {
  return (
    <>
      <div className=" basis-full md:basis-1/2 max-md:hidden">
        <div className="p-5 font-mono text-blue-400 bg-white shadow-2xl rounded-xl dark:bg-slate-800">
          <p className="text-left ">
            1&nbsp;className <b>Person</b> &#123;
          </p>
          <p className="w-full text-left">
            2 <text className="ml-12">constructor() &#123;</text>
            {/* 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() &#123; */}
          </p>
          <p className="text-left">
            3
            <text className="ml-20">
              this.name=
              <b>&ldquo;YASH CHOKHANI&rdquo;</b>;
            </text>
            {/* 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name=
                <b>&ldquo;YASH CHOKHANI&rdquo;</b>; */}
          </p>
          <p className="text-left ">
            4
            <text className="ml-20">
              this.traits=[
              <b>&ldquo;BACKEND&rdquo;</b>,<b>&ldquo;REACT&rdquo;</b>];
            </text>
            {/* 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits=[
                <b>&ldquo;BACKEND&rdquo;</b>,<b>&ldquo;REACT&rdquo;</b>]; */}
          </p>
          <p className="text-left ">
            5
            <text className="ml-20">
              this.age=
              {new Date().getFullYear() - 2003};
            </text>
          </p>
          <p className="text-left ">6&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
          <p className="text-left ">7&nbsp;&#125;</p>
        </div>
      </div>
    </>
  );
};

const InfoCardSmall = () => {
  return (
    <>
      <div className="m-4 mt-0 md:hidden">
        <div className="py-4 pl-4 font-mono text-blue-400 bg-white shadow-2xl rounded-xl dark:bg-slate-800">
          <p className="text-left ">
            className <b>Person</b> &#123;
          </p>
          <p className="text-left ">&nbsp;&nbsp; constructor() &#123;</p>
          <p className="text-left">
            &nbsp;&nbsp;&nbsp;&nbsp; this.name=
            <b>&ldquo;YASH CHOKHANI&rdquo;</b>;
          </p>
          <p className="text-left ">&nbsp;&nbsp;&nbsp;&nbsp; this.traits=</p>
          <p className="text-left ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [
            <b>&ldquo;BACKEND&rdquo;</b>,<b>&ldquo;REACT&rdquo;</b>];
          </p>
          <p className="text-left ">&nbsp;&nbsp;&nbsp;&nbsp; this.age=20;</p>
          <p className="text-left ">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
          <p className="text-left ">&nbsp;&#125;</p>
        </div>
      </div>
    </>
  );
};
