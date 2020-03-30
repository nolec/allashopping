import { textFunc } from "./TextChange";
import theme from "../CSS/theme";

export const ko = {
  price: [
    "전체",
    "~5만원",
    "5만원~10만원",
    "10만원~20만원",
    "20만원~50만원",
    "50만원~100만원",
    "100만원~500만원",
    "500만원~"
  ],
  category: [
    { icon: theme.files.home, name: "홈" },
    { icon: theme.files.mobile, name: "모바일쿠폰" },
    { icon: theme.files.fassion, name: "명품 패션/잡화" },
    { icon: theme.files.giftcard, name: "상품권" },
    { icon: theme.files.dvd, name: "도서/음반/DVD" },
    { icon: theme.files.interior, name: "홈인테리어" },
    { icon: theme.files.beauty, name: "뷰티" },
    { icon: theme.files.foods, name: "식품" },
    { icon: theme.files.life, name: "생활용품" },
    { icon: theme.files.digital, name: "가전디지털" },
    { icon: theme.files.health, name: "헬스/건강식품" },
    { icon: theme.files.kitchen, name: "주방용품" }
  ]
};
