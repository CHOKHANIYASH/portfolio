"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CodingProfiles() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a skeleton/loading placeholder
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const leetcodeUrl =
    currentTheme === "light"
      ? "https://leetcard.jacoblin.cool/yashchokhani95?ext=contest&theme=light"
      : "https://leetcard.jacoblin.cool/yashchokhani95?ext=contest&theme=dark";

  const codeforcesUrl =
    currentTheme === "light"
      ? "https://codeforces-readme-stats.vercel.app/api/card?username=yash_chokhani"
      : "https://codeforces-readme-stats.vercel.app/api/card?username=yash_chokhani&theme=dark";

  return (
    <div id="CodingProfiles" className="">
      <h1 className="mb-6 text-5xl font-bold text-center text-blue-400">
        Coding Profiles
      </h1>
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        <a
          className="m-5"
          href="https://leetcode.com/u/yashchokhani95/"
          target="_blank"
        >
          <img
            src={leetcodeUrl}
            alt="LeetCode Stats"
            className="shadow-lg rounded-xl"
          />
        </a>
        <a
          className="m-5"
          href="https://codeforces.com/profile/yash_chokhani"
          target="_blank"
        >
          <img
            src={codeforcesUrl}
            alt="Codeforces stats"
            className="w-full shadow-lg rounded-xl"
          />
        </a>
      </div>
    </div>
  );
}
