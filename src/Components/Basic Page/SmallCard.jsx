import React from "react";
import { Link } from "react-router-dom";
import NoImage from "../../img/no-image.jpg";
import { useTranslation } from "react-i18next";

const SmallCard = ({ item, challage }) => {
  const { t } = useTranslation();
  // console.log(challage);

  const NewData = {};

  if (challage === "uz") {
    NewData.name = item.name_uz;
  } else if (challage === "ru") {
    NewData.name = item.name_ru;
  } else if (challage === "en") {
    NewData.name = item.name_en;
  } else if (challage === "ar") {
    NewData.name = item.name_ar;
  }

  return (
    <div className="col-sm-6 col-md-3 p0 card-image1">
      <div className="box-two proerty-item">
        <div className="item-thumb">
          <Link to={`/places/${item.id}`}>
            <img
              src={item.images.length ? item.images[0].file : NoImage}
              alt={""}
            />
          </Link>
        </div>
        <div className="item-entry overflow">
          <h5>
            <Link to={`/places/${item.id}`}>{NewData.name} </Link>
          </h5>
          <div className="dot-hr"></div>
          <span className="pull-left">
            <Link to={`/places/${item.id}`} className="btn-grad">
              {t("useful90")}
            </Link>
          </span>
          <span className="proerty-price pull-right">
            {item.price1} {t("useful78")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
