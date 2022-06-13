import "./Footer.css";
import { Link } from "react-router-dom";
import { RiAdminLine } from 'react-icons/ri';
import Subscribe from '../../subscribeFiles/Subscribe';
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
              {/* <Link className="FAQLink" to="/FAQ">
                <li>
                  <li className="FooterLinkBlock">FAQ</li>
                </li>
              </Link> */}
              <Link className="ReviewsPageLink" to="/Reviews">
                <li>
                  <li className="FooterLinkBlock">Reviews</li>
                </li>
              </Link>
              <Link className="SubmitReviewLink" to="/SubmitReview">
                <li>
                  <li className="FooterLinkBlock">Submit a review</li>
                </li>
              </Link>
              <Link className="ContactUsLink" to="/ContactUs">
                <li>
                  <li className="FooterLinkBlock">Contact us</li>
                </li>
              </Link>
            </ul>
          </div>

          <div class="categories">
            <Subscribe />
          </div>
        </div>
      </div>
      <hr className="above-cr" />
      <div class="container2">
        <div class="row1">
          <div class="copyrights">
            <p class="copyright-text">
            Copyright &copy; 2022 All Rights Reserved by <a href='https://github.com/BilalSh10/Ekhtar-Al-Saadah'>!DEADLOCK</a> <Link  to="/Login"><RiAdminLine className="LoginIcon" /></Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
