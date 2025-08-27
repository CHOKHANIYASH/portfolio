"use client";
import { useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
const navigation = [
  { name: "Home", href: "#Home", current: false },
  { name: "About me", href: "#About", current: false },
  { name: "Projects", href: "#Projects", current: false },
  { name: "Coding Profiles", href: "#CodingProfiles", current: false },
  { name: "Contact", href: "#Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const isLight =
    theme === "light" || (theme === "system" && systemTheme === "light");
  function toggle() {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 left-0 right-0 z-10 text-blue-400 bg-white shadow-lg dark:text-white dark:bg-gray-800 "
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-blue-400 rounded-md hover:bg-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <Image
                    className="block w-auto h-8 lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden w-auto h-8 lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue-900 text-white"
                            : "text-blue-300 hover:bg-blue-200 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                {mounted === true ? (
                  <div className="absolute right-0 cursor-pointer x">
                    {isLight ? (
                      <FaSun onClick={toggle} size={30} />
                    ) : (
                      <FaMoon onClick={toggle} size={30} />
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue-900 text-white"
                      : "text-blue-300 hover:bg-blue-200 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
