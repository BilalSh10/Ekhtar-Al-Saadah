import "./App.css";
import "./footerV2.css";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa";

function FooterV2() {
  return (
    <footer className="footer--pin">
        <div class="container">
            <div class="short-about">
              <h6>About</h6>
              <p class="text-justify">
                Hello my name is Suzi.
              </p>
            </div>

            <div class="footer-links">
              <h6>Quick Links</h6>
              <ul class="footer-links">
              <li>
                  <a href="https://www.facebook.com">Home</a>
                </li>

                <li>
                  <a href="https://www.facebook.com">Shop</a>
                </li>
                <li>
                  <a href="https://www.facebook.com">Events</a>
                </li>
                <li>
                  <a href="https://www.facebook.com">Blog</a>
                </li>
                <li>
                  <a href="https://www.facebook.com">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />

        <div class="bottom-row">
          <div class="copyright">
            <p class="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="https://www.facebook.com"> us</a>.
            </p>
          </div>

          <div class="social">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="https://www.facebook.com">
                  <i class="fa fa-facebook"></i><FaFacebook />
                </a>
              </li>
              <li>
                <a class="twitter" href="https://www.facebook.com">
                  <i class="fa fa-twitter"></i><FaTwitter />
                </a>
              </li>
              <li>
                <a class="discord" href="https://www.facebook.com">
                  <i class="fa fa-dribbble"></i><FaDiscord />
                </a>
              </li>
              <li>
                <a class="linkedin" href="https://www.facebook.com">
                  <i class="fa fa-linkedin"></i><FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
}

export default FooterV2;
