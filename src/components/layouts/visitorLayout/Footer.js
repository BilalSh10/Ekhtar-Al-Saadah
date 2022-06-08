import { Link } from 'react-router-dom';
import Subscribe from '../../subscribeFiles/Subscribe';
import { RiAdminLine } from 'react-icons/ri';
import './Footer.css';
import Login from '../../../pages/visitorPages/LoginPage';
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
  	<footer className="site-footer">
  	  <div className="footerContA">
        <div className="row">  
          

        <div className="about">
            <h6 className="footerh6">Contact Info</h6>
            <p className="text-justify">
              <GoLocation /> Address goes here <br />
              <FaPhone /> here goes phone number <br />
              <AiFillMail /> here goes the Email address
            </p>
            <div className="social">
              <ul className="ulNew">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f icon">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter icon">
                      <FaTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in icon">
                      <FaLinkedinIn />
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

          <div className="categories">
            <Subscribe />
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