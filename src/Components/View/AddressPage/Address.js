import React from "react";
import styled from "styled-components";
import AddressBox from "./AddressBox";

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
  height: calc(100vh - 53px);
`;
const AddBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 2px solid #f5f5f5;
`;
const AddBtn = styled.button`
  all: unset;
  font-size: 16px;
  letter-spacing: -0.64px;
`;
export default () => {
  return (
    <Section>
      <Container>
        <AddressBox />
        <AddBox>
          <AddBtn>배송지 추가 +</AddBtn>
        </AddBox>
      </Container>
    </Section>
  );
};
