import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import "./react-datetime/css/react-datetime.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {MuiPickersUtilsProvider} from "@material-ui/pickers"
// import DateFnsUtils from "@date-io/date-fns"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MuiPickersUtilsProvider utils= {DateFnsUtils}> */}
    <App />
    {/* </MuiPickersUtilsProvider> */}
  </React.StrictMode>

);

reportWebVitals();
