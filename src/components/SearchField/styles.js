import { makeStyles, fade, createStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";

export const useSearchFieldStyles = makeStyles((theme) =>
  createStyles({
    search: {
      position: "relative",
      backgroundColor: colors.gray,
      outline: "none",
      padding: theme.spacing(3, 9),
      maxWidth: theme.spacing(50),
      marginTop: theme.spacing(20),
      cursor: "pointer",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
