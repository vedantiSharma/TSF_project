import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import image from "../assets/logopng.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={image} alt="Founder" />

        <h2>  Raising Smiles Charity</h2>
        <p>The future of the world depends on the education of our children</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/vedanti-sharma-3ab082215/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/vedantiSharma" target={"blank"}>
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
