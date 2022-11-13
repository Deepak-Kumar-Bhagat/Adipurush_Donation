import React from 'react'
import { Box, Stack } from '@mui/system';
import MainNavbar from './MainNavbar';
import ramtemple from "../Images/ramtemple.png";
import '../css/signup.css';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-scroll";

function MainHome() {

  const [user,selectUser]=useState();

  return (
    <div>
        <Box className="homebackground" sx={{width:"100%",height:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
          <MainNavbar user={user} selectUser={selectUser}/>
          <Box id= 'Home' sx={{}}>
            <Box sx={{height:"100vh",display:"flex",justifyContent:"center",backgroundColor:"rgba(248, 250, 252,.7)",flexDirection:"column"}}>
              <Box sx={{marginLeft:"10%"}}>
                <Typography sx={{fontSize:"3.5rem",fontWeight:"700",color:"#cb4154",opacity:"0.8",letterSpacing:'.4rem'}}>SHREE RAM</Typography>
                <Typography className="blink" sx={{fontSize:"3.3rem",fontWeight:"700",color:"#ff4500",fontFamily:"roboto",opacity:"0.8", letterSpacing:'.5rem'}}>DONATION</Typography>
                <Stack direction="row" sx={{marginTop:"35px"}}>
                  <Button size="large"
                  sx={{display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"16px",backgroundColor:"#ffa500",color:"white",padding:"5px 15px","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}} onClick={()=>{selectUser("User")}}
                  >Donate Now</Button>
                  <Link to="About"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                  >
                  <Button size="large"
                  sx={{mx:5,display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"16px",color:"#ff8c00",padding:"5px 15px",border:"1.5px solid #ff8c00","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000",color:"white"} }}
                  >Show me more</Button>
                  </Link>
                </Stack>
              </Box>
            </Box>
            <Box id= 'About' sx={{boxShadow:"0px 0px 10px gray"}}>
                <Box sx={{background:"#f8f8ff",textAlign:"center",padding:"4% 4% 4% 4%",opacity:"0.9"}}>

                    <Typography sx={{color:"#cb4154",fontWeight:"400",marginBottom:"20px",fontFamily:"Josefin Slab",fontSize:"1.6rem"}}>ABOUT US</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><b>Shree Rama Prashnavali</b> or <b>Ramshalaka</b> is an extract from <b>'Shri Ram Charit Manas'</b>, authored by the Saint <b>Goswami Tulsidas</b>. <b>'Shri Ram Charit Manas'</b>, also popularly known as <b>'Ramayana'</b> is a Holy book of <b>Hindus</b>. <b>Ramayana</b> describes the life and times of <b>Lord Rama</b>, the seventh incarnation of <b>Lord Vishnu</b>.</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><b>Shree Rama Prashnavali</b> is used to get answers to your questions or predict the outcome of endeavors you want to take. The answers / predictions are based on <b>Chopais</b> (couplets) from <b>'Shri Ram Charit Manas'</b> or <b>'Ramayana'</b>.</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"0px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><b>Shree Rama Prashnavali</b> is a 15x15 grid. Each square in the grid has one <b>Akshar</b> (Hindi alphabet) from nine <b>Chopais</b> (couplets) of <b>Shri Ram Charit Manas</b>. As per the procedure laid down in <b>Shri Ram Charit Manas</b>, the user has to close his / her eyes and put his / her finger on the grid. The <b>akshars</b> from every ninth square starting from the square on which finger was placed by the user are taken and joined in a sequence. This forms one <b>Chopai</b> from <b>'Shri Ram Cahrit Manas'</b>. The answer to the question asked is based on the <b>Chopai</b> so formed.</Typography>
                </Box>
            </Box>

            <Stack id= 'Contact Us' direction="row" sx={{background:"rgba(248, 250, 252,.7)",boxShadow:"0px 0px 10px gray"}}>
                <Box sx={{width:"50%",margin:"35px"}}>
                  <img src={ramtemple} style={{width:"100%",height:"100%"}}></img>
                </Box>
                <Box sx={{textAlign:"center",padding:"4% 3% 4% 3%",width:"50%"}}>
                    <Typography sx={{color:"#cb4154",fontWeight:"400",marginBottom:"20px",fontFamily:"Josefin Slab",fontSize:"1.6rem"}}>CONTACT US</Typography>
                    <form>
                    <Box sx={{display:"flex",justifyContent:"center",margin:"20px 0px 0px 0px"}}>
                      <Stack directio="col" spacing={4} sx={{width:"500px"}}>
                        <TextField variant="standard" color="warning" focused placeholder="Name *" required type="string" sx={{Color:'#ff8c00'}}/>
                        <TextField variant="standard" color="warning" focused placeholder="Email *" required type="email" sx={{color:'#ff8c00'}} />
                        <TextField variant="standard" color="warning" focused multiline placeholder="Message *" required type="string" sx={{color:'#ff8c00'}}/>
                      <Box>
                        <Button className="questionbox" variant="contained" size="medium" type='submit' sx={{padding:"7px 40px",marginTop:"20px",backgroundColor:"#ffa500 ",color:"white","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}}>Send</Button>
                      </Box>
                    </Stack>
                    </Box>
                    </form>
                </Box>  
            </Stack>

            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",background:"#e7e8e8",boxShadow:"0px 0px 10px gray"}}>
              <Typography sx={{padding:"2% 0% 2% 0%", color:"#b22222",fontFamily:"Poppins"}}><a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>©copyright</a> || <a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>Adipurusham</a></Typography>
            </Box>

          </Box>
        </Box> 
    </div>
  )
}

export default MainHome