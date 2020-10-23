import { createStyles, makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/index";

export const useMenuStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      alignItems: "center",
      padding: theme.spacing(1.2),
      backgroundColor: colors.dark,
    },
    menuItem: {
      margin: theme.spacing(1, 13),
    },
  })
);
