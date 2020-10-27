import React, {Component} from 'react';
import {Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link} from "@material-ui/core";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={username:"", useremail:"", password:"", passConfirm:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            username:event.state.username,
            useremail:event.state.useremail,
            password:event.state.password,
            passConfirm:event.state.passConfirm
        });
    }
    handleSubmit(event){
        event.preventDefault();

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
                                                <TextField type="text" placeholder="userName" fullWidth name="username" variant="outlined"
                                                    value={this.state.username}
                                                    onChange={(event)=>
                                                        this.setState({
                                                            [event.target.name]:event.target.value,
                                                        })
                                                    } required autoFocus/>
                                            </Grid>
                                            <Grid item>
                                                <TextField type="email" placeholder="Email" fullWidth name="useremail" variant="outlined"
                                                    value={this.state.useremail}
                                                    onChange={(event)=>
                                                        this.setState({
                                                            [event.target.name]:event.target.value,
                                                        })
                                                    } required autoFocus/>
                                            </Grid>
                                            <Grid item>
                                                <TextField type="password" placeholder="Password" fullWidth name="password" variant="outlined"
                                                    value={this.state.password}
                                                    onChange={(event)=>
                                                        this.setState({
                                                            [event.target.name]:event.target.value,
                                                        })
                                                    } required autoFocus/>
                                            </Grid>
                                            <Grid item>
                                                <TextField type="password" placeholder="Password Confirm" fullWidth name="password" variant="outlined"
                                                    value={this.state.password}
                                                    onChange={(event)=>
                                                        this.setState({
                                                            [event.target.name]:event.target.value,
                                                        })
                                                    } required autoFocus/>
                                            </Grid>
                                            <Grid item>
                                                <Button variant="contained" color="primary" fullWidth type="submit" className="button-block">
                                                    회원 가입
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <br />
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        이전으로
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Register;
