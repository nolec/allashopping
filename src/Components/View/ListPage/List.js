import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import { useDispatch } from "react-redux";
import { getHomeCategoryList, getHomeList } from "../../../Actions/list";
import ListItem from "./ListItem";
import { SubContext, ScatterContext } from "../../../Context";
import TopBtn from "../../TopBtn";
import { withRouter } from "react-router-dom";
import CategoryBtn from "../../CategoryBtn";
import { getALLAKRW } from "../../../Actions/price";
import { getUserInfo, getUserAddress } from "../../../Actions/user";

const Section = styled.section`
  ${props => props.theme.styles.SectionStyle};
  display: ${props => (props.category ? "none" : "block")};
`;
const Container = styled.div`
  ${props => props.theme.styles.ContainerStyle}
  display : flex;
  flex-direction: column;
`;

export default withRouter(({ location, match, history }) => {
  const dispatch = useDispatch();
  const {
    categoryFalse,
    basketFalse,
    category,
    basket,
    detailPage,
    setAmount,
    detailFalse
  } = useContext(SubContext);
  const {
    isInitByUser,
    isInitializing,
    init_count,
    init_scatter,
    userInfo
  } = useContext(ScatterContext);
  useEffect(() => {
    setAmount(1);
    dispatch(getHomeList());
  }, []);
  useEffect(() => {
    dispatch(getHomeCategoryList());
  }, []);
  useEffect(() => {
    basketFalse();
    categoryFalse();
    detailFalse();
  }, [basket, detailPage, category]);
  useEffect(() => {
    dispatch(getALLAKRW());
  }, []);
  useEffect(() => {
    dispatch(getUserInfo(userInfo));
    dispatch(getUserAddress(userInfo));
    // init_scatter(false, isInitByUser, isInitializing, init_count);
  }, [userInfo]);
  return (
    <>
      <Section category={category}>
        <Container>
          <Banner />
          <ListItem match={match} />
          <TopBtn history={history} />
        </Container>
      </Section>
    </>
  );
});
