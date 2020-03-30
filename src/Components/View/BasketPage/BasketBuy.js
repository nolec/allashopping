import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { comma } from "../../../Utills/comma";
import { BasketContext, ScatterContext } from "../../../Context";

const BuyBox = styled.div`
  padding: 20px 20px;
`;
const FinalBox = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 5px;
  }
`;
const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  span {
    color: #a5a5a5;
    font-size: 12px;
    flex: 0 0 50%;
    padding-top: 10px;
    &:nth-child(even) {
      text-align: right;
    }
  }
`;
const TotalBox = styled.div`
  border-bottom: 1px solid #f5f5f5;
  padding: 20px 0 10px 0;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 14px;
    &:first-child {
      font-weight: 500;
    }
    &:last-child {
      font-weight: bold;
      color: #3f51b5;
    }
  }
`;
const DescBox = styled.div`
  padding: 15px 0;
  p {
    color: #a5a5a5;
    font-size: 12px;
    line-height: 1.4em;
  }
`;
const ButtonBox = styled.div`
  button {
    all: unset;
    width: 100%;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 5px;
    box-shadow: none;
    border: none;
    background-color: #3f51b5;
    padding: 15px 5px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.2em;
  }
`;
export default () => {
  const { total, plusClick, minusClick, itemCheck } = useContext(BasketContext);
  const { allaMoney } = useContext(ScatterContext);
  const [all, setAll] = useState(0);
  const [postPay, setPostPay] = useState(13);
  useEffect(() => {
    console.log(total, itemCheck);
    const getSum = total => {
      let result = 0;
      for (let index = 0; index < total.length; index++) {
        if (itemCheck[index]) {
          result += total[index];
        }
      }
      if (result > 50000) {
        setPostPay(0);
      } else {
        setPostPay(13);
      }
      return result;
    };
    setAll(getSum(total));
  }, [plusClick, minusClick]);
  return (
    <BuyBox>
      <FinalBox>
        <h4>최종 구매금액</h4>
        <SubBox>
          <span>사용 가능한 ALLA 잔액</span>
          <span>{allaMoney ? allaMoney : 0} ALLA</span>
          <span>총 상품금액</span>
          <span>{comma(all)} ALLA</span>
          <span>배송비(5만원이상 무료배송)</span>
          <span>{postPay} ALLA</span>
        </SubBox>
      </FinalBox>
      <TotalBox>
        <span>총 구매금액</span>
        <span>{comma(all + postPay)} ALLA</span>
      </TotalBox>
      <DescBox>
        <p>
          ※ 배송비는 3,000원을 기준으로 총 구매금액에 합산되며, 구매 시점에 따라
          수량이 달라질 수 있습니다.
        </p>
        <p>(5만원 이상 구매 시 무료)</p>
      </DescBox>
      <ButtonBox>
        <button type="button">구매하기</button>
      </ButtonBox>
    </BuyBox>
  );
};
