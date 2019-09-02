import React from 'react'
import {HashRouter,Route,Link,Switch,Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

class App extends React.Component{
	render(){
		return (
			<HashRouter>
				
			
				<Switch>
					<Route path="/" exact component={Home}></Route>
				    
					<Route path="/login" component={Login}></Route>
					<Route path="/home" component={Home}></Route>
					{/* <Redirect  exact from="/" to="/home" /> */}
				</Switch>
				
			</HashRouter>
		)
	}
}
export default App