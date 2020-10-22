import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useAppWrapperStyles = makeStyles((theme) =>
  createStyles({
    appWrapper: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(5),
    },
  })
);
