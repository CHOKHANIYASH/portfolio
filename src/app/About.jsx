import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profilePhoto from "./assets/images/profilePhoto.png";
export default function About() {
  return (
    <>
      <div id="About" className="scroll-my-16">
        <h1 className="text-center  text-blue-400  font-bold text-5xl">
          About
        </h1>
        <div className="w-full flex flex-col md:flex-row dark:bg-gray-800 bg-blue-200">
          <div className=" flex place-content-center ">
            <Image
              className="rounded-full  w-64 h-64 m-10 border-8 border-solid border-white"
              src={profilePhoto}
              alt="profile photo"
              loading="lazy"
            />
          </div>
          <div className="w-full p-2 md:w-5/6  place-self-center ">
            <div className="flex flex-col dark:text-white">
              <div className="place-self-center  ">
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
                  interface to managing the back-end infrastructure.
                </p>
              </div>
              <div className="place-self-center">
                <p>
                  I also love doing open source development,I am a GSSoC 2023
                  contributor
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="relative z-[-1] text-cyan-500 w-100">
          <h2 className="text-center  text-blue-400 font-bold text-3xl">
            My Skills
          </h2>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: 50, left: "80%", fontSize: 23 }}
          >
            HTML5
          </p>
          <p
            className="absolute t-0 left-0 text-2xl"
            style={{ top: 0, left: 0, fontSize: 25 }}
          >
            Git
          </p>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: 200, left: -60, fontSize: 14 }}
          >
            CSS3
          </p>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: "30%", left: "35%", fontSize: 18 }}
          >
            Firebase
          </p>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: 40, left: "75%", fontSize: 12 }}
          >
            EJS
          </p>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: 380, left: "85%", fontSize: 18 }}
          >
            Express
          </p>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: 320, left: "65%", fontSize: 18 }}
          >
            NextJs
          </p>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: 350, left: 150, fontSize: 25 }}
          >
            MongoDB
          </p>
          <p
            className="absolute t-0 left-5 text-lg"
            style={{ top: 120, left: "22%", fontSize: 12 }}
          >
            tailwindCSS
          </p>
        </div>
        <div className="w-full  z-10 text-blue-400 grid grid-cols-3 md:gap-4 place-items-center h-96">
          <FontAwesomeIcon
            icon="fa-brands fa-node "
            className="w-20 h-20 md:w-40 md:h-40"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-java"
            className="w-20 h-20 md:w-40 md:h-40"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-react "
            className="w-20 h-20 md:w-40 md:h-40"
          />
        </div>
      </div>
    </>
  );
}
