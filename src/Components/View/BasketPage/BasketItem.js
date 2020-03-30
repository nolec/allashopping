import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { Checkbox } from "@material-ui/core";
import { comma } from "../../../Utills/comma";
import { AmountBox } from "../DetailPage/SelectBox";
import { BasketContext } from "../../../Context";

const ItemBox = styled.div`
  padding: 0 20px;
  .MuiSvgIcon-root {
    width: 0.8em;
  }
  .MuiIconButton-root {
    padding: 0 10px 0 0;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  > span:nth-child(2) {
    font-size: 12px;
    flex-grow: 1;
  }
`;
const DeleteBtn = styled.button`
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 5px;
  box-shadow: none;
  border: none;
  background-color: #3f51b5;
  padding: 3px 5px;
  color: #fff;
  font-size: 12px;
`;
const Item = styled.div`
  display: flex;
  ${props =>
    props.last === 1
      ? { border: "none" }
      : { borderBottom: "1px solid #f5f5f5" }}
  padding: 15px 0;
`;
const ImgBox = styled.div`
  flex: 0 0 30%;
  img {
    width: 100%;
  }
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
  span {
    font-size: 12px;
    &:nth-child(2) {
      font-weight: 600;
      padding: 10px 0;
    }
  }
`;
const DeleteBox = styled.div`
  display: flex;
`;
const Delete = styled(DeleteBtn)`
  padding: 3px 10px;
  font-size: 10px;
  margin-right: 20px;
`;
export default () => {
  const {
    basketList,
    plusClick,
    minusClick,
    amounts,
    total,
    allCheck,
    allHandle,
    itemCheck,
    itemCheckHandle
  } = useContext(BasketContext);
  const check = useRef(null);
  useEffect(() => {
    console.log(itemCheck);
  }, [allHandle]);
  return (
    <ItemBox>
      <Box>
        <Checkbox
          ref={check}
          checked={allCheck}
          value="secondary"
          color="primary"
          onChange={allHandle}
          inputProps={{ "aria-label": "secondary checkbox" }}
        ></Checkbox>
        <span>전체 선택</span>
        <DeleteBtn type="button">선택 삭제</DeleteBtn>
      </Box>
      {basketList.map((item, i) => (
        <Item key={i} data-index={i} last={basketList.length - i}>
          <Checkbox
            value="secondary"
            checked={itemCheck ? itemCheck[i] : true}
            color="primary"
            onChange={e => itemCheckHandle(e)}
            inputProps={{ "aria-label": "secondary checkbox" }}
          ></Checkbox>
          <ImgBox>
            <img src={item.imageUrl} alt={item.name} />
          </ImgBox>
          <ContentBox>
            <span>{item.name}</span>
            <span>{comma(total[i])} ALLA</span>
            <DeleteBox>
              <Delete>삭제</Delete>
              <AmountBox
                index={i}
                amount={amounts}
                plusClick={plusClick}
                minusClick={minusClick}
              />
            </DeleteBox>
          </ContentBox>
        </Item>
      ))}
    </ItemBox>
  );
};
