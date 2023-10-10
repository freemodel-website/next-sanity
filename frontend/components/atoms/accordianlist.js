import { useRef, useState } from "react";

const Accordianlist = ({ faqsList }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  const lines = faqsList.a.split("\n");

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b "
      key={faqsList.q}
      onClick={handleOpenAnswer}
    >
      <h4
        className={`cursor-pointer pb-5 flex items-center justify-between text-lg 
      ${
        state ? "text-FM-orange" : "text-black"
      } font-bold hover:text-FM-orange`}
      >
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 hover:text-FM-orange ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 hover:text-FM-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FaqSection({ faqsList }) {
  return (
    <section className="leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        {faqsList.map((item) => (
          <Accordianlist key={item.a} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
