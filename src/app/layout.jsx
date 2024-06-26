import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./Navbar";
import { Theme } from "./Theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDatabase,
  faGears,
  faCode,
  faJ,
  fas,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faLinkedin,
  faGithub,
  faJava,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faMedium,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faTwitter,
  faFontAwesome,
  faLinkedin,
  faGithub,
  faJava,
  faDatabase,
  faGears,
  faCode,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faHandshake,
  faMedium,
  faAws
);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "yash chokhani",
  description: "yash chokhani portfolio website",
};
export default function RootLayout({ children }) {
  config.autoAddCss = false;
  return (
    <html lang="en" className="scroll-smooth">
      <body className=" dark:bg-gray-900">
        <Theme>
          <NavBar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
