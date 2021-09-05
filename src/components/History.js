import React, { Component, Suspense, Fragment } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CardItem from "./cards/CardItem";
import FooterBar from "./FooterBar";
import Topbar from "./Topbar";
import SectionHeader from "./typo/SectionHeader";
import { getHistory } from "./etlService";
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
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class Cards extends Component {
  
  state = {
    cards: null,
    paginationIndex: 0,
    paginationStep: 4,
    paginationButtonNextDisabled: true,
    paginationButtonPreviousDisabled: true
  };
  LoadHistory = async()=>{
    try{
      getHistory(this.state.paginationIndex, this.state.paginationIndex+this.state.paginationStep).then( response => {
        this.setState({
          cards: response.data.map(historyElement => {
            return <CardItem start_year={historyElement.start_year} end_year={historyElement.end_year} exec_time={historyElement.exec_time.toString()} exec_state={historyElement.exec_state.toString()} delete_data={historyElement.delete_data.toString()} families={historyElement.upd_families}/>
          })
        })
    })}catch (err) {
      console.log(err);
    }
    if(this.state.paginationIndex===0) {
      this.setState({
        paginationButtonPreviousDisabled: true
      })
    } else{
      this.setState({
        paginationButtonPreviousDisabled: false
      })
    }
    getHistory(this.state.paginationIndex+this.state.paginationStep, this.state.paginationIndex+this.state.paginationStep).then( response => {
      console.log('next response: ', response.data.length)
      if (response.data.length===0) {
        this.setState({
          paginationButtonNextDisabled:true
        })
      }else{
        this.setState({
          paginationButtonNextDisabled:false
        })
      }
    })
    console.log('Mostrando: ', this.state.paginationIndex + ' : ' + (this.state.paginationIndex+this.state.paginationStep))
  }
  
  handleNextPage = () => {
    this.setState({
      paginationIndex: this.state.paginationIndex + this.state.paginationStep + 1
    },()=>this.LoadHistory())
  }

  handlePreviousPage = () => {
    this.setState({
      paginationIndex: this.state.paginationIndex - this.state.paginationStep - 1
    }, ()=>this.LoadHistory())
  }

  componentDidMount() {
    this.LoadHistory();
  }

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
                <SectionHeader
                  title="Historial de peticiones de actualización de ETL"
                  subtitle="Cada elemento de la lista corresponde a una ejecución de la ETL"
                />
                <Fragment>
                  <Suspense>
                    {this.state.cards}
                {/* <CardItem start_year='2005' end_year='2019' status='running' delete_data='true' families='armas, plastico'/> */}
                </Suspense>
                </Fragment>
              </Grid>
            </Grid>
          </Grid>
          <br></br>
          <div align="center">
          <Button
          color="primary"
             disabled={this.state.paginationButtonPreviousDisabled}
             onClick={this.handlePreviousPage}
            /* className={classes.backButton} */
            size="large"
          >
            Previo
          </Button>
          <Button
          color="primary"
            disabled={this.state.paginationButtonNextDisabled}
            onClick={this.handleNextPage}
            /* className={classes.backButton} */
            size="large"
          >
            Siguiente
          </Button>
          </div>
        </div>


        <FooterBar />
    
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Cards);
