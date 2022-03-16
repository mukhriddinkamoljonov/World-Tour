import axios from "axios";
import React, { useEffect, useState } from "react";
import biz_haqimizda from "../../../img/biz_haqimizda1.jpg";
import "./About.css";
import globe from "../../../img/globe.png";
import calendar from "../../../img/calendar2.ico";
import chat from "../../../img/chat.png";
import heart from "../../../img/heart.png";
import Tavsiya from "../Tavsiya";
import Map from "../../Map/Map";
import { useTranslation } from "react-i18next";

function AboutWe() {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("https://wgtour.pythonanywhere.com/api/places/shuffle?count=4")
      .then((res) => {
        setItems(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#fff" }}>
      . <br />
      <div className="page-ago">.</div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">{t("useful53")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-area blog-page padding-top-40"
        style={{ backgroundColor: "#fcfcfc", paddingBottom: "55px" }}
      >
        <div className="container">
          <div className="row">
            <div className="blog-lst col-md-9 p0">
              <section id="id-100" className="post single">
                <div className="post-header single">
                  <div className="">
                    <h2
                      className="wow fadeInLeft animated "
                      style={{
                        backgroundColor: "orange",
                        textAlign: "center",
                        padding: 10,
                      }}
                    >
                      World Glamour Tour
                    </h2>
                    <div className="title-line wow fadeInRight animated"></div>
                  </div>
                  <div className="row wow fadeInRight animated">
                    <div className="col-sm-6">
                      <p className="author-category">
                        Biz <a href="/">Siz bilan</a> doim
                        <a href="blog.html">Birgamiz</a>
                      </p>
                    </div>
                    <div className="col-sm-6 right">
                      <p className="date-comments">
                        <a href="single.html">
                          <i className="fa fa-calendar-o"></i> Mart, 2022
                        </a>
                        <a href="single.html">
                          <i className="fa fa-comment-o"></i> 124 Comments
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="image wow fadeInRight animated">
                    <img
                      src={biz_haqimizda}
                      className="img"
                      alt="Example blog post alt"
                    />
                  </div>
                </div>

                <div
                  id="post-content"
                  className="post-body single wow fadeInLeft animated"
                >
                  <h2>{t("useful54")}</h2>
                  <div className="textinfo">
                    <p>
                      ✔️ <strong>WORLD GLAMOUR TOUR</strong> {t("useful55")}
                    </p>
                    <p>
                      ✔️ <strong>WORLD GLAMOUR TOUR</strong> {t("useful56")}
                    </p>
                    <p>✔️ {t("useful57")}</p>
                    <p>✔️{t("useful58")}</p>
                  </div>
                  <div className="date-change">
                    <span className="date1">24/7/365</span>
                    <span className="date2">{t("useful59")}</span>
                  </div>

                  <ol>
                    <li>{t("useful60")}</li>
                  </ol>

                  <h3>{t("useful61")}</h3>

                  <div>
                    <p>{t("useful62")}</p>
                    <p>{t("useful63")}</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="blog-asside-right col-md-3">
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h3 className="panel-title">{t("useful64")}</h3>
                </div>
                <div className="panel-body text-widget">
                  <p>{t("useful65")}</p>
                </div>
              </div>
              <Tavsiya title="SIZGA HAM YOQISHI MUMKIN" count="4" />
            </div>

            <div className="count-area about-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <h2>{t("useful66")}</h2>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-12 col-xs-12 percent-blocks m-main"
                    data-waypoint-scroll="true"
                  >
                    <div className="row">
                      <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                          <div className="count-item-circle">
                            <img src={globe} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="5000">
                            <h4 className="about-h4">{t("useful67")}</h4>
                            <p>{t("useful68")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                          <div className="count-item-circle">
                            <img src={calendar} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="12000">
                            <h4 className="about-h4">{t("useful69")}</h4>
                            <p>{t("useful70")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                          <div
                            className="count-item-circle"
                            style={{ marginBottom: "7px" }}
                          >
                            <img src={chat} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="120">
                            <h5 className="about-h5">{t("useful71")}</h5>
                            <p>{t("useful72")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                          <div className="count-item-circle">
                            <img src={heart} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="5000">
                            <h4 className="about-h4">{t("useful73")}</h4>
                            <p>{t("useful74")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* <Map/> */}
            <div className="map">
              <p>
                {
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2555.50349870899!2d71.77173202428591!3d40.38618411439649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8280fefda94b4cea!2sWorld%20Glamour%20Tour!5e0!3m2!1suz!2s!4v1647465049681!5m2!1suz!2s"
                    // width="600"
                    // height="450"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                }

               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWe;
