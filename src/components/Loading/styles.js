import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flex: "1 1 0%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(4),
      minHeight: ({ minHeight }) => (minHeight ? minHeight : "100vh"),
    },
    progressBar: {
      marginTop: theme.spacing(2),
      width: "20rem",
    },
  })
);
