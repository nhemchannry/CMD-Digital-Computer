
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
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

export default function Footer(){
   return(
      <footer>
         <Box   px={{xs:3,sm:10} } 
                py={{ xs:5 ,sm:10}} 
                bgcolor="text.primary" 
                color="white"    >
            
            <Container maxWidth="lg " >
               <Grid container spacing={3} >
               
              <Grid item xs={5} sm={2}>
                 <Box marginRight={1} > 
                 <Image  src="/CMD Digital Computer.png" alt="lago.jpg" width="180vh" height="200" />
                 </Box>
                 
              </Grid>
             
                <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={25} fontFamily="Agency FB" color=" #ff6f00" marginLeft={3} marginTop={2}>
                       Help</Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/contact" color="inherit ">Contact</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/support" color="inherit ">Support</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/privacy" color="inherit ">Privacy</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/privacy" color="inherit ">Privacy</Link>
                    </Box>
                 </Grid>

                 <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={25} fontFamily="Agency FB" color=" #ff6f00" marginLeft={3} marginTop={2}>
                       Account</Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/register" color="inherit ">Register</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/backup" color="inherit ">Backup</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/login" color="inherit ">Login</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/privacy" color="inherit ">Privacy</Link>
                    </Box>
                 </Grid>
                 
                 <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={25} fontFamily="Agency FB" color=" #ff6f00" marginLeft={3} marginTop={2}>
                       History</Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/contact" color="inherit ">Contact</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/support" color="inherit ">Support</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/privacy" color="inherit ">Privacy</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB" marginLeft={3}> 
                       <Link href="/privacy" color="inherit ">Privacy</Link>
                    </Box>
                    
                 </Grid>
              
                 <Box  marginLeft={4} marginTop={7}   height={100} width={320} >
                 <Button
                     href="/login"
                     variant="contained"
                     color="primary"
                     size="large">
                    <EmailIcon/> 
                    Email
                  </Button>
                  <Button
                    
                     href="/login"
                     variant="contained"
                     color="primary"
                     size="large">
                    <SubscriptionsIcon/> 
                    subcrib
                  </Button>

                  <Box marginTop={7} marginLeft={7} color="white" >
                     <Icon ><YouTubeIcon  style={{ fontSize: 29}} /></Icon>
                     <Icon ><FacebookIcon  style={{ fontSize: 25 }} /></Icon>
                     <Icon ><InstagramIcon style={{ fontSize: 25 }} /></Icon>
                     <Icon ><WhatsAppIcon style={{ fontSize: 25 }} /></Icon>
                     <Icon ><TelegramIcon style={{ fontSize: 25 }} /></Icon>
                 </Box>
                
                  </Box>   
                  
               </Grid>
            </Container>
         </Box>

      </footer>
   )
}