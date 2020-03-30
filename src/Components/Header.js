import React, { useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import { SubContext, ScatterContext } from "../Context";

const Header = styled.header`
  ${props => props.theme.styles.HeaderStyle};
  display: ${props =>
    props.detailPage || props.category || props.basket || props.buy
      ? "none"
      : "block"};
  background-color: #f5f5f5;
`;
const Container = styled.div`
  ${props => props.theme.styles.ContainerStyle};
`;
const TopBox = styled.div`
  display: flex;
`;
const HamburgerBox = styled.div`
  padding: 10px 10px 10px 0px;
  display: inline-block;
`;
const Img = styled.img.attrs(props => ({ src: props.theme.files.hamburger }))``;
const SearchBox = styled.div`
  width: 100%;
  margin: 10px 0;
  border: 1px solid #a5a5a5;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
const Img2 = styled.button`
  all: unset;
  left: 0;
  width: 24px;
  height: 24px;
  padding: 0;
  background-image: url(${props => props.theme.files.search});
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 3px;
`;
const Search = styled.input`
  all: unset;
  height: 100%;
  width: 100%;
  margin-left: 5px;
`;
const Name = styled.div`
  padding: 0px 5px 0px 5px;
  display: flex;
  h3 {
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;
const LoginBox = styled.div`
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
`;
const Submit = styled.input``;
export default withRouter(({ location, history, match }) => {
  const hamburger = useRef(null);
  const { basket, category, detailPage, buy, params } = useContext(SubContext);
  const {
    isInitByUser,
    isInitializing,
    init_count,
    init_scatter,
    forget_identity
  } = useContext(ScatterContext);
  const loginHandle = () => {
    init_scatter(false, isInitByUser, isInitializing, init_count);
  };
  const logoutHandle = () => {
    forget_identity();
  };
  const goCategory = () => {
    history.push("/category");
  };
  // console.log(params);
  // useEffect(() => {
  //   if (!open) {
  //     categoryTrue();
  //   }
  //   console.log(isInitializing);
  // }, []);
  console.log(detailPage);
  const HeaderComponent = () => {
    // if (location.pathname.includes("detail")) {
    //   return <DetailHeader name={location.pathname} />;
    // } else if (location.pathname.includes("basket")) {
    //   return <DetailHeader history={history} basket={true} />;
    // } else if (location.pathname.includes("buy")) {
    //   return <DetailHeader history={history} buy={true} />;
    // } else if (location.pathname.includes("address")) {
    //   return <DetailHeader history={history} address={true} />;
    // } else if (location.pathname.includes("add")) {
    //   return <DetailHeader history={history} add={true} />;
    // } else {
    return (
      <>
        <TopBox>
          <HamburgerBox ref={hamburger} onClick={goCategory}>
            <Img />
          </HamburgerBox>
          <SearchBox>
            <Img2 />
            <Search placeholder="상품 검색..."></Search>
          </SearchBox>
        </TopBox>
        <Name>
          <h3>{params.name ? params.name.split(",").join("/") : "홈"}</h3>
          <LoginBox>
            {!isInitializing ? (
              <Submit
                type="submit"
                value="로그인"
                onClick={loginHandle}
              ></Submit>
            ) : (
              <Submit
                type="submit"
                value="로그아웃"
                onClick={logoutHandle}
              ></Submit>
            )}
          </LoginBox>
        </Name>
      </>
    );
    // }
  };
  return (
    <Header
      buy={buy}
      category={category}
      detailPage={detailPage}
      basket={basket}
    >
      <Container>
        <HeaderComponent />
      </Container>
    </Header>
  );
});
