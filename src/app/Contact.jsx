"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { faCircleCheck, faHandshake } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { from_name: name, name, email, message, reply_to: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setMessage("");
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 3000);
  }
  return (
    <div id="Contact" className="scroll-my-16">
      <section className="bg-white dark:bg-gray-900">
        <h2 className="mb-4 text-blue-400 text-5xl tracking-tight font-extrabold text-center">
          Contact
        </h2>
        <p className=" mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Let&apos;s get in touch
        </p>
        <p className="font-bold text-blue-300 text-lg text-center dark:text-white">
          email:yashchokhani95@gmail.com
        </p>
        <div className="grid grid-flow-row md:grid-cols-2 m-4">
          <div className="text-lg md:my-28  md:ml-36 bg-blue-400 rounded-2xl grid ">
            <FontAwesomeIcon
              className=" text-white place-self-center"
              icon={faHandshake}
              size="10x"
            />
          </div>
          <div className="py-8  shadow-2xl  dark:shadow-gray-800 md:mr-28	mb-8 lg:py-16 px-4  max-w-screen-md">
            <form action="#" className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-z text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  value={email}
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  value={name}
                  type="text"
                  id="subject"
                  onChange={(e) => setName(e.target.value)}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  value={message}
                  id="message"
                  rows="6"
                  onChange={(e) => setMessage(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              {!submit ? (
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              ) : (
                <FontAwesomeIcon
                  className="text-3xl text-blue-500"
                  icon={faCircleCheck}
                />
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
