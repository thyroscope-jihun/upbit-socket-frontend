import default_profile from "#assets/icons/default_profile.png";
import logo from "#assets/icons/logo.png";
import arrow_up from "#assets/icons/arrow_up.png";
import close from "#assets/icons/close.png";
import heart_gray from "#assets/icons/heart_gray.png";
import heart_red from "#assets/icons/heart_red.png";
import right_arrow_x3_blue from "#assets/icons/right_arrow_x3_blue.png";
import right_arrow_x3_gray from "#assets/icons/right_arrow_x3_gray.png";
import search from "#assets/icons/search.png";
import send from "#assets/icons/send.png";
import send_blue from "#assets/icons/send_blue.png";
import star_blue from "#assets/icons/star_blue.png";
import message_gray from "#assets/icons/message_gray.png";
import arrow_right from "#assets/icons/arrow_right.png";
import lock from "#assets/icons/lock.png";
import people from "#assets/icons/people.png";
import uncheck_rounded from "#assets/icons/uncheck_rounded.png";
import check_rounded from "#assets/icons/check_rounded.png";
import triangle_bottom_white from "#assets/icons/triangle_bottom_white.png";
import trangle_top_blue from "#assets/icons/trangle_top_blue.png";
import menu_white from "#assets/icons/menu_white.png";
import menu_blue from "#assets/icons/menu_blue.png";
import menu_list_white from "#assets/icons/menu_list_white.png";
import menu_list_blue from "#assets/icons/menu_list_blue.png";
import menu_patient_white from "#assets/icons/menu_patient_white.png";
import menu_patient_blue from "#assets/icons/menu_patient_blue.png";
import menu_question_white from "#assets/icons/menu_question_white.png";
import menu_question_blue from "#assets/icons/menu_question_blue.png";
import menu_hospital_white from "#assets/icons/menu_hospital_white.png";
import menu_hospital_blue from "#assets/icons/menu_hospital_blue.png";
import menu_account_white from "#assets/icons/menu_account_white.png";
import menu_account_blue from "#assets/icons/menu_account_blue.png";
import dropdown_bottom_arrow from "#assets/icons/dropdown_bottom_arrow.png";

type forExtendTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends forExtendTheme {}
}

export const theme = {
  colors: {
    primary: "#6081EE",
    blue_DFE7FF: "#DFE7FF",
    gray_454C53: "#454C53",
    gray_E8EBED: "#E8EBED",
    gray_C9CDD2: "#C9CDD2",
    gray_9EA4AA: "#9EA4AA",
    gray_72787F: "#72787F",
    red_FF6060: "#FF6060",
    yellow_FFD335: "#FFD335",
    white_FFFFFF: "#FFFFFF",
    white_F7F8F9: "#F7F8F9",
    black_1B1D1F: "#1B1D1F",
    black_454C53: "#454C53",
    orange_F69F64: "#F69F64",
    orange_F69F6412: "#F69F6412",
    green_75BBB7: "#75BBB7",
    green_75BBB712: "#75BBB712",
    // accent: "#027AFA",
    // white: "#FFFFFF",
    // gs900: "#1B1D1F",
    // gs800: "#26282B",
    // gs600: "#454C53",
    // gs500: "#72787F",
    // gs400: "#9EA4AA",
    // gs300: "#C9CDD2",
    // gs200: "#D9D9D9",
    // gs100: "#E8EBED",
    // gs50: "#F7F8F9",
    // accentLightOpacity: "rgba('#027AFA', 0.2)",
    // accentLight: "#D1E6FF",
    // accentSub: "#C6E0FF",
    // secondary: "#81B6FF",
    // secondarySub: "#E9F1FB",
    // yellow: "#FFBD61",
    // warning: "#FF6060",
    // warningSub: "#FF9A9A",
    // blueLight: "#81B6FF",
    // primary: "#027AFA",
    // primarySub: "C6E0FF",
  },
  dimensions: {
    size: {
      11: "11px",
      13: "13px",
      15: "15px",
      16: "16px",
      18: "18px",
      19: "19px",
      20: "20px",
      22: "22px",
      23: "23px",
      25: "25px",
      26: "26px",
      30: "30px",
      31: "31px",
      40: "40px",
      50: "50px",
      60: "60px",
    },
    weight: {
      300: "300",
      400: "400",
      500: "500",
      700: "700",
    },
  },
  icons: {
    arrow_up,
    close,
    heart_gray,
    heart_red,
    right_arrow_x3_blue,
    right_arrow_x3_gray,
    search,
    send,
    send_blue,
    star_blue,
    message_gray,
    logo,
    arrow_right,
    lock,
    people,
    uncheck_rounded,
    check_rounded,
    trangle_top_blue,
    triangle_bottom_white,
    menu_white,
    menu_blue,
    menu_list_white,
    menu_list_blue,
    menu_patient_blue,
    menu_patient_white,
    menu_question_white,
    menu_question_blue,
    menu_account_white,
    menu_account_blue,
    menu_hospital_white,
    menu_hospital_blue,
    dropdown_bottom_arrow,
  },
  images: {
    default_profile,
  },
  gifs: {},
  lotties: {},
};
