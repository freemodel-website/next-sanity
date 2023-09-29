import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default ({ data }) => {
  console.log(data);

  const [state, setState] = useState(false);

  const { asPath } = useRouter();

  const navigation = data;

  // const navigation = [
  //   { title: "How It Works", path: "/how-it-works" },
  //   { title: "For Agents", path: "/for-agents" },
  //   { title: "Projects", path: "/projects" },
  //   { title: "Locations", path: "/locations" },
  //   { title: "Our Team", path: "/team" },
  // ];

  return (
    <nav className="bg-white border-b w-full sticky top-0 md:sticky z-50 md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <Image
              src="/Freemodel-logo.png"
              width={180}
              height={80}
              alt="logo"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
          <div className="md:hidden">
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
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-black hover:text-FM-orange">
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

            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <a
                  href="/lets-talk"
                  className="block py-3 px-4 font-medium text-center text-white bg-FM-orange hover:bg-orange-600 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Let's Talk
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
