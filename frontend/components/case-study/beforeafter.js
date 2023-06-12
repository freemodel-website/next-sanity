export default function BeforeAfter({ before, after, morePhotos }) {
  const left = [
    {
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
  ];

  const right = [
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <section className="pt-14 pb-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12">
          <div className="grid gap-8 grid-cols-2 ">
            {/*  */}
            <ul className="grid gap-8">
              <li className="flex justify-center">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  Before
                </h1>
              </li>
              {left.map((item, idx) => (
                <li
                  key={idx}
                  className={
                    idx % 2 === 0 ? "flex justify-start" : "flex justify-end"
                  }
                >
                  <div className="w-full h-60 sm:h-52 md:h-96">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                </li>
              ))}
            </ul>
            {/*  */}
            {/*  */}
            <ul className="grid gap-8">
              <li className="flex justify-center">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  After
                </h1>
              </li>
              {right.map((item, idx) => (
                <li
                  key={idx}
                  className={
                    idx % 2 === 0 ? "flex justify-start" : "flex justify-end"
                  }
                >
                  <div className="w-full h-60 sm:h-52 md:h-96">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                </li>
              ))}
            </ul>
            {/*  */}
          </div>
        </div>
      </div>

      {/* More photos section  */}
      {morePhotos && (
        <div className="mt-24">
          <div className="flex justify-start max-w-screen-xl mx-auto md:px-8 mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              More Photos
            </h1>
          </div>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul className="grid gap-8 grid-cols-2 ">
              {/*  */}

              {left.map((item, idx) => (
                <li
                  key={idx}
                  className={
                    idx % 2 === 0 ? "flex justify-start" : "flex justify-end"
                  }
                >
                  <div className="w-full h-60 sm:h-52 md:h-96">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                </li>
              ))}

              {/*  */}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
