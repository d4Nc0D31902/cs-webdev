import React from "react";
import "../App.css";
import Carousel from "../components/carousel/Carousel";
import About from "../components/about/About";
import Parallax from "./parallax/Parallax";
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
      <section>Portfolio1</section>
      {/* <section>Portfolio2</section> */}
      {/* <section>Portfolio3</section> */}
      {/* <section>Contact</section> */}
    </div>
  );
};

export default Home;
