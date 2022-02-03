import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Avatar, Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import lock from '../Screen/img/lock.png'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';



function Login() {
    const navigate = useNavigate();
    const logPress = () => {
        navigate('/register')  // home screen called
    }

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const paperStyle = { padding: 20, height: '80vh', width: 420, margin: "15px 30px" }
    const avatarStyle = { backgroundColor: '#00ffff', marginBottom: 15 }
    const btnStyle = { margin: '10px 0px' }


    return (

        <Grid>
            <Paper style={{ backgroundColor: 'blue', padding: 20, height: '80vh', width: 720, margin: "15px 30px", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <h1>hello</h1>
            </Paper>
            <Paper elevation={15} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <img src={lock} style={{ height: 25, width: 25 }} />
                    </Avatar>
                    <h2> Sign In </h2>
                </Grid>
                <TextField label="username" placeholder="Enter username" fullWidth required />
                <TextField style={{ marginTop: 8 }} label="password" placeholder="Enter password" type="password" fullWidth required />
                <FormControlLabel style={{ marginTop: 5 }}
                    control={<Checkbox checked={checked} onChange={handleChange} />}
                    label="Remeber me"
                />
                <Button style={btnStyle} align="start" type="submit" color="primary" variant="contained" fullWidth>Sign In</Button>
                <Typography>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography> Do you have an account ?
                    <Link onClick={logPress}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid >
    )
}

export default Login
