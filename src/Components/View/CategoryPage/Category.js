import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { LangContext, SubContext } from "../../../Context";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../../Actions/list";
import { Link } from "react-router-dom";
import DetailHeader from "../../DetailHeader";

const Section = styled.section`
  padding: 53px 0 0 0;
`;
const Container = styled.div`
  background-color: #ffffff;
  ${props => props.theme.styles.ContainerStyle}
`;
const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Category = styled.div`
  flex: 0 0 50%;
  height: 47px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  &:not(:nth-child(even))::after {
    content: "";
    width: 1px;
    height: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #f5f5f5;
  }
  span {
    padding-left: 10px;
  }
  img {
    height: 27px;
    width: 27px;
  }
`;
const Clink = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
`;
export default ({ history }) => {
  const { lang } = useContext(LangContext);
  const { closeHandle, categoryTrue } = useContext(SubContext);
  const dispatch = useDispatch();
  const { categoryList } = useSelector(state => ({
    categoryList: state.list.category.list
  }));
  useEffect(() => {
    dispatch(getCategoryList());
    categoryTrue();
  }, []);
  return (
    <>
      <DetailHeader history={history} />
      <Section>
        <Container>
          <CategoryBox>
            {lang.category &&
              lang.category.map((item, i) => (
                <Category key={i}>
                  <Clink
                    to={
                      categoryList && categoryList[i].id === 100
                        ? `/`
                        : `/${categoryList &&
                            categoryList[i].id}/${categoryList &&
                            categoryList[i].name.split("/")}`
                    }
                    onClick={closeHandle}
                  >
                    <img
                      src={item.icon}
                      alt={categoryList && categoryList[i].name}
                    />
                    <span>{categoryList && categoryList[i].name}</span>
                  </Clink>
                </Category>
              ))}
          </CategoryBox>
        </Container>
      </Section>
    </>
  );
};
