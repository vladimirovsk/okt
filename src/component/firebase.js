import fb from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase-firestore'

const apiKey             = process.env.REACT_APP_FIRBASE_API_KEY;// REACT_APP_FIRBASE_API_KEY;
const authDomain         = process.env.REACT_APP_FIRBASE_AUTH_DOMAIN;
const databaseURL        = process.env.REACT_APP_FIRBASE_URL;
const projectId          = process.env.REACT_APP_FIRBASE_ID;
const storageBucket      = process.env.REACT_APP_FIRBASE_BUCKET;
const messagingSenderId  = process.env.REACT_APP_FIRBASE_SENDER_ID;
const appId              = process.env.REACT_APP_FIRBASE_API_APP_ID;


// apiKey : "https://ng-crm-75a1f.firebaseio.com" 
// authDomain: "ng-crm-75a1f.firebaseapp.com",
// databaseURL: "https://ng-crm-75a1f.firebaseio.com",
// projectId: "ng-crm-75a1f",
// storageBucket: "ng-crm-75a1f.appspot.com",
// messagingSenderId: "87725660702",
// appId: "1:87725660702:web:02cfa90418c5b323d76c0f"

const url = process.env.REACT_APP_DB_URL



// Initialize Firebase
class Firebase {
  constructor(){
    
  const config = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
  };

    console.log("url",url)
    console.log("config",config)
    fb.initializeApp(config);
    this.auth = fb.auth();
    this.fb = fb.firestore();
  }




  login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.auth.signOut();
  }

  auth =() =>{
    return this.auth;
  }

  async register(name, email, password){
   this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.providerData({
      displayName:name
    })
  }

  addQuote(quote){
    if(!this.auth.currentUser){
      return alert('No authorized user');
    }
    return this.db.doc('Hi');     
  }

  isInitialized(){
    return new Promise(resolve=>{
      this.auth.onAuthStateChanged(resolve)
    })
  }
}
 

export default new Firebase();