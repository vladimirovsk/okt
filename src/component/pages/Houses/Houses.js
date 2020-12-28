import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';

import {inc, dec} from '../../../store/actions/counter';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));
function Houses(){

  const classes = useStyles();
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const [type, setType] = React.useState('users')
  const [data, setData] = React.useState([])

  React.useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(responce => responce.json())
      .then(json => setData(json))
  }, [type])

  
  if (Boolean(!data)) console.log('not data')
  return(
    <React.Fragment>
       <div className={classes.appBarSpacer} />
      <h3>HOUSES</h3>
      <Typography component='h2' variant='h1'>{counter}</Typography>
      <Button id='dec' variant="contained" color="secondary" className='btn' onClick={(()=>dispatch(dec))}>DEC</Button>
      &nbsp;
      <Button id='inc' variant="contained" color="secondary" className='btn' onClick={(()=>dispatch(inc))}>INC</Button>
      <hr/>
      <Typography component='h3' variant='h3'>{type}</Typography>
      <Button id='users' variant="outlined" size='small' color="primary" onClick={()=>setType('users')}>USERS</Button>
      <Button id='todo' variant="outlined" size='small' color="secondary" onClick={()=>setType('todos')}>TODO</Button>
      <Button id='posts' variant="outlined" size='small' color="default" onClick={()=>setType('posts')}>POSTS</Button>

  
    </React.Fragment>
  )
}
export default Houses