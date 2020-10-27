import React, {Component} from 'react'
import {Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link} from '@material-ui/core';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={username:"", password:"", authflag:1};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            username:event.state.username,
            password:event.state.password
        });
    }
    handleSubmit(event){
        event.preventDefault();
        if(this.state.username==='junjun@a' && this.state.password==='password'){
            alert("success to login");
        } else{
            alert("make sure you put correct info");
        }
    }

    render(){
        return(
            <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container justify="left" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">줄서기 요기요!</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0} justify="center" direction="row">
                    <Grid item>
                        <Grid container direction="column" justify="center" spacing={2} className="loginRegister-form">
                            <Paper variant="elevation" elevation={2} className="loginRegister-background">
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                </Grid>
                                <br />
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField type="email" placeholder="Email" fullWidth name="username" variant="outlined"
                                                    value={this.state.username}
                                                    onChange={(event) =>
                                                        this.setState({
                                                               [event.target.name]:event.target.value,
                                                        })
                                                    } required autoFocus/>
                                            </Grid>
                                            <Grid item>
                                                <TextField type="password" placeholder="password" fullWidth
                                                    name="password" variant="outlined" value={this.state.password}
                                                    onChange={(event)=>
                                                        this.setState({
                                                            [event.target.name]:event.target.value,
                                                        })
                                                    } required />
                                            </Grid>
                                            <Grid item>
                                                <Button variant="contained" color="primary" fullWidth type="submit" className="button-block">
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <br />
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Forgot Password?
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}
export default Login;