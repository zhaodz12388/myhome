import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import axios from 'axios';

React.Component.prototype.axios=axios
 axios.defaults.baseURL='http://47.96.21.88:8086/'
 axios.interceptors.response.use(function (response) {
return response.data	 
 },function(error){
return error
 })
ReactDOM.render(<App />, document.getElementById('root'));


