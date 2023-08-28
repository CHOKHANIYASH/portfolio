"use client";
import { useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const navigation = [
  { name: "Home", href: "#Home", current: false },
  { name: "About me", href: "#About", current: false },
  { name: "Projects", href: "#Projects", current: false },
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
      className="w-100 sticky z-10 text-blue-400 dark:text-white dark:bg-gray-800 shadow-lg top-0 left-0 right-0 bg-white "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                {mounted === true ? (
                  <div className="sm:hidden cursor-pointer absolute right-0 m-1">
                    {isLight ? (
                      <FontAwesomeIcon
                        onClick={toggle}
                        size="2x"
                        icon={faSun}
                      />
                    ) : (
                      <FontAwesomeIcon
                        onClick={toggle}
                        size="2x"
                        icon={faMoon}
                      />
                    )}
                  </div>
                ) : null}
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
                  <div className="hidden cursor-pointer sm:block sm:ml-auto sm:mt-1">
                    {isLight ? (
                      <FontAwesomeIcon
                        onClick={toggle}
                        size="2x"
                        icon={faSun}
                      />
                    ) : (
                      <FontAwesomeIcon
                        onClick={toggle}
                        size="2x"
                        icon={faMoon}
                      />
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
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
