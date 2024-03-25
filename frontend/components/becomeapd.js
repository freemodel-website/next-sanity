export default ({ title, texth, button, texth2, button2 }) => {
  const contactMethods = [
    {
      title: texth,
      desc: "",
      link: {
        name: button.button,
        href: button.url,
      },
    },
    {
      title: texth2,
      desc: "",
      link: {
        name: button2.button,
        href: button2.url,
      },
    },
  ];

  return (
    <section className="py-14 bg-FM-blue">
      <div className="max-w-screen-xl mx-auto px-4 text-slate-200 gap-12 md:px-8 lg:flex">
        <div className="max-w-md">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            {title}
          </h3>
          <p className="mt-3"></p>
        </div>
        <div>
          <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
              >
                <h4 className="text-white text-xl font-medium xl:text-xl">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
                <a
                  href={item.link.href}
                  target="_blank"
                  className="flex items-center text-right justify-start gap-1 text-sm text-white duration-150 font-medium"
                >
                  <span className="flex cursor-pointer text-lg py-3 px-6 bg-FM-orange hover:bg-orange-600 active:bg-gray-500 active:shadow-none rounded-lg shadow">
                    {item.link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-8 h-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
