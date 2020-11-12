//import { createMuiTheme } from '@material-ui/core/';
import { unstable_createMuiStrictModeTheme as MyTheme } from '@material-ui/core';

//const colorPrimary = "#00838f";
const colorPrimary = '#0d47af'; //white

//const colorSecondary = "#FFBA60";

//const colorPrimary = '#fff'; //white

const colorSecondary = "#0d47a1"; //blue
const colorSpecial = "#FFBA60"; //orange



export default MyTheme({
  
  palette:{
      //type:'dark',
      type:"light", //dark
    common:{
      colorPrimary:`${colorPrimary}`,
      colorSecondary:`${colorSecondary}`,
      colorSpecial:`${colorSpecial}`,
    },

      primary:{
      light: `${colorPrimary}`,
	    dark: `${colorSpecial}`,//'#002884',
      main:`${colorPrimary}`,
      contrastText: '#000',
    },

      secondary:{
        main:`${colorSecondary}`,
        light: `${colorSecondary}`,
        //dark: '#0d47a1',
        dark: `${colorSpecial}`,
        contrastText: '#fff'
    },
  }

})

/*
typography:{
    tab:{
      //fontFamily:"Raleway",
      textTransform:"none",
      fontWeight:700,
      fontSize:'1rem',
    },
  },
button:{
  outline: 'none',
  borderRadius:"50px",
  marginLeft:"50px",
  marginRight:"25px",
  fontSize:'1rem',
  textTransform:"upper",
} */
