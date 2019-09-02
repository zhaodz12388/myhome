import React from 'react'
import {Form } from 'semantic-ui-react'
import   './Login.css'
import {withRouter} from 'react-router-dom'



class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			uname:'',
			pwd:''
		}
	}
	handleChang=(e)=>{
 let {name,value}=e.target
 this.setState({
	 [name]:value
 })
	}
	login= async(e)=>{
e.preventDefault()
let{history}=this.props
let{uname,pwd}=this.state
 let res=await this.axios.post('users/login',{
	uname,
	pwd
})
let{meta,data}=res
if(meta.status===200){
localStorage.setItem('myToken',data.token)
history.push('./home')
}
	}
render(){
	return (
		<div className="login-container">
		<div className="login-title">登录</div>	
		<div className="login-form">
		<Form action="" onSubmit={this.login}>
    <Form.Field>
      
	  <Form.Input
	   icon="user"
	   size="big"
	   autoComplete="off"
	   iconPosition="left"
	   name='uname'
	   value={this.state.uname}
       onChange={this.handleChang}
       required
	   placeholder='请输入用户名...' />
    </Form.Field>
    <Form.Field>
      
	<Form.Input
	   icon="lock"
	   size="big"
	   type="password"
	   iconPosition="left"
	   value={this.state.pwd}
       onChange={this.handleChang}
	   name='pwd'
	   autoComplete="off"
       required       
	   placeholder='请输入密码...' />
    </Form.Field>
    
	<Form.Button 
	type='submit'
	 size="big"
	 fluid positive>登录</Form.Button>
  </Form>
  </div>
		</div>
	)
}
}

export default withRouter(Login) 
