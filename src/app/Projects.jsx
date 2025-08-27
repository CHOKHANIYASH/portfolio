"use client";
import "./slider.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Carousal from "./Carousal";
import Atag from "@/components/util/Atag";
import axios from "axios";
import { FaGithub, FaGlobe } from "react-icons/fa";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get(
        "https://chokhaniyash-public-bucket.s3.ap-south-1.amazonaws.com/projects.json"
      );
      console.log(data);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div id="Projects" className="">
      <h1 className="text-5xl font-bold text-center text-blue-400 ">
        Projects
      </h1>
      <div className="m-5 md:hidden">
        <CarousalSmall projects={projects} />
      </div>
      <div className="m-10 max-md:hidden">
        <CarousalLarge projects={projects} slidesToShow={2} arrows={true} />
      </div>
    </div>
  );
}

const CarousalLarge = ({ projects, slidesToShow, arrows }) => {
  return (
    <>
      <Carousal
        slidesToShow={slidesToShow}
        className="mb-5 font-mono"
        dots={true}
        arrows={arrows}
      >
        {projects &&
          projects.map((prj, idx) => (
            <div key={idx} className="">
              <div
                className={`m-5 p-10 rounded-lg bg-gray-100  h-96 shadow-lg  grid grid-flow-row md:grid-cols-2 dark:bg-slate-700`}
              >
                <div className="grid-cols-1 mr-1 overflow-scroll overflow-x-hidden no-scrollbar">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {prj.title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {prj.description}
                  </p>

                  <Atag link={prj.repo} Icon={FaGithub} />
                  <Atag link={prj.demo} Icon={FaGlobe} />
                </div>
                <div className="relative ">
                  <Image
                    fill={true}
                    src={prj.image}
                    sizes="(max-width: 1000px) 100vw 100vh"
                    alt={prj.title}
                    className="object-contain w-auto"
                  />
                </div>
              </div>
            </div>
          ))}
      </Carousal>
    </>
  );
};

const CarousalSmall = ({ projects }) => {
  return (
    <>
      <Carousal slidesToShow={1} className="mb-5 font-mono " dots={true}>
        {projects.map((prj, idx) => (
          <div key={idx}>
            <div
              className={`m-5 p-5 rounded-lg bg-gray-100 shadow-lg  grid grid-flow-row dark:bg-slate-700 overflow-scroll overflow-x-hidden no-scrollbar h-96`}
            >
              <div className="">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {prj.title}
                </h5>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                  {prj.description}
                </p>
                <Atag link={prj.repo} Icon={FaGithub} />
                <Atag link={prj.demo} Icon={FaGlobe} />
              </div>
              <div className="">
                <Image
                  width={96}
                  height={96}
                  className="w-2/3"
                  src={prj.image}
                  alt="yelpcamp"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousal>
    </>
  );
};
