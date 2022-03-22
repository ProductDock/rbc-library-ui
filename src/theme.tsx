import { createTheme } from "@material-ui/core/styles";

const neueHaasUnicaW1G = {
  fontFamily: "NeueHaasUnicaW1G",
  fontWeight: "400",
  src: `local("NeueHaasUnicaW1G"),
    url("./fonts/NeueHaasUnicaW1G-Regular_0.ttf") format("truetype")`,
};

const theme = createTheme({
  typography: {
    fontFamily: ['"Open Sans"', "NeueHaasUnicaW1G", "Roboto"].join(","),
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
