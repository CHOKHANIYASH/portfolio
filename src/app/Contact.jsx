"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCircleCheck, FaHandshake } from "react-icons/fa6";
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
        <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-center text-blue-400">
          Contact
        </h2>
        <p className="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Let&apos;s get in touch
        </p>
        <p className="text-lg font-bold text-center text-blue-300 dark:text-white">
          email:yashchokhani95@gmail.com
        </p>
        <div className="grid grid-flow-row m-4 md:grid-cols-2">
          <div className="flex items-center justify-center bg-blue-400 md:my-28 md:ml-36 rounded-2xl ">
            <FaHandshake className="text-white w-36 h-36 md:w-60 md:h-60" />
          </div>
          <div className="max-w-screen-md px-4 py-8 mb-8 shadow-2xl dark:shadow-gray-800 dark:bg-slate-900 md:mr-28 lg:py-16">
            <form action="#" className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-z dark:text-gray-300"
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
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                  className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              ) : (
                <FaCircleCheck className="w-12 h-12 text-blue-500" />
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
