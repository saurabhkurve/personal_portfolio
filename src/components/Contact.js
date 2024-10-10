import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const name = "Saurabh Kurve";
  const year = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-40 no-horizontal-scroll"
      >
        <form
          method="POST"
          action="https://getform.io/f/aqonrjya"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below or shoot me an email -
              saurabhkurve100@gmail.com
            </p>
          </div>

          <input
            className="bg-[#ccd6f6] p-2 rounded-md"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="my-4 p-2 rounded-md bg-[#ccd6f6]"
            type="email"
            name="email"
            placeholder="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded-md "
            name="message"
            rows="10"
          ></textarea>
          <button className="text-white border-2  hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
        {isScrolled && (
          <button
            type="button"
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-4 bg-pink-600 text-white p-4 mb-10 rounded-full shadow-lg hover:bg-pink-700"
            title="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </div>
      <div className="bg-[#0a192f] text-gray-300 font-bold flex justify-center items-center p-4 no-horizontal-scroll">
        © {year} &nbsp; Designed by &nbsp;
        <a
          href="https://www.linkedin.com/in/saurabhkurve"
          className="text-pink-600 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
           {name}
        </a>
      </div>
    </>
  );
};

export default Contact;
