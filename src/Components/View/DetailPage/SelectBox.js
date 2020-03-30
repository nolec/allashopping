import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { SubContext, ScatterContext } from "../../../Context";
import { comma } from "../../../Utills/comma";

const Box = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
`;
const PartOne = styled.div`
  border-bottom: 1px solid #a5a5a5;
  p:first-child {
    padding-bottom: 10px;
    font-size: 14px;
    letter-spacing: 0.01em;
  }
  p:last-child {
    font-size: 12px;
    padding-bottom: 5px;
    text-align: right;
  }
`;
const PartTwo = styled.div`
  padding-top: 10px;
`;
const Select = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const Buttons = styled.button`
  all: unset;
  width: 18px;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #a5a5a5;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70%;
    height: 1.5px;
    background-color: #bababa;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }
`;
const Minus = styled(Buttons)`
  margin-right: 10px;
`;
const Plus = styled(Buttons)`
  margin-left: 10px;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #bababa;
    transform: translate(-50%, -50%);
    height: 70%;
    width: 1.5px;
    border-radius: 5px;
  }
`;
const Delievery = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 12px;
    color: #a5a5a5;
    &:first-child {
      padding-left: 5px;
    }
    &:last-child {
      color: #000;
    }
  }
`;
const TotalBox = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #a5a5a5;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  span {
  }
`;
const PartThree = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  a,
  button {
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
    &:first-child {
      color: #4c4cde;
      border: 1px solid #4c4cde;
      background-color: #fff;
      padding: 15px 40px;
    }
    &:last-child {
      color: #fff;
      border: 1px solid #4c4cde;
      background-color: #4c4cde;
      padding: 15px 50px;
    }
  }
`;
const GoBasket = styled.button``;
const GoBuy = styled(Link)``;

const Success = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  text-align: center;
  max-width: 300px;
  width: 100%;
`;

export const AmountBox = ({ amount, minusClick, plusClick, index }) => {
  return (
    <ButtonBox data-index={index}>
      <Minus onClick={minusClick}></Minus>
      {Array.isArray(amount) ? amount[index] : amount}
      <Plus onClick={plusClick}></Plus>
    </ButtonBox>
  );
};
export default ({ last_price_alla, last_price }) => {
  const { allaMoney } = useContext(ScatterContext);
  const {
    amount,
    plusClick,
    minusClick,
    totalPay,
    delivery,
    setDelievery,
    modalShow,
    modalOpen
  } = useContext(SubContext);
  const [comparePay, setComparePay] = useState();
  const onClick = e => {
    console.log(comparePay, allaMoney);
    if (comparePay > allaMoney) {
      e.preventDefault();
      modalShow();
      console.log(comparePay, allaMoney, last_price_alla, modalOpen);
    } else {
      return true;
    }
  };
  useEffect(() => {
    setComparePay(
      amount === 1 ? last_price_alla + delivery : totalPay + delivery
    );
    if (last_price * last_price_alla * amount > 50000) {
      setDelievery(0);
    } else {
      setDelievery(13);
    }
  }, [last_price_alla, amount, onClick]);
  return (
    <Box>
      <PartOne>
        <p>사용 가능한 ALLA 잔액</p>
        <p>{allaMoney && allaMoney ? allaMoney : 0} ALLA</p>
      </PartOne>
      <PartTwo>
        <Select>
          <p>수량 선택</p>
          <AmountBox
            amount={amount}
            plusClick={plusClick}
            minusClick={minusClick}
          />
        </Select>
        <Delievery>
          <p>배송비(5만원이상 무료배송)</p>
          <p>{delivery} ALLA</p>
        </Delievery>
        <TotalBox>
          <p>총 지불금액</p>
          <Total>
            <span>></span>
            <span>
              {amount === 1
                ? comma(last_price_alla + delivery)
                : comma(totalPay + delivery)}
              ALLA
            </span>
          </Total>
        </TotalBox>
      </PartTwo>
      <PartThree>
        <GoBasket>장바구니</GoBasket>
        <GoBuy to="/buy" onClick={onClick}>
          구매하기
        </GoBuy>
      </PartThree>
      <Success>장바구니에 담겼습니다.</Success>
    </Box>
  );
};
