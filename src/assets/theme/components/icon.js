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

// Anji Travel Agency React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

export default {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};
