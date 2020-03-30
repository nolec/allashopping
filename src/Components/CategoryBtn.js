import React from "react";
import styled from "styled-components";

const BtnBox = styled.div``;
const CategoryBtn = styled.button`
  all: unset;
  background-image: url(${props => props.theme.files.floating});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 48px;
`;

export default () => {
  return (
    <BtnBox>
      <CategoryBtn></CategoryBtn>
    </BtnBox>
  );
};
