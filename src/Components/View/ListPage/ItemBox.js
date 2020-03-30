import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { comma } from "../../../Utills/comma";
import NotFound from "../../NotFound";

const ItemBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled(Link)`
  flex: 0 0 48%;
  text-decoration: none;
  color: #000;
  background-color: #fff;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
`;
const ImgBox = styled.div`
  width: 100%;
  padding: 5px 5px 0px 5px;
  img {
    width: 100%;
  }
`;
const ContentBox = styled.div`
  margin: 5px 5px;
  border-top: 1px solid #e9e9e9;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    word-break: break-all;
    font-size: 11px;
    flex: auto;
    margin-top: 5px;
    letter-spacing: 0.01rem;
    line-height: 1.2;
  }
`;
const Company = styled.span`
  font-size: 10px;
  margin-top: 5px;
  color: ${props => (props.blue === true ? "blue" : "#000")};
`;
const PaymentBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  span {
    display: flex;
    align-items: center;
  }
  span:first-child {
    font-size: 10px;
    text-decoration: line-through;
  }
  span:last-child {
    font-size: 10px;
    color: red;
  }
`;

export default ({
  last_price,
  category,
  categoryId,
  clickTrue,
  typeList,
  params
}) => {
  const { list } = useSelector(state => ({ list: state.list.list }));
  console.log(typeList, categoryId, category, params);
  const filterList =
    typeList &&
    typeList.filter(typeList => typeList.category === (params && params.type));

  const ItemComponent = list => {
    return (
      <>
        <Item key={list.id} to={`/detail/${list.type}/${list.id}`}>
          <ImgBox>
            <img src={list.imageUrl} alt={list.name} />
          </ImgBox>
          <ContentBox>
            {list.company === null ? (
              <Company blue={true}>[배송 상품]</Company>
            ) : (
              <Company>{list.company}</Company>
            )}

            <h4>
              {list.name.length > 32
                ? `${list.name.substring(0, 32)}...`
                : list.name}
            </h4>
            <PaymentBox>
              <span>{`${comma(list.price)}원`}</span>
              <span>{`${comma(
                Math.round(list.price / parseInt(last_price))
              )} ALLA`}</span>
            </PaymentBox>
          </ContentBox>
        </Item>
      </>
    );
  };
  return (
    <>
      {typeList && typeList ? (
        filterList.length > 0 ? (
          <ItemBox key={list.id}>
            {filterList.map(list => ItemComponent(list))}
          </ItemBox>
        ) : (
          <NotFound />
        )
      ) : (
        <ItemBox key={category.order}>
          {clickTrue
            ? list
                .filter(list => parseInt(list.category) === categoryId)
                .map(list => ItemComponent(list))
            : list
                .filter(list => parseInt(list.category) === category.id)
                .map((list, count) => (count < 4 ? ItemComponent(list) : null))}
        </ItemBox>
      )}
    </>
  );
};
