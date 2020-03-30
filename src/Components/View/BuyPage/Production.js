import React, { useContext } from "react";
import styled from "styled-components";
import { SubContext } from "../../../Context";
import { comma } from "../../../Utills/comma";

const ProdBox = styled.div`
  padding: 10px 20px 10px 20px;
  border: 2px solid #f5f5f5;
`;
const ImgBox = styled.div`
  display: flex;
  padding: 20px 0 0 0;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 0.01em solid #f5f5f5;
  margin-right: 15px;
`;
const ImgContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-size: 14px;
`;
const Amount = styled.span`
  color: #a5a5a5;
  padding: 10px 0;
  font-size: 14px;
`;
const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
export default ({ detail }) => {
  const { amount, totalPay, last_price_alla } = useContext(SubContext);

  return (
    <ProdBox>
      <h4>주문상품정보</h4>
      <ImgBox>
        <Img src={detail.data && detail.data.imageUrl} />
        <ImgContent>
          <Name>{detail.data && detail.data.name}</Name>
          <Amount>{amount}개</Amount>
          <Price>
            {amount === 1 ? comma(last_price_alla) : comma(totalPay)}
            ALLA
          </Price>
        </ImgContent>
      </ImgBox>
    </ProdBox>
  );
};
