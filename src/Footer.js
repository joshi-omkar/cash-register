import React from "react";
import "./styles.css";
const Footer = () => {
  return (
    <footer>
      <h2>about</h2>
      <p>This is cash counter for making change...</p>

      <div class="footer">
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            <a class="link" href="https://github.com/joshi-omkar">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/Omkar_Joshi04">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://linkedin.com/in/joshiomkar04">
              <i class="fab fa-linkedin-in fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
