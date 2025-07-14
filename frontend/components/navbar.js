import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default ({ data }) => {
  const [state, setState] = useState(false);

  const { asPath } = useRouter();

  const navigation = data;

  return (
    <nav className="bg-white border-b w-full sticky top-0 lg:sticky z-50 lg:text-sm lg:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <a href="/">
            <Image
              src="/Freemodel-logo.png"
              width={180}
              height={80}
              alt="logo"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* List of items */}
        <div
          className={`flex-1 pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-black hover:text-FM-orange lg:text-base"
                >
                  <a
                    href={item.path}
                    className={`${
                      asPath === item.path ? "text-FM-orange" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}

            <div className="space-y-3 items-center gap-x-6 lg:flex lg:space-y-0">
              <li>
                <a
                  href="/request-estimate"
                  className="block py-2 px-2 w-40 mx-auto text-center text-black bg-white border-FM-blue border-2 hover:bg-FM-blue hover:text-white active:bg-indigo-700 active:shadow-none rounded-lg shadow lg:inline lg:text-base"
                >
                  Request Estimate
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
