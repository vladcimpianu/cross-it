import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useMenuStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      alignItems: "center",
      padding: theme.spacing(1.2),
    },
    menuItem: {
      margin: theme.spacing(0, 10),
    },
  })
);
