import { createStyles, makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";

export const useWeatherStyles = makeStyles((theme) =>
  createStyles({
    weatherContainer: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
      padding: theme.spacing(5),
    },
    searchInput: {
      position: "relative",
      backgroundColor: colors.white,
      outline: "none",
      cursor: "pointer",
      borderRadius: theme.spacing(2),
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      boxShadow: `${theme.spacing(0.1, 0.1, 0, 0)} ${colors.darkGray}`,
    },
    searchResultsContainer: {
      margin: theme.spacing(3, 1),
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: theme.spacing(2),
      borderColor: colors.dark,
      background: colors.dark,
      boxShadow: `${theme.spacing(0.1, 0.1, 0, 0)} ${colors.darkGray}`,
    },
    cityName: {
      color: colors.white,
      fontWeight: "bold",
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
      color: colors.white,
      justifyItems: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: colors.white,
    },
    infoMedia: {
      height: theme.spacing(16),
      width: theme.spacing(16),
    },
  })
);
