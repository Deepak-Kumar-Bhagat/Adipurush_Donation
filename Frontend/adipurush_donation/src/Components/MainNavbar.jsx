import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import ramlogo from '../Images/ramlogo.png';
import { Stack } from '@mui/system';
import { FormControl, InputAdornment, InputLabel, Modal, OutlinedInput, TextField } from '@mui/material';
import { useState } from 'react';
import temple from '../Images/temple.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../css/signup.css';
import { useEffect } from 'react';

const pages = ['Home', 'About', 'Contact Us'];
const setting=['User',"Admin","Super Admin"];

function MainNavbar({user,selectUser,userSignUp}) {

  console.log(user);

  const navigate=useNavigate();

   const [userSet,setUserSet]=useState({
    userTitle:"",
    option:false
   })

    const [email,setemail]=React.useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false);selectUser("")}

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

        const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event) => {
            setAnchorElUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };

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

  const SelectUser=(setting)=>{
    // console.log(page);  
    if(setting=="User"){
      let temp={
        userTitle:"Login",
        option:true
      }
      setUserSet(temp);
    } 
    else if(setting=="Admin"){
      let temp={
        userTitle:"Admin Login",
        option:false
      }
      setUserSet(temp);
    }
    else if(setting=="Super Admin"){
      let temp={
        userTitle:"Super Admin Login",
        option:false
      }
      setUserSet(temp);
    }
    handleOpen();
  }

  useEffect(()=>{
    if(user=="User"){
      SelectUser("User");
    }
  },[user])

  return (
    <div>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none',paddingTop:"10px",backgroundColor:"#f8f8ff",opacity:"0.9"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{}}>
             <img src={ramlogo} style={{width:"100px",margin:"0px 0px 0px 0px"}}></img>
             <Typography
           
            sx={{
              fontWeight: 700,
              letterSpacing: '.4rem',
              color: '#800000',
              textDecoration: 'none',
              textAlign:"center",
              fontSize:"10px",
              margin:"-5px 0px 0px 0px"
            }}
          >
            DONATION
          </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:"#ff8c00",margin:"0px 0px 0px 10px"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center" className="navoption" sx={{color:"#ff8c00"}} >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {
            userSignUp==true?
             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',marginLeft:"15px"} }}>
                <Button 
                onClick={()=>{
                handleCloseNavMenu()
                navigate('/');
                }}
                sx={{mx:1,color: '#ff8c00', display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"20px","&:hover": {color: 'red'} }}
                className="navoption"
              >
              Home
              </Button>
             </Box>:
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',marginLeft:"15px"} }}>
            {pages.map((page) => (
              <Link to={`${page}`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              >
              <Button 
                key={page}
                onClick={()=>{
                handleCloseNavMenu()
                if(page=="Home"){
                  navigate('/');
                }
                }}
                sx={{mx:1,color: '#ff8c00', display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"20px","&:hover": {color: 'red'} }}
                className="navoption"
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
          }

           <Box sx={{ flexGrow: 0,alignItems:"center"}}>
            <Tooltip title="" >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0  }}>
              <Button
                sx={{mx:3,display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"16px",backgroundColor:"#ffa500",color:"white",padding:"5px 15px","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"} }}
              >Login</Button>

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top', 
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              handleOpenUserMenu
              >
              {setting.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{}}>
                  <Typography textAlign="center" sx={{color:"#ff8c00"}} onClick={()=>SelectUser(setting)}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
        </Container>
      </AppBar>

       {/* Login Modal */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             width: "30%",
             bgcolor: 'white',
             border: '2px solid white',
             borderRadius:"10px",
             boxShadow: 24,
            
             px: 3,
            
             py: 5,
             textAlign:"center" 
            }}>
            <Box sx={{margin:"0px 35px"}}>
            <Typography sx={{color:"#ff4500",fontWeight:"600",margin:"0px 0px 10px 0px",fontSize:"0.8rem"}}>💮|| जय श्री राम ||💮</Typography>
            <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"25px",fontFamily:"Josefin Slab",fontSize:"1.5rem",textTransform:'uppercase'}}>{userSet.userTitle}</Typography>

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

              <Typography className="forgetpassword" sx={{marginTop:"1rem",fontFamily:"Poppins",fontSize:"1.1rem"}}>Forget Password ?</Typography>

              {error && <Typography sx={{fontFamily:"Josefin Slab",color:"red"}}>Credentials is wrong !!</Typography>}
              <Box>
              <Button className="questionbox" variant="contained" size="small" fullWidth sx={{padding:"7px 30px",margin:"20px 0px 20px 0px",backgroundColor:"#ffa500 ",color:"white","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #ff8c00"}}} onClick={()=>{navigate("/userdashboard")}}>Login</Button>
              </Box>

              {userSet.option && 
              <Typography sx={{marginTop:"20px",fontWeight:"400",padding:"15px 0px",boxShadow:"0px 0px 2px 1px #ffff00",opacity:"0.8",fontFamily:"popins",fontWeight:"500",fontSize:"1.1rem",color:"#cb4154"}}>Don't Have an Account? <span className="linkhover" onClick={()=>{navigate("/signup")}}>Signup</span></Typography>
              }

            </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default MainNavbar