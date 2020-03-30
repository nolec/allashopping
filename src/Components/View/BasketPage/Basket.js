import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import BasketItem from "./BasketItem";
import BasketBuy from "./BasketBuy";
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
  background-color: #fff;
  ${props => props.theme.styles.ContainerStyle};
  padding-top: 20px;
`;
const BasketBox = styled.div`
  border-bottom: 2px solid #f5f5f5;
`;
const TotalBox = styled.div``;
export default ({ history }) => {
  const { basketTrue, buyFalse } = useContext(SubContext);
  useEffect(() => {
    basketTrue();
    buyFalse();
  }, []);
  return (
    <>
      <DetailHeader history={history} />
      <Section>
        <Container>
          <BasketBox>
            <BasketItem />
          </BasketBox>
          <TotalBox>
            <BasketBuy />
          </TotalBox>
        </Container>
      </Section>
    </>
  );
};
