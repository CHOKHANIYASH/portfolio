"use client";
import React from "react";
import "./slider.css";
import { useState, useEffect, useRef } from "react";
import {
  faChevronRight,
  faChevronLeft,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import yelpcamp from "../../public/assets/images/yelpcamp.png";
import notes from "../../public/assets/images/notes.png";
import restro from "../../public/assets/images/restro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Projects() {
  const projects = [
    {
      title: "YelpCamp",
      description:
        "It is a camping location viewing website with their per night staying cost. people can view other peoples review or can login and write thier own review. people can login and post their own camping sites information.",
      repo: "https://github.com/CHOKHANIYASH/yelp-camp",
      demo: "https://yelp-camp-ruddy.vercel.app/",
      image: yelpcamp,
    },
    {
      title: "Notes",
      description:
        "It's a notes taking website Tools or FrameWorks use are Frontend --> ReactJS,Bootstrap Backend --> NodeJS,ExpressJS,MongoDB,PassportJS",
      repo: "https://github.com/CHOKHANIYASH/notes-app-backend",
      demo: "https://notes-app-frontend-two.vercel.app/",
      image: notes,
    },
    {
      title: "Restaurant Mneu Website",
      description:
        "It's a restaurant website project which I have made during one of my HTML,CSS,Javascript course.",
      repo: "https://github.com/CHOKHANIYASH/DAVID-CHU-S-CHINA-BISTRO-RESTAURANT-WEBSITE",
      demo: "https://chokhaniyash.github.io/DAVID-CHU-S-CHINA-BISTRO-RESTAURANT-WEBSITE/",
      image: restro,
    },
  ];
  let delay = 4500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, delay, projects.length]);
  return (
    <div id="Projects" className="scroll-my-16">
      <h1 className="text-center  text-blue-400 font-bold text-5xl">
        Projects
      </h1>
      <div className="slideshow ">
        <div className="slideshowSlider">
          {projects.map((prj, idx) => (
            <div
              className={`slide relative  m-10 rounded-lg bg-gray-50  p-6 pl-20 shadow-lg flex flex-col md:flex-row dark:bg-slate-700 ${
                index === idx ? " " : "hidden"
              } `}
              key={idx}
            >
              {/* Left Arrow */}
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={() => {
                    idx - 1 >= 0
                      ? setIndex(idx - 1)
                      : setIndex(projects.length - 1);
                  }}
                  className="cursor-pointer"
                />
              </div>
              {/* Right Arrow */}
              <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={() => {
                    idx + 1 < projects.length ? setIndex(idx + 1) : setIndex(0);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <div className="lg:w-1/2">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {prj.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {prj.description}
                </p>
                <a href={prj.repo} target="_blank">
                  <FontAwesomeIcon
                    className="text-3xl mr-1 text-blue-500"
                    icon={faGithub}
                  />
                </a>
                <a href={prj.demo} target="_blank">
                  <FontAwesomeIcon
                    className="text-3xl text-blue-500"
                    icon={faGlobe}
                  />
                </a>
              </div>
              <div>
                <Image
                  className="lg:w-1/2  ml-auto"
                  src={prj.image}
                  alt="yelpcamp"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="slideshowDots text-center">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`inline-block m-1 cursor-pointer h-4 w-4 rounded-full ${
                index === idx ? " bg-black" : "bg-blue-700"
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
