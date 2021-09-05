import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import PlasticCardExport from "./cards/PlasticCardExport";
import WeaponsCardExport from "./cards/WeaponsCardExport";
import FuelsCardExport from "./cards/FuelsCardExport";
import AgrarianIndustryCardExport from "./cards/AgrarianIndustryCardExport";
import Topbar from "./Topbar";
import FooterBar from "./FooterBar";
import Typography from '@material-ui/core/Typography';
import SectionHeader from "./typo/SectionHeader";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from 'react-router-dom';
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
    paddingBottom: 40
  },
  grid: {
    width: 1000
  }
});

class Cards extends Component {
  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div style={{ backgroundColor: "white" }} className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
               <Typography gutterBottom variant="h4" component="h3">
                CUADROS DE MANDO
              </Typography>
                <SectionHeader
                  title=""
                  subtitle= "Esta es la pestaña principal de la aplicación. Contiene los accesos a los cuadros de mando divididos por familias: plástico, combustibles fósiles y armas. Podremos acceder a ellos haciendo  click sobre la tarjeta correspondiente."
                />
                <Button  component={RouterLink} to='/faqs'>
                    Más información
                </Button>
            </Grid>
              </Grid>
              

          </Grid>
        </div>

        <div style={{ backgroundColor: "white" }} className={classes.root}>
          <Grid container justify="center">
          <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
            </Grid>
              </Grid>
          </Grid>
          <div style={{ backgroundColor: "white" }} className={classes.root}>
          <Grid container justify="center">
              <PlasticCardExport />
              <FuelsCardExport />
              <WeaponsCardExport />
              <AgrarianIndustryCardExport />

          </Grid>

        </div>
        </div>


       

        <FooterBar/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Cards);
