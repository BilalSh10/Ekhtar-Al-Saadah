import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <footer class="site-footer">
      <div class="footerContA">
        <div class="row">
          <div class="about">
            <h6 className="footerh6">Contact Info</h6>
            <p class="text-justify">
              <GoLocation /> Address goes here <br />
              <FaPhone /> here goes phone number <br />
              <AiFillMail /> here goes the Email address
            </p>
            <div class="social">
              <ul className="ulNew">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f icon">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter icon">
                      <FaTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in icon">
                      <FaLinkedinIn />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="quick-links">
            <h6 className="footerh6">Quick links</h6>
            <ul class="footer-links">
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>

          <div class="categories">
            <div id="subscribe-css">
              <h6 className="footerh6">SUBSCRIBE TO OUR NEWSLETTER</h6>
              <div class="subscribe-wrapper">
                <div class="subscribe-form">
                  <form
                    action=""
                    class="subscribe-form"
                    method="post"
                  >
                    <input
                      class="subscribe-css-email-field"
                      name="email"
                      placeholder="Enter your Email"
                    />
                    <input
                      class="subscribe-css-email-button"
                      title=""
                      type="submit"
                      value="submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="above-cr"/>
      <div class="container2">
        <div class="row1">
          <div class="copyrights">
            <p class="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by !DEADLOCK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
