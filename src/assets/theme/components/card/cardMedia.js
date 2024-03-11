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

// Anji Travel Agency React Base Styles
import borders from "assets/theme/base/borders";

// Anji Travel Agency React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};
