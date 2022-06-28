import "./Footer.css";
import { Link } from "react-router-dom";
import { RiAdminLine } from 'react-icons/ri';
import Subscribe from '../../subscribeFiles/Subscribe';
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";  // unused: FaDiscord
import { GoLocation } from "react-icons/go";
import { AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footerContA">
        <div className="row">
          <div className="about">
            <h6 className="footerh6">Contact Info</h6>
            <p className="text-justify">
              <GoLocation />  6145 St. Old city, Nazereth <br />
              <FaPhone /> 0747020015 <br />
              <AiFillMail /> teatroartsdrama@gmail.com
            </p>
            <div className="social">
              <ul className="ulNew">
                <li>
                  <a href="https://www.facebook.com/%D8%AA%D9%90%D9%8A%D9%8E%D8%A7%D8%AA%D9%92%D8%B1%D9%8F%D9%88-Teatro-a-center-for-creativity-109617908464701/?ref=pages_you_manage">
                    <i className="fab fa-facebook-f icon">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    <i className="fab fa-linkedin-in icon">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="quick-links">
            <h6 className="footerh6">Quick links</h6>
            <ul className="footer-links">
              <Link className="ReviewsPageLink" to="/Reviews">
                <li className="FooterLinkBlock">Reviews</li>   
              </Link>
              <Link className="SubmitReviewLink" to="/SubmitReview">
                <li className="FooterLinkBlock">Submit a review</li>
              </Link>
              <Link className="ContactUsLink" to="/ContactUs">
                <li className="FooterLinkBlock">Contact us</li>
              </Link>
            </ul>
          </div>
          <div className="categories">
            <br />
            <Subscribe />
            <br />
          </div>
        </div>
      </div>
      <hr className="above-cr" />
      <div className="container2">
        <div className="row1">
          <div className="copyrights">
            <p className="copyright-text">
            Copyright &copy; 2022 All Rights Reserved by <a href='https://github.com/BilalSh10/Ekhtar-Al-Saadah'>!DEADLOCK</a> <Link  to="/Login"><RiAdminLine className="LoginIcon" /></Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
