import { Box, Button, FilledInput, FormControl, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import MainNavbar from '../MainNavbar'
import temple from '../../Images/temple.png';
import { useState } from 'react';
import '../../css/signup.css';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


function UserSignUp() {

    const [user,selectUser]=useState();

    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState(false);
    const [con_password,setcon_password]=useState('');
    const [name,setname]=useState('');

    const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
     <div>
        <Box sx={{width:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
            <MainNavbar userSignUp={true} user={user} selectUser={selectUser}/>
            <Stack  direction="row" sx={{justifyContent:"space-around"}}>
                <Box sx={{display:"flex",width:"55%",opacity:"0.8",alignItems:"center",justifyContent:"center"}}>
                    <img src={temple} style={{width:"90%",height:"80%"}}></img>
                </Box>
                <Box sx={{textAlign:"center",width:"50%"}}>
                    <Box className='signup-container' sx={{display:"flex",flexDirection:"column",width:"60%",padding:"40px",boxShadow:"0px 0px 5px orange",margin:"40px 0px 40px 60px"}}>
                        <Typography sx={{color:"#ff4500",fontWeight:"600",margin:"0px 0px 10px 0px",fontSize:"0.8rem"}}>💮|| जय श्री राम ||💮</Typography>
                        <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"25px",fontFamily:"Josefin Slab",fontSize:"1.5rem"}}>USER SIGNUP</Typography>

                        <form method='POST'>
                            <Box sx={{fontSize:"0.5rem"}}>
                                <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" type="email" required="true" color="warning" value={email} onChange={(e)=>{setemail(e.target.value)}}/>

                                <FormControl sx={{}} variant="outlined" fullWidth size="small" margin="dense" required="true" color="warning">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>}
                                        label="Password"/>
                                </FormControl>

                                <FormControl sx={{}} variant="outlined" fullWidth size="small" margin="dense" required="true" color="warning">
                                    <InputLabel htmlFor="outlined-adornment-password">Confirmed Password</InputLabel>
                                    <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>}
                                        label="Password"/> 
                                </FormControl>
                            
                            <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Full Name" variant="outlined" type="text" required="true" color="warning" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                            </Box>
                            
                        {
                        error!='' && <div style={{color:"red",fontWeight:"400",fontSize:"1.3rem",marginTop:"1rem"}}>{error}</div>
                        }
                        <Button variant="contained" component="span" fullWidth style={{marginTop:"1rem"}} sx={{color: 'white', display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"14px",backgroundColor:"#ffa500","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}}>
                            signup
                        </Button>
                     </form>
                        <Typography sx={{marginTop:"25px",fontWeight:"400",padding:"15px 0px",boxShadow:"0px 0px 2px 1px #ffff00",opacity:"0.8",fontFamily:"popins",fontWeight:"500",fontSize:"1.1rem",color:"#cb4154"}}>Already Have an Account? <span className="linkhover" onClick={()=>{selectUser("User")
                        }}>Login</span></Typography>
                    </Box>
                </Box>
            </Stack> 
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",background:"#e7e8e8",}}>
              <Typography sx={{padding:"1% 0% 1% 0%", color:"#b22222",fontFamily:"Poppins"}}><a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>©copyright</a> || <a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>Adipurusham</a></Typography>
            </Box>
        </Box>
    </div> 
  )
}

export default UserSignUp  