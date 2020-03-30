import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { LangContext, SubContext } from "../../../Context";
import { useSelector, useDispatch } from "react-redux";
import ItemBox from "./ItemBox";
import { getList } from "../../../Actions/list";

const PriceBox = styled.div`
  display: flex;
  overflow-x: auto;
  background-color: #fff;
  padding: 5px 0;
  margin-top: 10px;
`;
const Price = styled.div`
  padding: 0px 5px;
  display: flex;
  align-items: center;
  ${props => (props.selected === true ? { color: "red" } : { color: "#000" })}
  button {
    all: unset;
    word-break: keep-all;
    white-space: nowrap;
    font-size: 11px;
  }
`;
const ThesedaysBox = styled.div`
  background-color: #fff;
  padding: 5px 0;
  margin-top: 10px;
  box-shadow: 0px 0px 2px 0px rgba(156, 156, 156, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 14px;
    padding-left: 10px;
  }
`;
const More = styled.button`
  all: unset;
  text-decoration: none;
  color: #a5a5a5;
  font-size: 12px;
  ${props =>
    props.clickTrue
      ? { paddingLeft: `5px;`, paddingRight: `10px;` }
      : { paddingRight: `20px;` }}

  cursor: pointer;
  position: relative;
  ${props =>
    props.clickTrue
      ? `::after{content : "<"; position : absolute; left : -10px;}`
      : `::after{content : ">"; position : absolute; right : 10px;}`}
`;
export default ({ match }) => {
  const { lang } = useContext(LangContext);
  const dispatch = useDispatch();
  const { clickTrue, moreClick, categoryId, params, setParams } = useContext(
    SubContext
  );
  const { homeCategoryList, typeList, last_price } = useSelector(state => ({
    homeCategoryList: state.list.homeCategoryList,
    typeList: state.list.typeList,
    last_price: state.price.price && state.price.price.data.last_price
  }));
  useEffect(() => {
    setParams(match.params);
  }, [match]);
  useEffect(() => {
    dispatch(getList());
  }, [params]);
  return (
    <>
      {/* <PriceBox>
        {lang.price &&
          lang.price.length > 0 &&
          lang.price.map((item, i) => (
            <Price key={i} selected={i + 1} onClick={handleClick}>
              <button type="button">{item}</button>
            </Price>
          ))}
      </PriceBox> */}
      {params.type ? (
        <ItemBox params={params} typeList={typeList} clickTrue={clickTrue} />
      ) : (
        homeCategoryList
          .filter(category =>
            clickTrue ? category.id === categoryId : category
          )
          .map((category, i) => (
            <>
              <ThesedaysBox key={i}>
                <span>{category.name}</span>
                <More
                  clickTrue={clickTrue}
                  onClick={() => moreClick(category.id)}
                >
                  {clickTrue ? "이전 페이지" : "더보기"}
                </More>
              </ThesedaysBox>
              <ItemBox
                last_price={last_price}
                category={category}
                clickTrue={clickTrue}
                categoryId={categoryId}
              />
            </>
          ))
      )}
    </>
  );
};
