import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "./typo/SectionHeader";
import Back from "./common/Back";
import Button from "@material-ui/core/Button";
const backgroundShape = require("../images/shape_white.png");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 40,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class Cards extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Back />
        <iframe src="http://35.214.211.35:5601/app/kibana#/dashboard/c6561600-950f-11ea-a0f4-05b6d0d15a76?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))" frameborder="0" height="1000" width="100%"></iframe>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Cards);
