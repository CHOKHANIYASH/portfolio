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
import imagetagger from "../../public/assets/images/imagetagger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Carousal from "./Carousal";
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
      description: "It's a Full stack(MERN) notes taking website ",
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
    {
      title: "Image Tagging Website",
      description:
        " an image tagging website utilizing AWS Rekognition. It features a fully serverless architecture built with Node.js and Express.js, seamlessly integrating various AWS services to provide a robust and scalable solution.",
      repo: "https://github.com/CHOKHANIYASH/ImageTagger",
      demo: "https://image-tagger-sigma.vercel.app/11b36d5a-e021-70ec-bd34-bbb29cb83bfb",
      image: imagetagger,
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
    <div id="Projects" className="">
      <h1 className="text-5xl font-bold text-center text-blue-400 ">
        Projects
      </h1>
      <div className="md:hidden">
        <Carousal slidesToShow={1} className="mb-5 font-mono " dots={true}>
          {projects.map((prj, idx) => (
            <div key={idx}>
              <div
                className={`m-5 p-5 rounded-lg bg-gray-100 shadow-lg  grid grid-flow-row dark:bg-slate-700`}
              >
                <div className="">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {prj.title}
                  </h5>
                  <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                    {prj.description}
                  </p>
                  <a href={prj.repo} target="_blank">
                    <FontAwesomeIcon
                      className="mr-1 text-3xl text-blue-500"
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
                <div className="">
                  <Image className="w-2/3" src={prj.image} alt="yelpcamp" />
                </div>
              </div>
            </div>
          ))}
        </Carousal>
      </div>
      <div className="max-md:hidden">
        <Carousal slidesToShow={2} className="mb-5 font-mono" dots={true}>
          {projects.map((prj, idx) => (
            <div key={idx}>
              <div
                className={`m-5 mx-10 p-10 rounded-lg bg-gray-100  h-96 shadow-lg  grid grid-cols-2 dark:bg-slate-700`}
              >
                <div className="">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {prj.title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {prj.description}
                  </p>
                  <a href={prj.repo} target="_blank">
                    <FontAwesomeIcon
                      className="mr-1 text-3xl text-blue-500"
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
                <div className="">
                  <Image className="" src={prj.image} alt="yelpcamp" />
                </div>
              </div>
            </div>
          ))}
        </Carousal>
      </div>
    </div>
  );
}
