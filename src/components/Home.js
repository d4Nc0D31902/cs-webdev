import React from "react";
import "../App.css";
import Carousel from "../components/carousel/Carousel";
import About from "../components/about/About";
import Parallax from "./parallax/Parallax";
import Works from "./works/Works";
import Language from "./language/Language";
import Team from "./team/Team";
import Contact from "./contacts/Contact";
const Home = () => {
  return (
    <div>
      <section>
        <Carousel />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Parallax />
      </section>
      <section>
        <Works />
      </section>
      <section>
        <Language />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Contact />
      </section>
      {/* <section>Contact</section> */}
    </div>
  );
};

export default Home;
