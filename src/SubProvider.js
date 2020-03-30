import React, { useState, useEffect } from "react";
import { SubContext } from "./Context";
import { useSelector } from "react-redux";
import { comma } from "./Utills/comma";

const SubProvider = ({ children }) => {
  const [category, setCategory] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [basket, setBasket] = useState(false);
  const [buy, setBuy] = useState(false);
  const [clickTrue, setClickTrue] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [amount, setAmount] = useState(1);
  const [totalPay, setTotalPay] = useState(0);
  const [delivery, setDelievery] = useState(13);
  const [modalOpen, setModalOpen] = useState(false);

  const { detail, last_price } = useSelector(state => ({
    detail: state.list.detail,
    last_price: state.price.price && state.price.price.data.last_price
  }));
  const last_price_alla = Math.round(
    detail.data !== undefined &&
      detail.data.price / parseInt(last_price && last_price ? last_price : 0)
  );
  useEffect(() => {
    setTotalPay(last_price_alla * amount);
  }, [detail, amount]);
  const modalShow = () => {
    setModalOpen(true);
  };
  const modalHidden = () => {
    setModalOpen(false);
  };
  const categoryTrue = () => {
    setCategory(true);
  };
  const categoryFalse = () => {
    setCategory(false);
  };
  const buyTrue = () => {
    setBuy(true);
  };
  const buyFalse = () => {
    setBuy(false);
  };
  const detailTrue = () => {
    setDetailPage(true);
  };
  const detailFalse = () => {
    setDetailPage(false);
  };
  const basketTrue = () => {
    setBasket(true);
  };
  const basketFalse = () => {
    setBasket(false);
  };
  const moreClick = id => {
    setCategoryId(id);
    if (clickTrue) {
      return setClickTrue(false);
    }
    setClickTrue(true);
  };
  const plusClick = e => {
    setAmount(amount + 1);
  };
  const minusClick = e => {
    if (amount !== 1) {
      setAmount(amount - 1);
    }
    return false;
  };
  const [params, setParams] = useState({});
  const provider = {
    category,
    categoryTrue,
    categoryFalse,
    basket,
    basketTrue,
    basketFalse,
    detailPage,
    detailTrue,
    detailFalse,
    clickTrue,
    categoryId,
    moreClick,
    params,
    setParams,
    amount,
    plusClick,
    minusClick,
    setAmount,
    last_price_alla,
    totalPay,
    delivery,
    setDelievery,
    buy,
    buyTrue,
    buyFalse,
    modalShow,
    modalHidden,
    modalOpen
  };
  return <SubContext.Provider value={provider}>{children}</SubContext.Provider>;
};

export default SubProvider;
