import Ctabutton from "../atoms/ctabutton";

export default ({
  maintitle,
  body,
  title1,
  title2,
  title3,
  link1,
  link2,
  link3,
}) => {
  console.log("DEBUG title1: ", JSON.stringify(title1));

  const plans = [
    {
      image: "/svgcoffee.png",
      text: title1 ? title1 : "",
      href: link1 ? link1 : "",
    },
    {
      image: "/guyandscreen.svg",
      text: title2 ? title2 : "",
      href: link2 ? link2 : "",
    },
    {
      image: "/pngfinding.png",
      text: title3 ? title3 : "",
      href: link3 ? link3 : "",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            {maintitle}
          </h3>
          <div className="mt-3 max-w-xl">
            <p>{body}</p>
          </div>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
            >
              {/* SVG Image from url */}
              <div className="flex items-center justify-center h-full">
                <img className="w-80 h-auto" src={item.image} alt="Fullstack" />
              </div>

              {/* Button */}
              <div className="flex-1 flex items-end justify-center pt-16">
                <Ctabutton text={item.text} href={item.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
