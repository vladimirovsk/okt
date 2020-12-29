import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    textField: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },

        //backgroundColor: '#fff', //theme.palette.common.primary''
        paddingTop: theme.spacing(1),
      }
}))

const Home = (props) => {
    //const classes = useStyle();
    return (
        <React.Fragment>
                   
            <h3>HOME</h3>

        

        </React.Fragment>
    )

}

export default Home;