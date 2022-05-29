// import "./App.css";
import "./footerV4.css";
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

function FooterV4() {
  return (
    <footer class="site-footer">
      <div class="containerA">
        <div class="row">
          <div class="about">
            <h6>Contact us</h6>
            <p class="text-justify">
              <GoLocation /> Address goes here <br />
              <FaPhone /> here goes phone number <br />
              <AiFillMail /> here goes the Email address
            </p>
            <div class="social">
              {/* <ul class="social-icons">
              <li><a class="facebook" href="#"><i><FaFacebook /></i></a></li>
              <li><a class="twitter" href="#"><i></i><FaTwitter /></a></li>
              <li><a class="discord" href="#"><i></i><FaDiscord /></a></li>
              <li><a class="linkedin" href="#"><i></i><FaLinkedinIn /></a></li>   
            </ul> */}
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
                {/* <li>
                <a href="#">
                  <i class="fab fa-google-plus-g icon">
                    <FaDiscord />
                  </i>
                </a>
              </li> */}
              </ul>
            </div>
          </div>

          <div class="quick-links">
            <h6>Quick links</h6>
            Gere goes links for some pages:
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
                <a href="">Support</a>
              </li>
            </ul>
          </div>

          <div class="categories">
            {/* <h6>To be filled</h6>
            Here we can put the quick subscribe button */}
            <div id="subscribe-css">
              <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
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
            {/* <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div class="container2">
        <div class="row1">
          <div class="copyrights">
            <p class="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by !DEADLOCK
            </p>
          </div>

          {/* <div class="social">
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
              <li>
                <a href="#">
                  <i class="fab fa-google-plus-g icon">
                    <FaDiscord />
                  </i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default FooterV4;
