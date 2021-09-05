import React, { Component }  from 'react';
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";
import Back from "./common/Back";
import {doEtl, getEtlLog, saveEtlHistory} from "./etlService";
import { validateParams } from "./validatorService";
import { validateArray } from "./validatorServiceArray";
import { TextareaAutosize } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Alert from '@material-ui/lab/Alert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import WifiIcon from '@material-ui/icons/Wifi';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/Dashboard';







const backgroundShape = require("../images/shape_white.png");

const logo = require("../images/logo2.svg");

const numeral = require("numeral");
numeral.defaultFormat("0");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary["A100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 500
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: "60%"
  },
  bigContainer: {
    width: "80%"
  },
  logo: {
    marginBottom: 24,
    display: "flex",
    justifyContent: "center"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  buttonBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  },
  button: {
    backgroundColor: theme.palette.primary["A100"]
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: "transparent"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  },
  formControlDropDowns: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 500,
  },
   noLabel: {
    marginTop: theme.spacing(3),
  }
});


const names = [
  'Armas',
  'Plastico',
  'Combustible fósiles/Carbón',
  'Agroindustria'
];

const names_val = [
  'armas',
  'plastico',
  'combustibles fosiles',
  'agrarian_industry'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};


const getSteps = () => {
  return ["Selección de parámetros", "Ejecución de ETL"];
};


class Signup extends Component {

  state = {
    activeStep: 0,
    params: {
      start_year: "",
      end_year: "",
      upd_families: new Array(),
      //gsheet_only: false,
      delete_data:false
    },
    termsChecked: false,
    loading: true,
    labelWidth: 0,
    incorrectYears: false,
    incorrectArray: false,
    log: '',
    etlFinshed: false
  };

  checkEtlRunning() {
    getEtlLog().then(response => {
      if (response.data.status === 'running') {
        console.log('Its running')
        this.setState({
          activeStep: 2,
          etlFinshed: false
        });
        this.getLog(1000);
      }else if(response.data.status === 'finished'){
        this.setState({
          activeStep: 0,
          etlFinshed: true
        });
      }
    });
  }

  getLog(delay){
    getEtlLog().then(response => {
      if (response.data.status === 'running') {
        if(response.data.log){
          if (response.data.log.length !== 0){
            console.log(response.data.log)
            console.log(response.data.log.length)
            this.setLog(response.data.log);
          }
          setTimeout(()=>{
            this.getLog(delay);
          }, delay);
          }
        
        } else if(response.data.status === 'finished') {
          this.setLog(response.data.log);
          this.setState({etlFinshed: true});
        } 
      }
    );
  }

  setLog(newLine){
    this.setState(state=> ({
      state: this.state.log=newLine
    })) 
  } 

  handleNext = () => {
    switch (this.state.activeStep) {
      case 0:
        if(validateParams(this.state.params.start_year, this.state.params.end_year)) {
          if(validateArray(this.state.params.upd_families)) {
          this.setState(state => ({
            activeStep: state.activeStep + 1,
            incorrectYears: false,
            incorrectArray: false
          }));
        }else{
          this.setState(state => ({
            incorrectArray: true
          }));
        }
        }else{
          this.setState(state => ({
            incorrectYears: true
          }));
        }
        break;
      case 1:
        this.setState(state => ({
          activeStep: state.activeStep + 1
        }));
        saveEtlHistory(this.state.params).then(response => {
          if (response.status === 200) {
          doEtl(this.state.params).then(response => {
            if (response.status === 200) {
              this.setState({etlFinshed: false})
              setTimeout(()=>{
                this.getLog(1000);},5000)
          }
          })
        }});
        // setTimeout(() => this.props.history.push("/"), 5000);
        break;
    
      default:
        this.setState(state => ({
          activeStep: state.activeStep + 1
        }));
        break;
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleupd_familiesSelectorUI = event => {
    this.setState({params: {...this.state.params, [event.target.name]:event.target.value}});
  }

  handleupd_familiesSelector = event => {
    this.setState({params:{...this.state.params, 
      upd_families: [...event.target.selectedOptions].map(option => {
        return option.value;
    })
  }})
  }

  handleChangeYearUI = (event) => {
    this.setState({params: {...this.state.params, [event.target.name]:event.target.value}});
  };

  handleChange = event => {

    this.setState({ [event.target.name]: event.target.value });
  };

  handleYearChange = event => {
    this.setState({params: {...this.state.params, [event.target.name]:event.target.value}})
  }

  handleChangeSwitch = (event) => {
    this.setState({params: {...this.state.params, [event.target.name]:event.target.checked}});
  };

  handleCheckboxChange = event => {
    this.setState({params: {...this.state.params, [event.target.name]:event.target.checked}});
  }

  handleTerms = event => {
    this.setState({ termsChecked: event.target.checked });
  };

  stepActions() {
    if (this.state.activeStep === 0) {
      return "Siguiente";
    }
    if (this.state.activeStep === 1) {
      return "Ejecutar ETL";
    }
    return "Finalizar";
  }

  componentDidMount() {
      this.checkEtlRunning();
  }

  componentWillUnmount() {
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, loading } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <div  style={{ backgroundColor: "white" }} className={classes.root}>
          <Back />
          <Grid container justify="center">
            <Grid  spacing={10}  alignItems="center" justify="center" container className={classes.grid} >
              <Grid item xs={12}>
                <div className={classes.logo}> <img width={250} height={250} src={logo} alt="" /> </div>
                <div className={classes.stepContainer}>
                  <div className={classes.stepGrid}>
                    <Stepper
                      classes={{ root: classes.stepper }}
                      activeStep={activeStep}
                      alternativeLabel
                    >
                      {steps.map(label => {
                        return (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                  </div>
                  {activeStep === 0 && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <div>
                          <div style={{ marginBottom: 32 }}>
                            <Typography variant="subtitle1" style={{ fontWeight: "bold" }} gutterBottom >
                              Selección del rango de años 
                            </Typography>

                            <div class="alert alert-warning" hidden={!this.state.incorrectArray} role="alert">
                              <Alert severity="error"><span><strong>¡Vaya!</ strong>, parece que no se ha seleccionado ninguna familia. <b>Selecciona al menos una familia</b>.</span></Alert>
                            </div>

                            <div class="alert alert-warning" hidden={!this.state.incorrectYears} role="alert">
                              <Alert severity="error"><span><strong>¡Vaya!</ strong>, parece que el año incial es mayor o igual al año final. <b>El año inicial debe ser siempre menor al final</b>.</span></Alert>
                            </div>

                          </div>
                          <div>

                          <Grid container justify="center">
                          <Grid item xs={12} md={3}>

                          <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Año inicial</InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.params.start_year}
                              onChange={this.handleChangeYearUI}
                              name="start_year"
                              label="start_year"
                            >
                              <MenuItem value=""> <em>Elige una opción</em> </MenuItem>
                              <MenuItem value={2002}> 2002 </MenuItem>
                              <MenuItem value={2003}> 2003 </MenuItem>
                              <MenuItem value={2004}> 2004 </MenuItem>
                              <MenuItem value={2005}> 2005 </MenuItem>
                              <MenuItem value={2006}> 2006 </MenuItem>
                              <MenuItem value={2007}> 2007 </MenuItem>
                              <MenuItem value={2008}> 2008 </MenuItem>
                              <MenuItem value={2009}> 2009 </MenuItem>
                              <MenuItem value={2010}> 2010 </MenuItem>
                              <MenuItem value={2011}> 2011 </MenuItem>
                              <MenuItem value={2012}> 2012 </MenuItem>
                              <MenuItem value={2013}> 2013 </MenuItem>
                              <MenuItem value={2014}> 2014 </MenuItem>
                              <MenuItem value={2015}> 2015 </MenuItem>
                              <MenuItem value={2016}> 2016 </MenuItem>
                              <MenuItem value={2017}> 2017 </MenuItem>
                              <MenuItem value={2018}> 2018 </MenuItem>
                              <MenuItem value={2019}> 2019 </MenuItem>
                              <MenuItem value={2020}> 2020 </MenuItem>
                              <MenuItem value={2021}> 2021 </MenuItem>
                              <MenuItem value={2022}> 2022 </MenuItem>
                            </Select>
                          </FormControl>


                          <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Año final</InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.params.end_year}
                              onChange={this.handleChangeYearUI}
                              name="end_year"
                              label="end_year"
                            >
                              <MenuItem value=""> <em>Elige una opción</em> </MenuItem>
                              <MenuItem value={2002}> 2002 </MenuItem>
                              <MenuItem value={2003}> 2003 </MenuItem>
                              <MenuItem value={2004}> 2004 </MenuItem>
                              <MenuItem value={2005}> 2005 </MenuItem>
                              <MenuItem value={2006}> 2006 </MenuItem>
                              <MenuItem value={2007}> 2007 </MenuItem>
                              <MenuItem value={2008}> 2008 </MenuItem>
                              <MenuItem value={2009}> 2009 </MenuItem>
                              <MenuItem value={2010}> 2010 </MenuItem>
                              <MenuItem value={2011}> 2011 </MenuItem>
                              <MenuItem value={2012}> 2012 </MenuItem>
                              <MenuItem value={2013}> 2013 </MenuItem>
                              <MenuItem value={2014}> 2014 </MenuItem>
                              <MenuItem value={2015}> 2015 </MenuItem>
                              <MenuItem value={2016}> 2016 </MenuItem>
                              <MenuItem value={2017}> 2017 </MenuItem>
                              <MenuItem value={2018}> 2018 </MenuItem>
                              <MenuItem value={2019}> 2019 </MenuItem>
                              <MenuItem value={2020}> 2020 </MenuItem>
                              <MenuItem value={2021}> 2021 </MenuItem>
                              <MenuItem value={2022}> 2022 </MenuItem>
                            </Select>
                          </FormControl>
            
  
                          

                           </Grid>
                          <Grid item xs={12} md={4}>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={this.state.params.delete_data}
                                  onChange={this.handleChangeSwitch}
                                  name="delete_data"
                                  color="primary"
                                  inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                              }
                              label="Eliminar datos descargados"
                            />


                            <FormControl  className={classes.formControl} style={{ width: 250 }}>
                              <InputLabel id="demo-mutiple-checkbox-label">Selección de familia</InputLabel>
                              <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                multiple
                                name="upd_families"
                                value={this.state.params.upd_families}
                                onChange={this.handleupd_familiesSelectorUI}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                              >
                                {names.map((value, index) => (
                                  <MenuItem key={value} value={names_val[index]}>
                                    <Checkbox checked={this.state.params.upd_families.indexOf(names_val[index]) > -1} />
                                    <ListItemText primary={value} />
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                           </Grid>
                          </Grid>
                  
                          </div>
                        </div>
                      </Paper>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <div>
                          <div>
                            <Typography color="secondary" gutterBottom>
                              Antes de ejecutar la ETL debemos tener en cuenta lo siguiente:
                            </Typography>
                            <List component="nav">
                              <ListItem>
                                <ListItemIcon>
                                  <WifiIcon />
                                </ListItemIcon>
                                <ListItemText
                                  inset
                                  primary="Debemos tener conexión a internet durante todo el proceso de ejecución de la ETL."
                                />
                              </ListItem>

                              <ListItem>
                                <ListItemIcon>
                                  <ThumbUpIcon />
                                </ListItemIcon>
                                <ListItemText
                                  inset
                                  primary="Durante la ejecución de la ETL podremos navegar por los cuadros de mando."
                                />
                              </ListItem>

                              <ListItem>
                                <ListItemIcon>
                                <AlarmOnIcon />
                                  
                                </ListItemIcon>
                                <ListItemText
                                  inset
                                  primary="Sabremos que ejecución de la ETL ha finalizado: cuando en esta pestaña volvamos a ver la selección de parámetros o bien cuando veamos la tarjeta en la pestaña Historial."
                                />
                              </ListItem>
                              
                              
                              <ListItem>
                                <ListItemIcon>
                                  <AssignmentTurnedInIcon />
                                </ListItemIcon>
                                <ListItemText
                                  inset
                                  primary="Una vez finalizada la ejecución, veremos los datos actualizados en los cuadros de mando de las familias seleccionadas."
                                />
                              </ListItem>
                            </List>

                            <Typography color="error" gutterBottom>
                              En caso de parar la ejecución de la ETL:
                            </Typography>
                            <List component="nav">
                              <ListItem>
                             
                                <ListItemText
                                  inset
                                  primary="La aplicación necesitará más espacio de memoria hasta que vuelva a ejecutarse la ETL.  (Los datos se almacenan localmente y se borran una vez esta finaliza. Si no finaliza, se quedarán almacenados en nuestro ordenador hasta el final de la siguiente ejecución.)"
                                />
                              </ListItem>
                              <ListItem>
                               
                                <ListItemText
                                  inset
                                  primary="No se actualizarán los datos en los cuadros de mando."
                                />
                              </ListItem>

                            </List>
                          </div>
                        </div>
                      </Paper>
                    </div>
                  )}
                                   {activeStep === 2 && (
                    <div className={classes.bigContainer}>
                      <Paper className={classes.paper}>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div style={{ width: 380, textAlign: "center" }}>
                            <div style={{ marginBottom: 32 }}>
                              <Typography
                                variant="h6"
                                style={{ fontWeight: "bold" }}
                                gutterBottom
                              >
                                Ejecutando ETL
                              </Typography>
                              <Typography variant="body1" gutterBottom>
                                Podrá ver el progreso de la ETL en el cuadro inferior 
                              </Typography>
                            </div>
                            <div>
                                {this.state.etlFinshed===false ? <CircularProgress
                                  style={{
                                    marginBottom: 32,
                                    width: 100,
                                    height: 100
                                  }}
                                 /> : null }
                                
                              {this.state.etlFinshed===true ? <Typography
                                variant="h6"
                                style={{ 
                                  fontWeight: "bold"}}
                                gutterBottom
                              >
                                ETL FINISHED
                              </Typography>: null}
                            </div>
                          </div>
                        </div>
                      </Paper>
                      <TextareaAutosize className="text-area-log" value={this.state.log}></TextareaAutosize>
                    </div>
                  )}
                  {activeStep !== 2 && (
                    <div className={classes.buttonBar}>
                      {activeStep !== 1 ? (
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.backButton}
                          size="large"
                        >
                          Atrás
                        </Button>
                      ) : (
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.backButton}
                          size="large"
                        >
                          Atrás
                        </Button>
                      )}


                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        size="large"
                        style={
                          this.state.params.end_year.length
                            ? { background: classes.button, color: "white" }
                            : {}
                        }
                        //disabled={!this.state.params.end_year.length || !this.state.params.init_year.length}
                      >


                        {this.stepActions()}
                      </Button>
                    </div>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Signup));