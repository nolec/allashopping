import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDetailList } from "../../../Actions/list";
import SelectBox from "./SelectBox";
import { SubContext } from "../../../Context";
import { comma } from "../../../Utills/comma";
import { getALLAKRW } from "../../../Actions/price";
import DetailHeader from "../../DetailHeader";
import Modal from "../../Modal";

const Section = styled.section`
  padding: 51px 0px 0 0px;
`;
const Container = styled.div`
  ${props => props.theme.styles.ContainerStyle}
  background-color : #fff;
  padding: 0;
  > div:not(:last-child) {
    border-bottom: 2px solid #f5f5f5;
  }
`;
const ImgBox = styled.div`
  width: 224px;
  height: 224px;
  margin: auto;
`;
const Img = styled.img.attrs()`
  width: 100%;
`;
const ContentBox = styled.div`
  padding-bottom: 20px;
`;
const Content = styled.div`
  padding: 15px 20px 30px 20px;
  h4 {
    padding: 15px 0 20px 0;
    font-size: 15px;
    letter-spacing: 0.02rem;
  }
`;
const Company = styled.span`
  font-size: 14px;
  margin-top: 5px;
  color: ${props => (props.blue === true ? "blue" : "#000")};
`;
const PaymentBox = styled.div`
  display: flex;
  span {
    display: flex;
    align-items: center;
  }
  span:first-child {
    font-size: 14px;
    color: red;
  }
  span:last-child {
    font-size: 11px;
    padding-left: 5px;
    text-decoration: line-through;
  }
`;
const Confirm = styled.div`
  padding: 15px 20px;
  background-color: red;
  p {
    color: #fff;
    font-size: 14px;
    :nth-child(1) {
      padding-bottom: 15px;
    }
    :nth-child(2) {
      padding-bottom: 5px;
      font-size: 11px;
    }
    :nth-child(3) {
      font-size: 11px;
    }
  }
`;
const DescBox = styled.div`
  padding: 20px;
  margin-top: 10px;
  p {
    font-size: 12px;
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export default ({ match, history }) => {
  const dispatch = useDispatch();
  const { last_price_alla, detailTrue, basketFalse, buyFalse } = useContext(
    SubContext
  );
  const { detail, last_price } = useSelector(state => ({
    detail: state.list.detail,
    last_price: state.price.price && state.price.price.data.last_price
  }));
  const {
    params: { type, id }
  } = match;

  useEffect(() => {
    detailTrue();
    basketFalse();
    buyFalse();
    dispatch(getDetailList(type, id));
    dispatch(getALLAKRW());
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DetailHeader history={history} />
      <Section>
        <Container>
          <ImgBox>
            <Img src={detail.data && detail.data.imageUrl} />
          </ImgBox>
          <ContentBox>
            <Content>
              {detail.data && detail.data.company === null ? (
                <Company blue={true}>[배송 상품]</Company>
              ) : (
                <Company>{detail.data && detail.data.company}</Company>
              )}
              <h4>{detail.data && detail.data.name}</h4>
              <PaymentBox>
                <span>{comma(last_price_alla)} ALLA</span>
                <span>{`${comma(detail.data && detail.data.price)}원`}</span>
              </PaymentBox>
            </Content>

            <Confirm>
              <p>꼭 확인해 주세요!</p>
              <p>본 상품은취소, 환불이 불가능합니다.</p>
              <p>구매 전 꼭 참고하시기 바랍니다.</p>
            </Confirm>
          </ContentBox>
          <DescBox>
            {/* {console.log(detail.data && detail.data.detail.split("\n"))} */}
            {detail.data &&
              detail.data.detail
                .split("\n")
                .map((item, i) => <p key={i}>{item}</p>)}
          </DescBox>
          <SelectBox
            last_price_alla={last_price_alla}
            last_price={last_price}
          />
          <Modal />
        </Container>
      </Section>
    </>
  );
};
