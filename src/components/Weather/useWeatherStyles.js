import { createStyles, makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";

export const useWeatherStyles = makeStyles((theme) =>
  createStyles({
    weatherContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    searchInput: {
      position: "relative",
      backgroundColor: colors.gray,
      outline: "none",
      padding: theme.spacing(3, 9),
      maxWidth: theme.spacing(50),
      marginTop: theme.spacing(20),
      cursor: "pointer",
    },
    searchResult: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      maxWidth: "500vh",
      margin: theme.spacing(10),
      padding: theme.spacing(5),
      borderRadius: theme.spacing(2.5),
      borderColor: colors.dark,
      background: colors.darkGray,
      boxShadow: `${theme.spacing(0.1, 0.1, 0, 0)} ${colors.gray}`,
    },
    cityName: {
      color: colors.dark,
      fontWeight: "800",
    },
    sup: {
      marginLeft: theme.spacing(0.5),
      borderRadius: theme.spacing(2, 2, 2, 1),
      padding: theme.spacing(0.3),
      backgroundColor: colors.red,
    },
    temperature: {
      fontWeight: "800",
      marginTop: theme.spacing(2),
      color: colors.dark,
    },
    info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: colors.dark,
    },
    infoMedia: {
      height: theme.spacing(16),
      width: theme.spacing(16),
    },
  })
);
