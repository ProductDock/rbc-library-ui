import { createTheme } from "@material-ui/core/styles";
// import type {} from "@material-ui/lab/themeAugmentation";

const neueHaasUnicaW1G = {
  fontFamily: "Neue Haas Unica W1G",
  fontWeight: "400",
  src: `local("Neue Haas Unic aW1G"),
    url("./fonts/NeueHaasUnicaW1G-Regular_0.ttf") format("truetype")`,
};

const theme = createTheme({
  typography: {
    fontFamily: "Neue Haas Unica W1G",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [neueHaasUnicaW1G],
      },
    },
  },
});

export default theme;
