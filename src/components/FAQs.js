import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FooterBar from "./FooterBar";
import Button from "@material-ui/core/Button";
import InstructionDialog from "./dialogs/InstructionDialog";
import SwipeDialog from "./dialogs/SwipeDialog";
import { Link as RouterLink } from 'react-router-dom';
import Topbar from "./Topbar";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import WifiIcon from '@material-ui/icons/Wifi';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from '@material-ui/icons/Description';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PublicIcon from '@material-ui/icons/Public';
import SecurityIcon from '@material-ui/icons/Security';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import BackupIcon from '@material-ui/icons/Backup';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import Link from '@material-ui/core/Link';
import data from "../../src/images/TARDICT";
const PrettyPrintJson = ({data}) => (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>);








const backgroundShape = require("../images/shape_white.png");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }

});

class Main extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() {}

  openDialog = event => {
    this.setState({ learnMoredialog: true });
  };

  dialogClose = event => {
    this.setState({ learnMoredialog: false });
  };

  openGetStartedDialog = event => {
    this.setState({ getStartedDialog: true });
  };

  closeGetStartedDialog = event => {
    this.setState({ getStartedDialog: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />




        <div style={{ backgroundColor: "white" }} className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={4}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >

            <div style={{ backgroundColor: "white" }} className={classes.root}>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  Fuente de <b> datos </b>
                  </Typography>

                </ExpansionPanelSummary>


                <ExpansionPanelDetails>


                <Grid item xs={25} sm={20}>

            <Typography >
<Typography >
                <span> Los datos los obtenemos de la página oficial de la agencia tributaria, en su apartado <a underline='none' component={RouterLink} href='https://www.agenciatributaria.es/AEAT.internet/Inicio/La_Agencia_Tributaria/Memorias_y_estadisticas_tributarias/Estadisticas/_Comercio_exterior_/Datos_estadisticos/Descarga_de_Datos_Estadisticos/Descarga_de_datos_mensuales_maxima_desagregacion_en_Euros__centimos_/Descarga_de_datos_mensuales_maxima_desagregacion_en_Euros__centimos_.shtml' target="_blank" rel='noopener noreferrer'>
                 Datos mensuales de máxima degregación
              </a>. </span>

</Typography>
<Typography>
                <span> Obtenemos cada mes disponible de cada familia seleccionada para el rango de años seleccionado en la ejecución de la ETL. </span>  
</Typography >
            
            </Typography>
            
            </Grid>


                </ExpansionPanelDetails>
              </ExpansionPanel>


                <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  Principales <b> tecnologías </b> usadas 
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography  color='body2'>
                  <List component="nav">
                              <ListItem>

                                <span> <b> Python: </b> Lenguaje de programación que hemos usado para escribir el código de la ETL.  </span>
                              </ListItem>
                              <ListItem>

                               <span> <b> ElasticSearch: </b> Motor de base de datos en el que hemos almacenado los datos descargados y transformados. </span>
                            
                              </ListItem>

                              <ListItem>

                            <span> <b> Kibana: </b>  Herramienta de cuadros de mando multiplataforma cuyas visualizaciones se indexadan a la base de datos en ElasticSearch. </span>
                            
                              </ListItem>

                              <ListItem>

                              <span> <b> Docker: </b>  Contenedor en el que hemos encapsulado nuestra aplicación. Gracias a esta herramienta la aplicación es multiplataforma y no tenemos que gestionar las dependencias. </span>

                              </ListItem>




                            </List>
                    

                 </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>





              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  ¿Cómo funciona la ETL?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography  color='body2'>
                  El proceso de la ETL se divide en tres tareas principales.
                   <List component="nav">
                      <ListItem>
                      
                        <ListItemText
                          inset
                          primary="1. Busqueda y extracción datos"
                        />
                      </ListItem>
                      <ListItem>
                        
                        <ListItemText
                          inset
                          primary="2. Descarga de datos en archivos .csv en ordenador local"
                        />
                      </ListItem>
                      <ListItem>
                      
                        <ListItemText
                          inset
                          primary=" 3. Unión de datos en ElasticSearch y recarga de los cuadros de mando en Kibana"
                        />
                      </ListItem>


                    </List>


                  Diagrama de flujo del proceso:
                  <br/>
                  <br/>
                  <div className={classes.logo}> <img  src={require("../images/diagramETL.png")} alt="" /> </div>

                  <br/>

                  *Al activar la opción opción <i  style={{ fontFamily: 'courier new' }}> eliminar datos descargados</i> , se eliminarán todos los archivos temporales creados durante la ETL, reduciendo el uso de memoria correspondiente de la aplicación. <br/>
                  Si el ordenador en el que se va a ejecutar la ETL no tiene libre la memoria suficiente es necesario marcar esta opción.  (Ver apartado memoria) <br/>
                  Si no marcamos esta opción, guardaremos los archivos temporales, lo que permitirá a la ETL ir mas rápido en posteriores ejecuciones.

                   </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

             

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                    <b> Consideraciones </b> a tener en cuenta antes de ejecutar la ETL
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography  color='body2'>
                  <div>
                    <Typography color="secondary" gutterBottom>
                      Antes de ejecutar la ETL ten en cuenta que:
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
                                  primary="Sabremos que ejecución de la ETL ha finalizado: cuando en la pestaña ETL volvamos a ver la selección de parámetros o bien cuando veamos la tarjeta en la pestaña Historial."
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
                                 
                                  primary="La aplicación necesitará más espacio de memoria hasta que vuelva a ejecutarse la ETL.  (Los datos se almacenan localmente y se borran una vez esta finaliza. Si no finaliza, se quedarán almacenados en nuestro ordenador hasta el final de la siguiente ejecución)."
                                />
                              </ListItem>
                              <ListItem>
                               
                                <ListItemText
                                  
                                  primary="No se actualizarán los datos en los cuadros de mando."
                                />
                              </ListItem>

                            </List>
                    
                  </div>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              
              
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  ¿Cuanta <b> memoria </b> libre necesito en mi ordenador para poder ejecutar la ETL?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                  <Typography display="inline">
                  Aunque el tamaño dependerá del número de transacciones de cada familia y año en particular, aproximadamente: 
               < p >< /p >
                   Durante la ejecución de la ETL, serán necesarios aproximadamente unos 20GB de memoria por cada año completo de 12 meses seleccionado. 
               < p >< /p >
                  Una vez finalizada la ETL, los archivos ocuparán alrededor de 1GB de memoria para cada año (aproximadamente 50Mb para fósiles, 300 Mb para plástico y 400 Mb para armas).
               < p >< /p >
                  Por ejemplo, en una ejecución que comprenda los años desde 2017 a 2020, necesitariamos tener libres unos 80GB para la ejecución de la ETL y 4GB para el almacenamiento de los datos resultantes.
               </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  ¿Cuanto <b> tiempo </b> aproximadamente tardará la ejecución de la ETL?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                  <span> El tiempo de ejecución dependerá de distintos factores, principalmente de la conexión a internet y de las prestaciones de la máquina donde se ejecute. </span>
                < p >< /p >
                 <span> Para unas prestaciones y conexión dentro de lo estandar tardará aproximadamente entre 30 minutos y 3 horas por cada año completo de 12 meses seleccionado. </span>
                </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>


        

               <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  ¿Qué <b> códigos TARIC </b> tenemos actualmente etiquetados en el proyecto?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography  color='body2'>
                 Para etiquetar los códigos TARIC usaremos el archivo .json mostrado a continuación. Para cada código TARIC buscaremos en el archivo el código con el que coincidan más digitos, comenzando a buscar coincidencia de 8 dígitos, si no la encontramos de 6, y así sucesivamente con 4 y 2 dígitos. Cuando encontremos la coincidencia, usaremos la etiqueta correspondiente. En caso de no encontrar ninguna coincidencia, lo etiquetaremos como "No especificado".

                 <PrettyPrintJson data={ data } />
                 </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

          


              


              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  <b> Código </b> aplicación
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography  color='body2'>
                
                  <Typography gutterBottom> 
            
                    <span style={{fontFamily:"courier new"}}><a href="https://github.com/joseroma/3xp0rts-c0ntr0l" target= "_blank"><img src={require('../images/github_icon.png')} height="35" width="33" style={{verticalAlign: "middle"}}/></a> joseroma</span>
                  </Typography>

                  Para ver el repositorio es necesario iniciar sesión con una cuenta que tenga permisos.
                 </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>


            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}  style={{ textTransform: 'uppercase' }} color='secondary' >
                  <b> Contacto </b>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography  color='body2'>
                  <Typography gutterBottom>   
            <span style={{fontFamily:"courier new"}}><a href="mailto:josrodmal0@gmail.com"><img src={require('../images/icon_mail.webp')} height="27" width="35" style={{verticalAlign: "middle"}}/></a> josrodmal0@gmail.com </span>
          </Typography>
          
          
              </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

            </div>

            </Grid>
          </Grid>
          <SwipeDialog
            open={this.state.learnMoredialog}
            onClose={this.dialogClose}
          />
          <InstructionDialog
            open={this.state.getStartedDialog}
            onClose={this.closeGetStartedDialog}
          />
        </div>

        <FooterBar/>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
