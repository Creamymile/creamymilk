import React from "react";
import style from "./home.css";
import Boxicons from "./boxicons";

const Home = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="#" className="active">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Services</a>
      </div>
      <section className="home">
        <div className="home-content">
          <h1 className="nama">Hi, I'm Leonardo Emil Rambing </h1>
          <h3>Frontend Developer</h3>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <div>
              <img
                className="seol"
                src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/03/12/2970563219.jpeg"
                width={"300px"}
              />
            </div>
            <div>
              <div className="home-sci">
                <a href="#">
                  <box-icon type="logo" name="facebook-circle"></box-icon>
                </a>
                <a href="#">
                  <box-icon type="logo" name="instagram-alt"></box-icon>
                </a>
                <a href="#">
                  <box-icon name="github" type="logo"></box-icon>
                </a>
                <a href="#">
                  <box-icon name="linkedin-square" type="logo"></box-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Home;
