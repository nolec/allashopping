import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ScatterContext, SubContext } from "../Context";
import { comma } from "../Utills/comma";

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0000005e;
  z-index: 101;
  transition: 0.1s linear;
  ${props =>
    props.modalOpen ? { transform: "scale(1)" } : { transform: "scale(0)" }}
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: 160px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
`;
const Content = styled.div`
  padding: 10px 10px;
  margin-bottom: 15px;
  h4 {
    text-align: center;
    font-size: 16px;
    padding: 10px 0;
  }
  p {
    text-align: left;
    font-size: 12px;
    padding: 10px 10px;
    :last-child {
      padding: 0 10px;
    }
  }
`;
const Confirm = styled.div`
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  button {
    all: unset;
    color: #4e75c9;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 10px;
    :hover {
      background-color: #f5f5f5;
    }
  }
`;
export default () => {
  const { allaMoney } = useContext(ScatterContext);
  const {
    last_price_alla,
    delivery,
    modalHidden,
    modalOpen,
    totalPay,
    amount
  } = useContext(SubContext);
  const onClick = e => {
    console.log(e.currentTarget);
    modalHidden();
  };
  useEffect(() => {
    console.log(modalOpen);
  }, [modalOpen]);
  return (
    <ModalBox modalOpen={modalOpen}>
      <Modal>
        <Content>
          <h4>쿠폰 구매</h4>
          <p>현재 ALLA 잔액은 {allaMoney ? allaMoney : 0} ALLA입니다.</p>
          <p>
            상품 구매를 위해서는{" "}
            {comma(
              amount === 1 ? last_price_alla + delivery : totalPay + delivery
            )}{" "}
            ALLA가 필요합니다.
          </p>
        </Content>
        <Confirm>
          <button type="button" onClick={onClick}>
            확인
          </button>
        </Confirm>
      </Modal>
    </ModalBox>
  );
};
