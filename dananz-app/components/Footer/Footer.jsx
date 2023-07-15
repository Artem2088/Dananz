import "./Footer.scss";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import twitter from "../../public/icons/logo-twitter 2.svg";
import facebook from "../../public/icons/logo-fb-simple 2.svg";
import instagram from "../../public/icons/logo-instagram 1.svg";
import github from "../../public/icons/logo-github 1.svg";
import location from "../../public/icons/Location.svg";
import mail from "../../public/icons/Message.svg";
import calling from "../../public/icons/Calling.svg";
import imageBgHeader from "../../public/icons/bg-1.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__social-container">
          <div className="header__logo-wrap">
            <Image src={logo} alt="logo" className="header__logo-img" />
          </div>
          <ul className="footer__social">
            <li className="footer__social-li">
              <a
                href="https://hca.twimg.com/ru/using-twitter/create-twitter-account"
                target="_blank"
              >
                <Image src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="footer__social-li">
              <a href="https://www.facebook.com/" target="_blank">
                <Image src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="footer__social-li">
              <a href="https://instagram.com/" target="_blank">
                <Image src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="footer__social-li">
              <a href="https://github.com/" target="_blank">
                <Image src={github} alt="github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__links-container">
          <ul className="footer__links-quicklinks">
            <h3 className="footer__link-header">Quicklinks</h3>
            <li>
              <a href="#" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Pricing Plan
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Our Team
              </a>
            </li>
          </ul>
          <ul className="footer__links-support">
            <h3 className="footer__link-header">Support</h3>
            <li>
              <a href="#" className="footer__link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Tems & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer__contacts">
          <h3 className="footer__link-header">Need Help?</h3>
          <div className="footer__contacts-wrap">
            <Image
              src={location}
              alt="location"
              className="footer__link-icon"
            />
            <a className="footer__link">
              Tanjung Sari Street no.48, Pontianak City
            </a>
          </div>
          <div className="footer__contacts-wrap">
            <Image src={mail} alt="mail" className="footer__link-icon" />
            <a className="footer__link">Support@VRNas.com</a>
          </div>
          <div className="footer__contacts-wrap">
            <Image src={calling} alt="calling" className="footer__link-icon" />
            <a className="footer__link">+123 456 7890</a>
          </div>
        </ul>
      </div>
      <div className="footer__down-section">
        <span className="footer__copy">
          &copy; Copyright 2023, All Rights Reserved (Artem Yablonsky)
        </span>
      </div>
      <Image
        src={imageBgHeader}
        alt="картинка фона footer"
        className="footer__bg-image"
      />
    </footer>
  );
}
