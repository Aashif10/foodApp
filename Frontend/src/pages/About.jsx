import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              It contains  colorful vegetables tofu cubes seasoned with spices, providing a savory centerpiece. Around the tofu are fresh ingredients, including boiled eggs, edamame, cherry tomatoes, purple cabbage, corn, cucumber, and lettuce. The mix of textures and colors makes this bowl visually appealing, while also delivering a nutritious and balanced meal. Perfect for a light yet satisfying lunch or dinner.
            </p>
            <Link to={"/"}>
              Explore Menu
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;