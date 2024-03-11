/**
=========================================================
* Anji Travel Agency React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023Hon (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Anji Travel Agency React base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      borderRadius: borderRadius.md,
    },
  },
};
