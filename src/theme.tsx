/* eslint-disable no-unused-vars */
import { createTheme } from "@material-ui/core/styles";

const neueHaasUnicaW1G = {
  fontFamily: "Neue Haas Unica W1G",
  fontWeight: "400",
  src: `local("Neue Haas Unic aW1G"),
    url("./fonts/NeueHaasUnicaW1G-Regular_0.ttf") format("truetype")`,
};

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          border: "2px solid",
          borderColor: "yellow",
        },
      },
    },
  },
});

export default theme;
