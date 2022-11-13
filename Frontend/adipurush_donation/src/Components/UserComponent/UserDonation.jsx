import React from 'react'
import { Avatar, Badge, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Sidebar from '../Sidebar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoneIcon from '@mui/icons-material/Done';
import { Navigate, useNavigate } from 'react-router-dom';


function UserDonation() {

  const navigate=useNavigate();

  return (
    <div>
         <Box sx={{width:"100%",height:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
            <Stack direction="row">
                <Sidebar status={"Donation"}/>
                <Stack sx={{width:"85%",height:"auto",backgroundColor:"#e7e8e8"}}>
                    <Stack direction="row" sx={{display:"flex",alignItems:'center',justifyContent:"space-between",margin:"20px 40px 20px 30px"}}>
                        <>
                        <Stack direction="row" sx={{display:"flex",alignItems:"center"}}>
                            <Box zIndex="1">
                                <svg
                                width="115"
                                height="29"
                                viewBox="0 0 115 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                d="M108.437 7.24752L101.879 0H0V29H101.879L108.437 21.7525L115 14.505L108.437 7.24752Z"
                                fill="#FBB040"
                                />
                                </svg>
                            </Box>
          
                            <Stack
                                direction="row"
                                justifyContent="left"
                                alignItems="center"
                                zIndex="2"
                                sx={{ position: "absolute" }}
                                >
                                <Typography
                                    sx={{
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        color: "#F9F9F9",
                                        paddingLeft: "10px",
                                        textAlign:"center"
                                    }}
                                    >DONATION
                                </Typography>
                            </Stack>
                        </Stack>
                        </>
                        <Stack direction="row" spacing={2} sx={{display:"flex",alignItems:'center',justifyContent:"center"}}>
                            <Box sx={{}}>
                                <IconButton size="small" aria-label="show 17 new notifications" sx={{color:"#ff8c00"}}>
                                    <NotificationsIcon sx={{width:"30px",height:"30px"}}/>
                                    {/* <Badge badgeContent={10} color="error"></Badge> */}
                                </IconButton>
                            </Box>
                            <Typography sx={{color:"#cb4154",fontWeight:"500",fontSize:"1.1rem"}}>My Profile</Typography>
                            <Avatar alt="" src="/static/images/avatar/2.jpg" sx={{backgroundColor:"#ff8c00",opacity:"0.7","&:hover": {backgroundColor: '#ff4500',boxShadow:"0px 0px 5px #800000"} }}/>
                        </Stack>
                    </Stack>

                    <Stack direction="row" justifyContent="start" alignItems="center" sx={{height:"40px",margin:'0px 0px 20px 30px'}}>
                
                        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ }}>
                            <Box  sx={{width:"29px", height:"29px",borderRadius:"50%", backgroundColor:"#FFA946", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <DoneIcon sx={{color:"#fff", fontSize:"20px"}}/>
                            </Box>
                            <Typography sx={{fontSize:"18px", fontWeight:"500",color:"#cb4154"}}>Details</Typography>
                            <Stack direction="row" alignItems="center" >
                                <Box sx={{width:"25px", height:"0px", borderBottom:"2px dashed #A2A3A6"}}></Box>
                                <Box sx={{height:"10px", width:"10px",borderRadius:"50%",  backgroundColor:"#A2A3A6"}}></Box>
                            </Stack>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ marginLeft:"20px"}}>
                            <Box  sx={{width:"29px", height:"29px",borderRadius:"50%", backgroundColor:"#A2A3A6", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <DoneIcon sx={{color:"#fff", fontSize:"20px"}}/>
                            </Box>
                            <Typography sx={{fontSize:"18px", fontWeight:"500",color:"#cb4154"}}>Overview</Typography>
                            <Stack direction="row" alignItems="center" >
                                <Box sx={{width:"25px", height:"0px", borderBottom:"2px dashed #A2A3A6"}}></Box>
                                <Box sx={{height:"10px", width:"10px",borderRadius:"50%",  backgroundColor:"#A2A3A6"}}></Box>
                            </Stack>
                        </Stack>

            </Stack>

                    <Stack sx={{textAlign:"center",margin:"10px 30px 30px 30px",backgroundColor:"#f8f8ff",paddingTop:"30px",boxShadow:"0px 0px 2px lightgray"}}>
                        <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"20px"}}>💮|| जय श्री राम ||💮</Typography>
                        <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"20px",fontFamily:"Josefin Slab",fontSize:"1.5rem"}}>Please Enter Your Details</Typography>
                        <Box sx={{margin:"0% 15%"}}>
                        <TextField id="standard-basic" margin="dense" label="Name" fullWidth variant="standard" required="true" color="warning"/>
                        <TextField id="standard-basic" margin="dense" label="location" fullWidth variant="standard" required="true" color="warning"/>
                        <TextField id="standard-basic" margin="dense" label="Amount" fullWidth variant="standard" required="true" color="warning"/> 
                        </Box>
                        <Box sx={{display:"flex",justifyContent:'center',marginTop:"30px"}}>
                          <Button
                            sx={{display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"16px",backgroundColor:"#ffa500",color:"white",padding:"5px 15px","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"} }} onClick={()=>{navigate('/userpaymentview')}}
                            >Go To Payment</Button>
                        </Box>
                
                        <Stack sx={{boxShadow:"0px 0px 2px 1px lightgray",padding:"15px 0px",marginTop:"50px"}}>
                            <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem",wordSpacing:"0.5rem"}}>राम काज कीन्हें बिनु, मोहि कहां विश्राम ।।</Typography>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
        </Box>
    </div>
  )
}

export default UserDonation