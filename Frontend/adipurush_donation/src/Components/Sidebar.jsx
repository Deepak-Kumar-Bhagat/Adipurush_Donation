import React, { useState } from 'react'
import ramlogo from '../Images/ramlogo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaidIcon from '@mui/icons-material/Paid';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Stack, Typography } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Sidebar({status}) {

    const navigate=useNavigate();
    console.log(status);
  return (
            <div>
                <Stack sx={{width:"15vw",height:"100vh",backgroundColor:"#f8f8ff"}}>
                    <Box sx={{textAlign:"center"}}>
                        <img src={ramlogo} style={{width:"100px",margin:"20px 0px 0px 0px"}}></img>
                        <Typography sx={{fontWeight: 700,letterSpacing: '.4rem',color: '#800000',textDecoration: 'none',textAlign:"center",fontSize:"10px",margin:"-5px 0px 30px 0px"}}>DONATION</Typography>
                    </Box>
                    
                    <Stack spacing={2.5}>
                    <Link to="/userdashboard" style={{ textDecoration:'none'}}>
                    <Stack direction="row" sx={{cursor:"pointer",height:"150%",alignItems:"center",...(status == "Dashboard"?{boxShadow:"0px 0px 5px gray",backgroundColor:"orange"}:null)}}>
                        <DashboardIcon sx={{margin:"0px 10px",...(status == "Dashboard"?{color:"white"}:{color:"gray"})}}/>
                        <Typography sx={{fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left",...(status == "Dashboard"?{color:"white"}:{color:"gray"})}}>Dashboard</Typography>
                    </Stack>
                    </Link>

                    <Link to="/userdonation" style={{ textDecoration:'none'}}>
                    <Stack direction="row" sx={{cursor:"pointer",height:"150%",alignItems:"center",...(status === "Donation"?{boxShadow:"0px 0px 5px gray",backgroundColor:"orange"}:null)}}>
                        <PaidIcon sx={{margin:"0px 10px",...(status === "Donation"?{color:"white"}:{color:"gray"})}}/>
                        <Typography sx={{fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left",...(status === "Donation"?{color:"white"}:{color:"gray"})}}>Donation</Typography>
                    </Stack>
                    </Link>
                    
                    <Link to="" style={{ textDecoration:'none'}}>
                    <Stack direction="row" sx={{cursor:"pointer",height:"150%",alignItems:"center",...(status === "History"?{boxShadow:"0px 0px 5px gray",backgroundColor:"orange"}:null)}}>
                        <HistoryIcon sx={{margin:"0px 10px",...(status === "History"?{color:"white"}:{color:"gray"})}}/>
                        <Typography sx={{fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left",...(status === "History"?{color:"white"}:{color:"gray"})}}>History</Typography>
                    </Stack>
                    </Link>

                    <Link to="" style={{ textDecoration:'none'}}>
                    <Stack direction="row" sx={{cursor:"pointer",height:"150%",alignItems:"center",...(status === "Settings"?{boxShadow:"0px 0px 5px gray",backgroundColor:"orange"}:null)}}>
                        <SettingsIcon sx={{margin:"0px 10px",...(status === "Settings"?{color:"white"}:{color:"gray"})}}/>
                        <Typography sx={{fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left",...(status === "Settings"?{color:"white"}:{color:"gray"})}}>Settings</Typography>
                    </Stack>
                    </Link>
                    </Stack>
                </Stack>
            </div>
  )
}

export default Sidebar