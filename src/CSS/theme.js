import { css } from "styled-components";
import fontFamily from "../assets/fonts/notopen_numbers.ttf";
import hamburger from "../assets/icon/icon_shop_menu.svg";
import search from "../assets/icon/icon_search.svg";
import banner1 from "../assets/banner.png";
import back from "../assets/icon/btn_arrow_back_black.png";
import cart from "../assets/icon/icon_cart.svg";
import mobile from "../assets/icon/icon_category_mobile_coupon.png";
import fassion from "../assets/icon/icon_category_fashion.png";
import giftcard from "../assets/icon/icon_category_giftcard.png";
import dvd from "../assets/icon/icon_category_dvd.png";
import interior from "../assets/icon/icon_category_interior.png";
import beauty from "../assets/icon/icon_category_beauty.png";
import foods from "../assets/icon/icon_category_food.png";
import life from "../assets/icon/icon_category_life.png";
import digital from "../assets/icon/icon_category_digital.png";
import health from "../assets/icon/icon_category_health.png";
import kitchen from "../assets/icon/icon_category_kitchen.png";
import home from "../assets/icon/icon_category_home.png";
import top from "../assets/icon/btn_shop_uppage.svg";
import notFound from "../assets/icon/icon_search_none.svg";
import categoryBtn from "../assets/icon/btn_category_floating.png";
import change from "../assets/icon/btn_change.svg";

const HeaderStyle = () => css`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  z-index: 100;
  border-bottom: 2px solid #f5f5f5;
  max-width: 360px;
  left: 50%;
  transform: translateX(-50%);
`;
const SectionStyle = () => css`
  display: block;
  padding: 100px 0 20px 0;
`;
const ContainerStyle = () => css`
  padding: 0 20px;
  max-width: 360px;
  width: 100%;
  margin: auto;
  position: relative;
`;
const theme = {
  styles: {
    HeaderStyle,
    SectionStyle,
    ContainerStyle
  },
  files: {
    fontFamily,
    hamburger,
    search,
    banner1,
    back,
    cart,
    mobile,
    fassion,
    giftcard,
    dvd,
    interior,
    beauty,
    foods,
    life,
    digital,
    health,
    kitchen,
    home,
    top,
    notFound,
    categoryBtn,
    change
  }
};

export default theme;
