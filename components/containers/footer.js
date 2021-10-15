
import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Link from 'next/link'
import AlarmIcon from '@material-ui/icons/Alarm';
import IconButton from '@material-ui/core/IconButton';
import Image from "next/image"


export default function Footer(){
   return(
      <footer>
         <Box   px={{xs:3,sm:10} } 
                py={{ xs:5 ,sm:10}} 
                bgcolor="text.primary" 
                color="white"    >
            
            <Container maxWidth="lg " >
               <Grid container spacing={3} >
               <Image  src="/CMD Digital Computer.png"  alt="lago.jpg" width="180vh" height="180" />
               
               <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={25} fontFamily="Agency FB" color=" #ff6f00">
                       Help</Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/contact" color="inherit ">Contact</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/support" color="inherit ">Support</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/privacy" color="inherit ">Privacy</Link>
                    </Box>
                 </Grid>

                 <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={25} fontFamily="Agency FB" color=" #ff6f00">
                       Account</Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/register" color="inherit ">register</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/backup" color="inherit ">Backup</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/login" color="inherit ">Login</Link>
                    </Box>
                 </Grid>
                 
                 <Grid item xs={5} sm={2}>
                    <Box borderBottom={1} fontSize={25} fontFamily="Agency FB" color=" #ff6f00">
                       History</Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/contact" color="inherit ">Contact</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/support" color="inherit ">Support</Link>
                    </Box>
                    <Box fontSize={20} fontFamily="Agency FB"> 
                       <Link href="/privacy" color="inherit ">Privacy</Link>
                    </Box>
                 </Grid>

                 <IconButton color="secondary" aria-label="add an alarm">
                     <AlarmIcon />
                  </IconButton>
                 
                 
               </Grid>
            </Container>
         </Box>

      </footer>
   )
}