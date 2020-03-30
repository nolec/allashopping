import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Production from "./Production";
import FinalPay from "./FinalPay";
import DetailHeader from "../../DetailHeader";
import { SubContext } from "../../../Context";

const Section = styled.section`
  ${props => props.theme.styles.SectionStyle};
  padding-left: 0;
  padding-right: 0;
  padding-top: 53px;
  height: 100vh;
`;
const Container = styled.div`
  ${props => props.theme.styles.ContainerStyle}
  background-color : #fff;
  padding: 0;
`;
const AddressBox = styled.div`
  padding: 15px 20px 0px 20px;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;
const Change = styled(Link)`
  display: block;
  width: 42px;
  height: 20px;
  background-image: url(${props => props.theme.files.change});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 12px;
    padding: 0 0 5px 0;
  }
`;
const Name = styled.span`
  color: #505050;
`;
const Phone = styled.span`
  color: #a5a5a5;
`;
const Address = styled.span`
  color: #505050;
`;
const AddressSub = styled.div`
  display: flex;
  span:first-child {
    padding-right: 5px;
  }
`;
const PostalCode = styled.span`
  color: #a5a5a5;
  font-size: 10px !important;
`;
const NoData = styled.span`
  font-size: 12px;
  color: red;
`;
const MemoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px 10px 20px;
  border-bottom: 2px solid #f5f5f5;
  span {
    font-size: 14px;
    padding-bottom: 2px;
  }
  input {
    font-size: 12px;
    height: 30px;
  }
`;
export default ({ history }) => {
  const { address, detail, last_price } = useSelector(state => ({
    address: state.user.address,
    detail: state.list.detail,
    last_price: state.price.price && state.price.price.data.last_price
  }));
  const { buyTrue, basketFalse } = useContext(SubContext);
  useEffect(() => {
    buyTrue();
    basketFalse();
  }, []);
  return (
    <>
      <DetailHeader history={history} />
      <Section>
        <Container>
          <AddressBox>
            <TitleBox>
              <h4>배송지 정보</h4>
              <Change to="/address"></Change>
            </TitleBox>
            {address.length > 0 ? (
              address.map(item => (
                <ContentBox key={item.idx}>
                  <Name>{item.name}</Name>
                  <Phone>{item.phone}</Phone>
                  <Address>{item.address}</Address>
                  <AddressSub>
                    <span>{item.address1}</span>
                    <span>{item.address2}</span>
                  </AddressSub>
                  <PostalCode>({item.postalCode})</PostalCode>
                </ContentBox>
              ))
            ) : (
              <NoData>배송지 주소가 없습니다.</NoData>
            )}
          </AddressBox>
          <MemoBox>
            <span>메모 (제품 컬러 및 사이즈)</span>
            <input type="text" placeholder="요청 사항을 입력하세요" />
          </MemoBox>
          <Production detail={detail} />
          <FinalPay last_price={last_price} />
        </Container>
      </Section>
    </>
  );
};
