import Ctabutton from "./atoms/ctabutton";

export default function Sixgrid() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 px-10 sm:px-0 md:mx-auto text-center lg:max-w-3xl md:mb-12">
        <h2 className="mb-10 text-3xl sm:text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          We remove the barriers to pre-sale renovations. Your clients’ homes
          sell faster—and for more.
        </h2>
      </div>
      <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
        {/* Section 1 */}
        <div className="text-center px-14">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
            <img src="/Icon-award-wreath@4x.png" alt="Freemodel" />
          </div>
          <h6 className="text-2xl mb-2 font-semibold leading-5">
            We do it all
          </h6>
          <p className="max-w-sm mb-3 text-sm text-gray-900 sm:mx-auto">
            We design, manage, and pay for remodels and pre-sales prep
          </p>
        </div>
        {/* Section 2 */}
        <div className="text-center px-14">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
            <img src="/Icon-award-wreath@4x.png" alt="Freemodel" />
          </div>
          <h6 className="text-2xl mb-2 font-semibold leading-5">
            Local management
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Our project directors live in the area and know local taste
          </p>
        </div>
        {/* Section 3 */}
        <div className="text-center px-14">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
            <img src="/Icon-award-wreath@4x.png" alt="Freemodel" />
          </div>
          <h6 className="text-2xl mb-2 font-semibold leading-5">
            No work required
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Our concierge service means you and your clients do nothing
          </p>
        </div>
        {/* Section 4 */}
        <div className="text-center px-14">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
            <img src="/Icon-award-wreath@4x.png" alt="Freemodel" />
          </div>
          <h6 className="text-2xl mb-2 font-semibold leading-5">
            Sellers love us
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            We help their properties sell faster and for more
          </p>
        </div>
        {/* Section 5 */}
        <div className="text-center px-14">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
            <img src="/Icon-award-wreath@4x.png" alt="Freemodel" />
          </div>
          <h6 className="text-2xl mb-2 font-semibold leading-5">
            Agents love us, too
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Your clients are happy, so you look like a hero
          </p>
        </div>
        {/* Section 6 */}
        <div className="text-center px-14">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
            <img src="/Icon-award-wreath@4x.png" alt="Freemodel" />
          </div>
          <h6 className="text-2xl mb-2 font-semibold leading-5">
            No cash up front
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Homeowners pay out of escrow when their home sells
          </p>
        </div>
      </div>

      <div className="max-w-xl text-center mt-20 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <Ctabutton href="javascript:void(0)" text="Let's Talk" />
      </div>
    </div>
  );
}
