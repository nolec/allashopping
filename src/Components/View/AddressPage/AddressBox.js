import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { hyphen } from "../../../Utills/phone";

const ItemBox = styled.div`
  border-bottom: 2px solid #f5f5f5;
  span {
    color: #505050;
    :not(:last-child) {
      padding-bottom: 10px;
    }
  }
`;
const BorderBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 2px #4e75c9 inset;
  padding: 20px;
`;
const Title = styled.span`
  font-weight: 600;
`;
const Name = styled.span`
  font-size: 14px;
`;
const Phone = styled.span`
  font-size: 14px;
`;
const Address = styled.span`
  font-size: 14px;
`;
const MemoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 0 0;
`;
const Memo = styled.span`
  font-size: 14px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
`;
const BtnBox = styled.div``;
const Buttons = styled.button`
  all: unset;
  border-radius: 4px;
  padding: 10px 15px;
  position: relative;
  font-size: 14px;
`;
const Repair = styled(Buttons)`
  border: 1px solid #4e75c9;
  color: #4e75c9;
  margin-right: 10px;
`;
const Select = styled(Buttons)`
  color: #fff;
  background-color: #4e75c9;
`;
export default () => {
  const { address } = useSelector(state => ({ address: state.user.address }));
  return (
    <>
      {address.map(item => (
        <ItemBox key={item.idx}>
          <BorderBox>
            <Title>{item.title}</Title>
            <Name>{item.name}</Name>
            <Address>{`${item.address} ${item.address1} ${item.address2}`}</Address>
            <Phone>{hyphen(item.phone)}</Phone>
            <MemoBox>
              <Memo>{item.memo}</Memo>
              <BtnBox>
                <Repair>수정</Repair>
                <Select>선택</Select>
              </BtnBox>
            </MemoBox>
          </BorderBox>
        </ItemBox>
      ))}
    </>
  );
};
