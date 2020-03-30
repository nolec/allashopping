import React from "react";
import styled from "styled-components";

const ResultBox = styled.div`
  padding: 10px;
`;
const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  h4 {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
  }
`;
const BottomBox = styled.div`
  margin-top: 20px;
  p {
    font-size: 14px;
    color: #a5a5a5;
    position: relative;
    padding-left: 10px;
    :first-child {
      margin-bottom: 10px;
    }
    ::before {
      content: "-";
      padding-right: 1px;
      position: absolute;
      left: 0;
    }
  }
`;
const Img = styled.img.attrs(props => ({ src: props.theme.files.notFound }))``;
export default () => {
  return (
    <ResultBox>
      <TopBox>
        <Img />
        <h4>검색결과가 없습니다.</h4>
      </TopBox>
      <BottomBox>
        <p>일시적으로 상품이 품절되거나, 노출이 제한된 품일 수 있습니다.</p>
        <p>검색어의 철자가 정확한지 확인해 보시기 바랍니다.</p>
      </BottomBox>
    </ResultBox>
  );
};
