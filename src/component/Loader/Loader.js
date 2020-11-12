import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    height: '100%',
    display: 'flex',
    position: 'fixed',
    top:0,
    left:0,
    justifyContent: 'center',
    alignItems:'center', 
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loader() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )

}