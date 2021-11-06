
import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Link from 'next/link'
import Image from "next/image"
import Icon from '@material-ui/core/Icon';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import {makeStyles }from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
}));
   
export default function Footer(){
   const classes = useStyles();
   return(
      <div>
               <Grid container spacing={2} >
               
              <Grid>
                 <Image  src="/CMD Digital Computer.png" alt="lago.jpg" width="180vh" height="200" />
              </Grid>
             
              <Grid item>
                    {/* <Box borderBottom={1} fontSize={20}  fontFamily="Cambria" color=" #ff6f00"  marginTop={2}>
                       Accessary</Box> */}

                        <Link href="/Laptop/MSI">
                           Test
                        </Link>
                        <Link href = "/Laptop/ASUS">
                        <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                        </Link>
                        <Link href = "/Laptop/Dell">
                        <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                        </Link>
                        <Link href = "/Laptop/Lenovo">
                        <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                        </Link>
                        <Link href = "/Laptop/MacBook">
                        <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                        </Link>
                                    
                 </Grid>    


                 
                 <Grid item >
                    {/* <Box borderBottom={1} fontSize={20}  fontFamily="Cambria" color=" #ff6f00"  marginTop={2}>
                       Accessary</Box> */}

                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                   
                 </Grid>  



                 <Grid item>
                    {/* <Box borderBottom={1} fontSize={20}  fontFamily="Cambria" color=" #ff6f00"  marginTop={2}>
                       Accessary</Box> */}
                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                       <p style={{color:"#f3e5f5"}} >DASFDKSAFH</p>
                   



                 </Grid>                      
                   
           
                  {/* <Box style = {{marginTop:25}}>
                     <Icon ><YouTubeIcon  style={{ fontSize: 29, color: "red", margin:5}}  /></Icon>
                     <Icon ><FacebookIcon  style={{ fontSize: 25 , color: "#449be3", margin:5}} /></Icon>
                     <Icon ><InstagramIcon style={{ fontSize: 25 , color: "#e3365f", margin:5}} /></Icon>
                     <Icon ><WhatsAppIcon style={{ fontSize: 25 , color: "green", margin:5}} /></Icon>
                     <Icon ><TelegramIcon style={{ fontSize: 25 , color: "#449be3", margin:5}} /></Icon>
                 </Box>
                   */}

               </Grid>
     </div>
   )
}