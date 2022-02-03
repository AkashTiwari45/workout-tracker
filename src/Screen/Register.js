import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField } from '@mui/material'
import Button from '@material-ui/core/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const onPress = () => {
    alert("data submitted successfully")
}

const Register = () => {
    const paperStyle = { padding: '5px 20px', width: 450, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#00ffff' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddOutlinedIcon style={{ color: 'black' }} />
                    </Avatar>
                    <h2 style={{ margin: 0 }}>Sign Up</h2>
                    <Typography gutterBottom variant="caption"><h6>Please fill this form to create an account</h6>
                    </Typography>
                </Grid>
                <form>
                    <TextField style={{ margin: '10px 0px' }} fullWidth label="Name" />
                    <TextField fullWidth label="Email" />
                    <FormControl component="fieldset">
                        <FormLabel style={{ marginTop: 7 }} component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            defaultValue=""
                            name="radio-buttons-group"
                            style={{ display: 'initial', marginLeft: 8 }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField style={{ margin: '10px 0px' }} fullWidth label="Phone Number" />
                    <TextField fullWidth label="Password" />
                    <TextField style={{ margin: '10px 0px' }} fullWidth label="Confirm Password" />

                    <FormControlLabel style={{ marginLeft: 0 }} control={<Checkbox />} label="I accept the terms and conditions." />

                    <Button onClick={onPress} type="submit" variant="contained" color="primary" fullWidth>
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register
