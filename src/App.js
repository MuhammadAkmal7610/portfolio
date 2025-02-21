import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Work from "./components/Work";
import ClientReviews from "./components/ClientReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  useEffect(() => {
    document.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);
  return (
    <>
      <div className="px-[200px] lg:px-[100px] md:px-[50px] sm:px-[30px] xsm:px-[50px] bg-primary pb-9">
        <Header />
        <HeroSection />
        <Services />
        <Work />
        <ClientReviews />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
