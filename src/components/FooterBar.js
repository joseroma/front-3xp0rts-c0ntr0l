import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/joseroma/3xp0rts-c0ntr0l">
        3xp0rts-c0ntr0l
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {

  return (
    <div className>
      <CssBaseline />
      <Grid container justify="center">
        <Typography variant="body2" color="textSecondary">
          {'Made with  💚 '}
        </Typography>
        <br/>
      </Grid>

      <Grid container justify="center">

      <Copyright/>
      </Grid>
    </div>
  );
}