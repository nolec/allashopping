import React, { useContext } from "react";
import styled from "styled-components";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { SubContext } from "../../../Context";

const BannerBox = styled.div`
  .swiper-container {
    max-width: 100% !important;
    border-radius: 10px;
  }
  .swiper-wrapper {
    display: flex;
    .swiper-slide {
      width: 100%;
    }
  }
  .swiper-pagination {
    width: 15%;
    right: 1%;
    left: inherit;
    font-size: 12px;
    color: #fff;
    background-color: #00000063;
    padding: 3px;
    border-radius: 10px;
    bottom: 3px;
  }
`;
const Item = styled.div`
  max-width: 100% !important;
  height: auto;
`;
const Img = styled.img.attrs(props => ({ src: props.theme.files.banner1 }))`
  width: 100%;
  border-radius: 10px;
`;
const Scrollbar = () => {
  const params = {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  };
  return (
    <BannerBox>
      <Swiper {...params}>
        <Item>
          <Img />
        </Item>
        <Item>
          <Img />
        </Item>
        <Item>
          <Img />
        </Item>
      </Swiper>
    </BannerBox>
  );
};

export default () => {
  const { clickTrue, params } = useContext(SubContext);
  if (clickTrue || params.name) {
    return null;
  }
  return <Scrollbar></Scrollbar>;
};
