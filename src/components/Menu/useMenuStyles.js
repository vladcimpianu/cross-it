import { createStyles, makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";

export const useMenuStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      marginTop: theme.spacing(2),
      alignItems: "center",
      padding: theme.spacing(1.2),
      backgroundColor: colors.dark,
    },
    menuItem: {
      margin: theme.spacing(1, 13),
    },
  })
);
