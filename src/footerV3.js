import "./App.css";
import "./footerV3.css";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord, FaInstagram } from "react-icons/fa";

function FooterV3() {
  return (
    <footer className="footer--pin">
      <section class="sec1">
        <div class="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" class="text1">
            <i class="fab fa-facebook-f"><FaFacebook /></i>
          </a>
          <a href="" class="text1">
            <i class="fab fa-twitter"><FaTwitter /></i>
          </a>
          <a href="" class="text1">
            <i class="fab fa-discord"><FaDiscord /></i>
          </a>
          <a href="" class="text1">
            <i class="fab fa-instagram"><FaInstagram /></i>
          </a>
          <a href="" class="text1">
            <i class="fab fa-linkedin"><FaLinkedinIn /></i>
          </a>
        </div>
      </section>
      <section class="">
        <div class="containerA">
          <div class="row mt-3">
            <div class="div0">
              <h6 class="h6A">Company name</h6>
              <hr class="hr1"/>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div class="divB">
              <h6 class="h6A">Products</h6>
              <hr class="hr1"/>
              <p>
                <a href="#!" class="text-dark">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  Bootstrap Angular
                </a>
              </p>
            </div>
            <div class="divB">
              <h6 class="h6A">Useful links</h6>
              <hr class="hr1"/>
              <p>
                <a href="#!" class="text-dark">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" class="text-dark">
                  Help
                </a>
              </p>
            </div>
            <div class="divB">
              <h6 class="h6A">Contact</h6>
              <hr class="hr1"/>
              <p>
                <i class="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="divC">
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default FooterV3;
