import React, { useEffect, useState } from "react";
import "./AllCart.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { useParams } from "react-router-dom";
import Tavsiya from "./Tavsiya";
import Form from "../Form/Form";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const AllCart = () => {
  const challage = i18n.language;
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const [itemData, setItemData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(`https://wgtour.pythonanywhere.com/api/places/${id}`)
      .then((res) => {
        setItemData(res.data.images);
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const NewData = {};

  if (challage === "uz") {
    NewData.hashtags = item.hashtags_uz;
    NewData.address = item.address_uz;
    NewData.price1 = item.price1_uz;
    NewData.direction = item.direction_uz;
    NewData.duration = item.duration_uz;
    NewData.price1_description = item.price1_description_uz;
    NewData.price2_description = item.price2_description_uz;
    NewData.price3_description = item.price3_description_uz;
    NewData.price2 = item.price2_uz;
    NewData.price3 = item.price3_uz;
    NewData.benefits = item.benefits_uz;
    NewData.description = item.description_uz;
    NewData.about_prices = item.about_prices_uz;
  } else if (challage === "ru") {
    NewData.hashtags = item.hashtags_ru;
    NewData.address = item.address_ru;
    NewData.price1 = item.price1_ru;
    NewData.direction = item.direction_ru;
    NewData.duration = item.duration_ru;
    NewData.price1_description = item.price1_description_ru;
    NewData.price3_description = item.price3_description_ru;
    NewData.price2_description = item.price2_description_ru;
    NewData.price2 = item.price2_ru;
    NewData.price3 = item.price3_ru;
    NewData.benefits = item.benefits_ru;
    NewData.description = item.description_ru;
    NewData.about_prices = item.about_prices_ru;
  } else if (challage === "en") {
    NewData.hashtags = item.hashtags_en;
    NewData.address = item.address_en;
    NewData.price1 = item.price1_en;
    NewData.direction = item.direction_en;
    NewData.duration = item.duration_en;
    NewData.price1_description = item.price1_description_en;
    NewData.price2_description = item.price2_description_en;
    NewData.price2 = item.price2_en;
    NewData.price3_description = item.price3_description_en;
    NewData.price3 = item.price3_en;
    NewData.benefits = item.benefits_en;
    NewData.description = item.description_en;
    NewData.about_prices = item.about_prices_en;
  } else if (challage === "ar") {
    NewData.hashtags = item.hashtags_ar;
    NewData.address = item.address_ar;
    NewData.price1 = item.price1_ar;
    NewData.direction = item.direction_ar;
    NewData.duration = item.duration_ar;
    NewData.price1_description = item.price1_description_ar;
    NewData.price2_description = item.price2_description_ar;
    NewData.price3_description = item.price3_description_ar;
    NewData.price2 = item.price2_ar;
    NewData.price3 = item.price3_ar;
    NewData.benefits = item.benefits_ar;
    NewData.description = item.description_ar;
    NewData.about_prices = item.about_prices_ar;
  }

  console.log(item);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      . <br />
      <div className="page-ago">.</div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h2
                dangerouslySetInnerHTML={{
                  __html: NewData.hashtags,
                }}
              ></h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-area single-property"
        style={{ backgroundColor: "#fcfcfc" }}
      >
        &nbsp;
        <div className="container ">
          <div className="clearfix">
            <div className="col-md-8 single-property-content prp-style-1">
              <div className="row" style={{ marginLeft: "3px" }}>
                <div className="light-slide-item">
                  <div className="slider-courusel">
                    <Carousel autoPlay={"boolean"}>
                      {itemData.map((img) => (
                        <div className="box1">
                          <img src={img?.file} alt="title" />
                          {/* <p className="legend">Chorvoq</p> */}
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              <div className="single-property-wrapper">
                <div className="single-property-header">
                  <h1 className="property-title pull-left">
                    {NewData.address}
                  </h1>
                  <span className="property-price pull-right">
                    {NewData.price1} so'm
                  </span>
                </div>
                <div className="section additional-details">
                  <h4 className="s-property-title">{t("useful75")}</h4>

                  <ul className="additional-details-list clearfix">
                    <li>
                      <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        {t("useful91")}
                      </span>
                      <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: NewData.direction,
                          }}
                        ></div>
                      </span>
                    </li>
                    <li>
                      <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        {t("useful76")}
                      </span>
                      <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {NewData.duration}
                      </span>
                    </li>
                    <h4 className="s-property-title">{t("useful77")}</h4>
                    <li>
                      {NewData.price1_description ? (
                        <>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            {NewData.price1_description}
                          </span>

                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {NewData.price1} {t("useful78")}
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      {NewData.price2_description ? (
                        <>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            {NewData.price2_description}
                          </span>

                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {NewData.price2} {t("useful78")}
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      {NewData.price3_description ? (
                        <>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            {NewData.price3_description}
                          </span>

                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {NewData.price3} {t("useful78")}
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        {t("useful79")}
                      </span>
                      {NewData.benefits ? (
                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {NewData.benefits}
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </div>
                <div className="section">
                  <h4 className="s-property-title">{t("useful80")}</h4>
                  <div className="s-property-content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: NewData.description,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="section-backg">
                  <div className="section additional-details ">
                    <h4 className="s-property-title">{t("useful81")}</h4>
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: NewData.about_prices,
                        }}
                        style={{ fontWeight: 700 }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p0">
              <aside className="sidebar sidebar-property blog-asside-right">
                <div className="dealer-widget">
                  <div className="dealer-content">
                    <div className="inner-wrapper">
                      <div className="clear">
                        <div
                          className="col-xs-4 col-sm-4 dealer-face"
                          style={{ marginTop: "17px " }}
                        ></div>
                      </div>

                      <div className="clear">
                        <ul className="dealer-contacts">
                          <li>
                            <i className="pe-7s-map-marker strong"> </i>{" "}
                            {t("useful82")}
                          </li>
                          <li>
                            <i className="pe-7s-mail strong"> </i>
                            rnj-787@mail.ru
                          </li>
                          <li>
                            <i className="pe-7s-call strong"> </i> +99897 214 44
                            01
                          </li>
                        </ul>
                        <p>{t("useful83")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {item.id ? <Form item={item} /> : ""}
                <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div className="panel-heading">
                    {/* <h3 className="panel-title"></h3> */}
                  </div>
                </div>
                <Tavsiya title="Tavsiya Etamiz!" count="4" />{" "}
                <div className="section property-video">
                  <h4 className="s-property-title"> Video</h4>
                  <div className="video-thumb">
                    <div
                      className="video-popup"
                      href="yout"
                      title="Virtual Tour"
                      style={{ width: "300px" }}
                      dangerouslySetInnerHTML={{
                        __html: item.video_link,
                      }}
                    ></div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCart;
