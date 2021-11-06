
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
   classes:{
   }
}));
   
export default function Footer(){
   const classes = useStyles();
   return(
      <footer>
         <Box   px={{xs:3,sm:10} } 
                py={{ xs:5 ,sm:10}} 
                bgcolor="#333332" 
                color="white"    >
            
            <Container maxWidth="lg " >
               <Grid container spacing={2} >
               
              <Grid item xs={5} sm={2}>
                 <Box marginRight={1}  > 
                 <Image  src="/CMD Digital Computer.png" alt="lago.jpg" width="100%" height="100%" />
                 </Box>
              </Grid>
             
                <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={20}  fontFamily="Cambria" color=" #ff6f00"  marginTop={2} marginLeft={2}>
                       Desktop</Box>
                    <Box fontSize={15} fontFamily="Cambria" marginLeft={2}> 
                        <Link href="/contact" color="inherit " > ASUS</Link>
                    </Box>
                    <Box fontSize={15} fontFamily="Cambria" marginLeft={2}> 
                       <Link href="/support" color="inherit "> DELL </Link>
                    </Box>
                    <Box fontSize={15} fontFamily="Cambria" marginLeft={2} > 
                       <Link href="/support" color="inherit "> IMAC </Link>
                    </Box>
                    <Box fontSize={15} fontFamily="Cambria" marginLeft={2}> 
                       <Link href="/support" color="inherit "> LENOVO </Link>
                    </Box>
                    <Box fontSize={15} fontFamily="Cambria" marginLeft={2}> 
                       <Link href="/support" color="inherit "> MSI </Link>
                    </Box>
                 </Grid>
                 
                 <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={20}  fontFamily="Cambria" color=" #ff6f00"  marginTop={2}>
                       Laptop</Box>
                       <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> ASUS </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> DELL </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> LENOVO </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> MACBOOK </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> MSI </Link>
                      </Box>
                   
                 </Grid>
                 <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={20}  fontFamily="Cambria" color=" #ff6f00"  marginTop={2}>
                       Accessary</Box>
                       <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> Bag </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> Flash </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> Keyboard </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> Mouse </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> HDD </Link>
                      </Box>
                   
                 </Grid>
                 <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={20}  fontFamily="Cambria" color=" #ff6f00"  marginTop={2}>
                       Help</Box>
                       <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> Contact Us </Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> About Us</Link>
                      </Box>
                      <Box fontSize={15} fontFamily="Cambria" > 
                       <Link href="/support" color="inherit "> Privacy </Link>
                      </Box>
                      
                   
                 </Grid>
                  <Box marginTop={15} color="white" >
                     <Icon ><YouTubeIcon  style={{ fontSize: 29, color: "red", margin:5}}  /></Icon>
                     <Icon ><FacebookIcon  style={{ fontSize: 25 , color: "#449be", margin:5}} /></Icon>
                     <Icon ><InstagramIcon style={{ fontSize: 25 , color: "#e3365f", margin:5}} /></Icon>
                     <Icon ><WhatsAppIcon style={{ fontSize: 25 , color: "green", margin:5}} /></Icon>
                     <Icon ><TelegramIcon style={{ fontSize: 25 , color: "#449be3", margin:5}} /></Icon>
                 </Box>
                  

               </Grid>
            </Container>
         </Box>

      </footer>
   )
}