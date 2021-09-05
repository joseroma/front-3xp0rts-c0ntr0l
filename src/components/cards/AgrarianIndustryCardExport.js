import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const plastic_img = require("../../images/desertification_1.jpg");

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
  <Link underline='none' component={RouterLink} to='/cuadro-de-mandos-agrarian-industry'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={plastic_img}
          title="Cuadro de manos de industria agraria"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: "bold "}}>
            Industria agraria
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cuadro de mando de exportaciones e importaciones de industria agraria Españolas
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
  );
}