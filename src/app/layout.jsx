import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./Navbar";
import { Theme } from "./Theme";

export const metadata = {
  title: "yash chokhani",
  description: "yash chokhani portfolio website",
};
export default function RootLayout({ children }) {
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
