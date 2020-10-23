import background from "./assets/bg-red.jpg";
import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useAppStyles = makeStyles((theme) =>
  createStyles({
    appContainer: {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0",
      minWidth: "100%",
      minHeight: "100%",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      justifyItems: "center",
    },
  })
);
