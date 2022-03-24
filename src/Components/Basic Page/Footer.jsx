import axios from "axios";
import NoImage from "../../img/no-image.jpg";
import React, { useEffect, useState } from "react";
import logo from "../icons/logo.png";
import "./Main.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://wgtour.pythonanywhere.com/api/places/shuffle?count=3")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div className="footer-area">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer">
                <h4>{t("about_footer")}</h4>
                <div className="footer-title-line"></div>
                {/* Ozgartirilmasin !!!!!!!!*/}
                <div style={{ display: "flex" }}>
                  <img
                    src={logo}
                    alt="logo"
                    className="wow pulse"
                    data-wow-delay="1s"
                  />
                  <h6 style={{ color: "#000", fontWeight: 600, marginTop: 30 }}>
                    World Glamour Tour
                  </h6>
                </div>
                {/* Ozgartirilmasin !!!!!!!!*/}

                <ul className="footer-adress">
                  <li>
                    <i className="pe-7s-map-marker strong"> </i>{" "}
                    <a
                      target="__blank"
                      href="https://www.google.com/maps/place/World+Glamour+Tour/@40.3806077,71.7825653,16.75z/data=!4m12!1m6!3m5!1s0x0:0x8280fefda94b4cea!2sWorld+Glamour+Tour!8m2!3d40.3810275!4d71.7849778!3m4!1s0x0:0x8280fefda94b4cea!8m2!3d40.3810275!4d71.7849778"
                    >
                      Farg'ona shahar, B.Marg'iloniy 12 uy.
                    </a>
                  </li>
                  <li>
                    <i className="pe-7s-mail strong"> </i>
                    <a href="mail: info@imsoft.uz">rnj-787@mail.ru</a>
                  </li>
                  <li>
                    <i className="pe-7s-call strong"> </i>{" "}
                    <a className="tel-number" href="tel: +998936439311">
                      +998 (97) 214 44 01
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer">
                <h4>{t("sections")}</h4>
                <div className="footer-title-line"></div>
                <ul className="footer-menu">
                  <li>
                    <a
                      target="__blank"
                      href="https://data.gov.uz/uz/sphere/authority/45"
                    >
                      {t("section1")}
                    </a>
                  </li>
                  <li>
                    <a
                      target="__blank"
                      href="https://uzbekistan.travel/uz/turizm-qonunlari/"
                    >
                      {t("section2")}
                    </a>
                  </li>
                  <li>
                    <a href="https://uzbektourism.uz/committee/spisokgostin">
                      {t("section3")}
                    </a>
                  </li>
                  <li>
                    <a target="__blank" href="https://kun.uz/">
                      {t("section4")}
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">{t("section5")}</a>
                  </li>
                  <li>
                    <a href="faq.html">{t("section6")}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer">
                <h4>{t("region")}</h4>
                <div className="footer-title-line"></div>
                {items.map((item) => (
                  <ul className="footer-blog">
                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <Link to={`/places/${item.id}`}>
                          <img
                            src={
                              item.images.length ? item.images[0].file : NoImage
                            }
                            alt={""}
                          />
                        </Link>
                        <span className="blg-date">{date}</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry footer-api-name">
                        <h6>
                          <Link to={`/places/${item.id}`}>{item.name} </Link>
                        </h6>
                        <p
                          style={{ lineHeight: "17px", padding: "8px 2px" }}
                          dangerouslySetInnerHTML={{
                            __html: item.direction,
                          }}
                        ></p>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer news-letter">
                <h4>{t("contacts")}</h4>
                <div className="footer-title-line"></div>
                <p>
                  {t("contact1")}{" "}
                  <a className="tel-number" href="tel: +998936439311">
                    +998 (93) 643-93-11
                  </a>
                </p>
                <form>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail ... "
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-primary subscribe"
                        type="button"
                      >
                        <i className="pe-7s-paper-plane pe-2x"></i>
                      </button>
                    </span>
                  </div>
                </form>

                <div className="social pull-right">
                  <ul>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://twitter.com/kimarotec"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://www.facebook.com/kimarotec"
                        data-wow-delay="0.2s"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://plus.google.com/kimarotec"
                        data-wow-delay="0.3s"
                      >
                        <i className="fa-brands fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://instagram.com/kimarotec"
                        data-wow-delay="0.4s"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://instagram.com/kimarotec"
                        data-wow-delay="0.6s"
                      >
                        <i className="fa-solid fa-car-crash"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copy text-center">
        <div className="container">
          <div className="row">
            <div className="pull-left">
              <span>
                (C) <Link to="/">{t("section6")}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
