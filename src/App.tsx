import React from "react";
import "./styles.css";

//import { makeStyles } from "./makeStyles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "cornflowerblue"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1 className={classes.root}>I am makeStyled</h1>
      <h2>I need to get away from @material-ui makeStyles :-(</h2>
    </div>
  );
}
