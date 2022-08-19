import React from "react";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection({
  lightbg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightbg ? "home__hero_section" : "home__hero_section darkbg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="topline">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading-dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to='/sign-up'>
                    <Button buttonSize='btn-wide' buttonColor='blue'>
                        {buttonLabel}
                    </Button>
                </Link>
              </div>
            </div>
            <div className="col">
                <div className="home__hero-img-wrapper">
                  <img src={img} alt={alt} className="home__hero-img"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
