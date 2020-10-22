import { createStyles, makeStyles } from "@material-ui/core/styles";
const backgroundColor = "rgba(230, 230, 230, 0.9)";

export const useWeatherStyles = makeStyles((theme) =>
  createStyles({
    weatherContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        color: "white",
      },
    },
    searchInput: {
      position: "relative",
      backgroundColor: backgroundColor,
      fontSize: theme.spacing(2),
      outline: "none",
      maxWidth: theme.spacing(50),
      marginTop: theme.spacing(20),
    },
    city: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: theme.spacing(10),
      padding: theme.spacing(10),
      borderRadius: theme.spacing(2.5),
      background: backgroundColor,
      boxShadow: `${theme.spacing(0.2, 0.1, 0.2, 0.1)} ${backgroundColor}`,
      "& cityName": {
        padding: theme.spacing(2, 2),
        marginLeft: theme.spacing(0.5),
        borderRadius: theme.spacing(2, 5),
        color: "white",
        background: "#ff8c00",
      },
      "& sup": {
        margin: theme.spacing(0.5),
      },
    },
  })
);
