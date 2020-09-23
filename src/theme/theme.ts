import { createMuiTheme } from "@material-ui/core";
import { cssBaseLine } from "./cssBaseLine";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: cssBaseLine(),
  },
});
