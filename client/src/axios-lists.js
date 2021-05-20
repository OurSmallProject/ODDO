import axios from 'axios';

let serverURL = 'http://localhost:8081';

 
//TODO use hostname here
if(process.env.NODE_ENV === 'production'){
    serverURL = 'https://NAME.herokuapp.com/';


}

const instance = axios.create({
   baseURL: serverURL
});


export default instance;

