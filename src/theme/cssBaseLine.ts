import { Overrides } from "@material-ui/core/styles/overrides.d";

export const cssBaseLine = (): Overrides["MuiCssBaseline"] => ({
  "@global": {
    "#__next": {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
  },
});
