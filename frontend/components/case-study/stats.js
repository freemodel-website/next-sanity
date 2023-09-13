export default function Stats({
  data: {
    title,
    dollarprofit,
    percentreturn,
    soldfor,
    asis,
    renovationprice,
    location,
    locationwritein,
    beds,
    baths,
    durationmonths,
  },
}) {
  return (
    <div className="px-4 py-14 mx-auto bg-FM-blue  md:px-24 lg:px-28 ">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2 text-center sm:text-left">
            <h2 className=" mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none ">
              {title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row flex-wrap ">
          <div className="max-w-md text-center flex-grow-0">
            {dollarprofit && (
              <h6 className="mb-2 font-semibold font-sans text-2xl sm:text-3xl text-white">
                {dollarprofit} Profit
              </h6>
            )}
            {percentreturn && (
              <h6 className="mb-2 font-semibold font-sans text-2xl sm:text-3xl text-white">
                {percentreturn} Return
              </h6>
            )}
          </div>
          {soldfor && (
            <div className="max-w-md text-center flex-grow">
              <h6 className="mb-2 font-light font-sans text-2xl text-white">
                SOLD
              </h6>
              <h6 className="mb-2 font-light font-sans text-2xl text-white ">
                {soldfor}
              </h6>
            </div>
          )}

          {asis && (
            <div className="max-w-md text-center flex-grow">
              <h6 className="mb-2 font-light font-sans text-2xl text-white">
                AS-IS
              </h6>
              <h6 className="mb-2 font-light font-sans text-2xl text-white ">
                {asis}
              </h6>
            </div>
          )}

          {renovationprice && (
            <div className="max-w-md text-center flex-grow">
              <h6 className="mb-2 font-light font-sans text-2xl text-white">
                RENOVATION
              </h6>
              <h6 className="mb-2 font-light font-sans text-2xl text-white ">
                {renovationprice}
              </h6>
            </div>
          )}

          <div className="max-w-md text-center flex-grow">
            <h6 className="mb-2 font-light font-sans text-2xl text-white">
              LOCATION
            </h6>
            <h6 className="mb-2 font-light font-sans text-2xl text-white ">
              {locationwritein ? locationwritein : location.name}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
