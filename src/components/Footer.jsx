import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  // AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Vivek Dhokane</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          {/* <a href="https://youtube.com/6packprogrammer" target={"blank"}>
            <AiFillYoutube />
          </a> */}
          <a href="https://www.instagram.com/ajitz_007/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Vivekd2001" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
