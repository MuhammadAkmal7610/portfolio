import React from "react";
import ClientCard from "./ClientCard";
const clients = [
  {
    title: "John Smith",
    from: "USA",
    para: "Muhammad Hussain's expertise in web development is truly exceptional. He transformed our outdated website into a modern, responsive platform that has significantly improved our user engagement. His attention to detail and commitment to quality are unparalleled. Highly recommended!",
  },
  {
    title: "Emily Chen",
    from: "Canada",
    para: "Working with Muhammad was an absolute pleasure. He took the time to understand our unique needs and delivered a backend solution that exceeded our expectations. His ability to troubleshoot and optimize our database was impressive, and we couldn't be happier with the results.",
  },
  {
    title: "Arjun Gupta",
    from: "India",
    para: "Muhammad Hussain's front-end development skills are top-notch. He created a beautiful, interactive website for our startup that perfectly captures our brand's essence. His responsiveness and dedication to our project made the whole process smooth and enjoyable.",
  },
  {
    title: "Sophie Martin",
    from: "France",
    para: "From the initial consultation to the final launch, Muhammad provided exceptional service. His expertise in responsive web design ensured our site looks fantastic on all devices. We're thrilled with the increased traffic and positive feedback we've received since the redesign.",
  },
];
const ClientReviews = () => {
  return (
    <>
      <div className="py-[70px] w-full" id="client">
        <h2 className="text-[40px] font-bold mb-3">
          <span className="text-secondary">Client</span>{" "}
          <span className="text-tertiary ">Reviews</span>
        </h2>
        <p className="text-paraColor lg:w-[50%]">
          Discover the range of services I offer to bring your digital vision to
          life. From crafting beautiful front-end designs to building robust
          back-end systems, I provide comprehensive solutions tailored to your
          needs. Explore how I can help elevate your online presence and drive
          your business forward.
        </p>
        <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-[30px] mt-9">
          {clients?.map((client) => {
            return (
              <ClientCard
                title={client?.title}
                para={client?.para}
                from={client?.from}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full h-[1px] rounded-lg bg-[#48453f]" />
    </>
  );
};

export default ClientReviews;
