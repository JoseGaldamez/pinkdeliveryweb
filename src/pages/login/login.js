import React from 'react';
import './login.css';


const logo = require('../../img/logoempresa.png');

class LoginPage extends React.Component {

    state = {
        user: '',
        password: '',
        remember: false,
    }
    
    login = () => {
        console.log(this.state);
    }

    pass = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    user = (e) => {
        this.setState({
            user: e.target.value,
        })
    }

    remember = () => {
        this.setState({
            remember: !this.state.remember,
        })
    }

    render(){
        return (
            <div className="login-page">
                
                <div className="card-login">
                    <img className="logo-img" src={logo} alt='Logo Pink Delivery' />
                    <div className="formulario-login">
                        <h3>Inicio de Sesion</h3>
                        <input defaultValue={this.state.user} onInput = {this.user} className="input-login" type="text" name='user' id="user" placeholder="User" />
                        <input defaultValue={this.state.password} onInput = {this.pass} className="input-login" type="password" name='password' id="password" placeholder="Password" />
                        <br />
                        <div className="recordar">
                            <input defaultValue={this.state.password} onChange={this.remember} type="checkbox" name="check-recordar" id="check-recordar" /> <label htmlFor="check-recordar">Recordar sesion</label>
                        </div>
                        <button onClick={this.login} className="boton-iniciar-sesion">
                            INICIAR SESION
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}


export default LoginPage;