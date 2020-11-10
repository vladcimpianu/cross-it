import { createStyles, makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";

export const useWeatherStyles = makeStyles((theme) =>
  createStyles({
    weatherContainer: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
    },
    searchInput: {
      position: "relative",
      backgroundColor: colors.white,
      outline: "none",
      cursor: "pointer",
      borderRadius: theme.spacing(2),
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    searchResultsContainer: {
      margin: theme.spacing(5),
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: theme.spacing(2),
      borderColor: colors.dark,
      background: colors.white,
      boxShadow: `${theme.spacing(0.2, 0.2, 0, 0)} ${colors.gray}`,
    },
    cityName: {
      color: colors.dark,
      fontWeight: "900",
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
      justifyItems: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
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
