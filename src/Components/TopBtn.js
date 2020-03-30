import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";
import { SubContext } from "../Context";

const TopBox = styled.div`
  position: fixed;
  bottom: 48px;
  max-width: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`;
const Btn = styled.button`
  all: unset;
  background-image: url(${props => props.theme.files.top});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 48px;
  height: ${props => (props.visible ? "48px" : "0")};
  opacity: ${props => (props.visible ? "1" : "0")};
  cursor: pointer;
  transition: height 0.3s linear;
  transition: opacity 0.5s linear;
`;

const BtnBox = styled(TopBox)`
  bottom: 0;
`;
const CategoryBtn = styled(Btn)`
  background-image: url(${props => props.theme.files.categoryBtn});
  height: 48px;
  opacity: 1;
`;
const plugins = [ScrollToPlugin];
export default ({ history }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = e => {
    const body = document.querySelector("body");
    TweenMax.to(window, 0.3, { scrollTo: body.offsetTop });
  };
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const openHandle = () => {
    history.push("/category");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <TopBox>
        <Btn visible={visible} onClick={handleClick} />
      </TopBox>
      <BtnBox>
        <CategoryBtn onClick={openHandle} />
      </BtnBox>
    </>
  );
};
