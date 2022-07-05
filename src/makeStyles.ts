//WARNING: tss-react require TypeScript v4.4 or newer. If you can't update use:
//import { createMakeAndWithStyles } from "tss-react/compat";

import { createMakeAndWithStyles } from "tss-react/compat";
import { useTheme } from "@material-ui/core";

export const { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme
});
