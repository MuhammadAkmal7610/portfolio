import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-[70px] w-full" id="contact">
        <h2 className="text-[40px] font-bold mb-3">
          <span className="text-secondary">My</span>{" "}
          <span className="text-tertiary ">Contact</span>
        </h2>
        <p className="text-paraColor lg:w-[50%]">
          Discover the range of services I offer to bring your digital vision to
          life. From crafting beautiful front-end designs to building robust
          back-end systems, I provide comprehensive solutions tailored to your
          needs. Explore how I can help elevate your online presence and drive
          your business forward.
        </p>
        <form className="w-full flex flex-col gap-[20px] mt-9">
          <input
            type="text"
            className="focus:outline-none p-2  bg-transparent border-paraColor border-[0.3px] text-paraColor"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="focus:outline-none p-2  bg-transparent border-paraColor border-[0.3px] text-paraColor"
            placeholder="Enter Your Email"
          />
          <textarea
            name=""
            id=""
            className="focus:outline-none p-2 resize-none bg-transparent border-paraColor border-[0.3px] text-paraColor"
            placeholder="Enter Your Message"
            rows={4}
          ></textarea>
          <button className="px-2 py-3 bg-tertiary text-secondary rounded-md w-fit">
            Send Message
          </button>
        </form>
      </div>
      {/* <div className="w-full h-[1px] rounded-lg bg-[#48453f]" /> */}
    </>
  );
};

export default Contact;
