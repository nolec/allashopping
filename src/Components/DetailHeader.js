import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SubContext } from "../Context";

const Header = styled.header`
  ${props => props.theme.styles.HeaderStyle};
  display: block;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  height: 31px;
  z-index: 1;
`;
const BackBox = styled.div`
  flex: 0 0 10%;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 30px;
  }
`;
const MyNameBox = styled.div`
  flex: 0 0 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BasketBox = styled.div`
  flex: 0 0 10%;
  display: flex;
  align-items: center;
`;

const Back = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.theme.files.back});
  background-position: center;
  background-repeat: no-repeat;
`;
const GoBasket = styled(Link)``;
const Cart = styled.img.attrs(props => ({ src: props.theme.files.cart }))``;

export default ({ history, name, address, add }) => {
  const { data } = useSelector(state => ({ data: state.list.detail.data }));
  const { basket, category, detailPage, buy } = useContext(SubContext);

  return (
    <Header>
      <Wrapper>
        <BackBox>
          {/* <Back
            onClick={basket || buy || address ? history.goBack : null}
            to={name && name.includes("detail") ? "/" : "#"}
          /> */}
          <Back
            onClick={
              detailPage || category || basket || buy ? history.goBack : null
            }
            to={name && name.includes("detail") ? "/" : "#"}
          />
        </BackBox>
        <MyNameBox>
          {category ? <span>카테고리</span> : null}
          {basket ? <span>장바구니</span> : null}
          {buy ? <span>구매하기</span> : null}
          {/* {address ? <span>주소록 관리</span> : null}
          {add ? <span>배송지 추가</span> : null} */}
          {/* {!open && !basket && !buy && !address ? (
            <span>{data && data.name}</span>
          ) : null} */}
          {!basket && !category && !buy ? <span>제품상세</span> : null}
        </MyNameBox>
        <BasketBox>
          {/* {open || basket || buy || address ? null : (
            <GoBasket to="/basket">
              <Cart />
            </GoBasket>
          )} */}
          {!detailPage || basket ? null : (
            <GoBasket to="/basket">
              <Cart />
            </GoBasket>
          )}
        </BasketBox>
      </Wrapper>
    </Header>
  );
};
