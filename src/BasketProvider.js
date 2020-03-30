import React, { useState, useEffect } from "react";
import { BasketContext } from "./Context";

const BasketProvider = ({ children }) => {
  const [basketList, setBasketList] = useState([
    {
      type: 2,
      category: "33",
      id: 330013,
      price: 1674750,
      company: null,
      name: " LG멀티에어컨 FQ17V8WWJ2",
      flagNew: "0",
      flagEvent: "0",
      imageUrl:
        "https://manage.allaglobal.com:7443/allamanager/upload/shop_coupon/330013.png"
    },
    {
      type: 2,
      category: "33",
      id: 330014,
      price: 783993,
      company: null,
      name: "LG전자 코드제로 A9 무선청소기 A958SA",
      flagNew: "0",
      flagEvent: "0",
      imageUrl:
        "https://manage.allaglobal.com:7443/allamanager/upload/shop_coupon/330014.png"
    }
  ]);
  const price = basketList.map((item, i) => item.price);
  const [amounts, setAmounts] = useState(basketList.map((item, i) => 1));
  const [total, setTotal] = useState(price.map((item, i) => item));
  const totalCalculator = (currentIndex, am) => {
    setTotal(total => {
      const copy = [...total];
      copy[currentIndex] = price[currentIndex] * am[currentIndex];
      return copy;
    });
  };
  const plusClick = e => {
    const currentIndex = parseInt(
      e.currentTarget.parentNode.getAttribute("data-index")
    );
    setAmounts(amounts => {
      const copy = [...amounts];
      copy[currentIndex] += 1;
      totalCalculator(currentIndex, copy);
      return copy;
    });
  };

  const minusClick = e => {
    const currentIndex = parseInt(
      e.currentTarget.parentNode.getAttribute("data-index")
    );
    setAmounts(amounts => {
      const copy = [...amounts];
      if (copy[currentIndex] !== 1) {
        copy[currentIndex] -= 1;
        totalCalculator(currentIndex, copy);
      }
      return copy;
    });
  };
  const addHandle = list => {
    setBasketList(list);
  };
  //============================================
  const [allCheck, setAllCheck] = useState(true);
  const [itemCheck, setItemCheck] = useState(basketList.map((item, i) => true));

  const allHandle = () => {
    if (allCheck) {
      setAllCheck(false);
      allCheckHandle(false);
    } else {
      setAllCheck(true);
      allCheckHandle(true);
    }
  };
  const allCheckHandle = allCheck => {
    let copy = [...itemCheck];
    if (allCheck) {
      for (let index = 0; index < copy.length; index++) {
        copy[index] = true;
      }
    } else {
      for (let index = 0; index < copy.length; index++) {
        copy[index] = false;
      }
    }
    setItemCheck(copy);
  };
  const itemCheckHandle = e => {
    const currentIndex = parseInt(
      e.currentTarget.parentNode.parentNode.parentNode.getAttribute(
        "data-index"
      )
    );
    setItemCheck(itemCheck => {
      let copy = [...itemCheck];
      copy[currentIndex] = !copy[currentIndex];
      if (copy.filter(item => item === false).length > 0) {
        setAllCheck(false);
      } else if (copy.filter(item => item === true).length === copy.length) {
        setAllCheck(true);
      }
      return copy;
    });
  };
  const provider = {
    basketList,
    addHandle,
    amounts,
    plusClick,
    minusClick,
    total,
    allHandle,
    allCheck,
    itemCheck,
    itemCheckHandle
  };

  return (
    <BasketContext.Provider value={provider}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
