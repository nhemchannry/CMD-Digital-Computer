
import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Link from "next/link"

export default function Footer(){
   return(
      <footer>
         <Box   px={{xs:3,sm:10}} 
                py={{ xs:5 ,sm:10}} 
                bgcolor="text.primary" 
                color="white"    >
            <Container maxWidth="lg ">
               <Grid container spacing={3}>
                 <Grid item xs={10} sm={4}>
                    <Box borderBottom={1}>Help</Box>
                    <Box> 
                       <Link href="/contact" color="inherit ">Contact</Link>
                    </Box>
                    <Box> 
                       <Link href="/support" color="inherit ">Support</Link>
                    </Box>
                    <Box> 
                       <Link href="/privacy" color="inherit ">privacy</Link>
                    </Box>
                 </Grid>

                 <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Account</Box>
                    <Box> 
                       <Link href="/register" color="inherit ">register</Link>
                    </Box>
                    <Box> 
                       <Link href="/backup" color="inherit ">Backup</Link>
                    </Box>
                    <Box> 
                       <Link href="/login" color="inherit ">Login</Link>
                    </Box>
                 </Grid>
                 
                 <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>History</Box>
                    <Box> 
                       <Link href="/contact" color="inherit ">Contact</Link>
                    </Box>
                    <Box> 
                       <Link href="/support" color="inherit ">Support</Link>
                    </Box>
                    <Box> 
                       <Link href="/privacy" color="inherit ">privacy</Link>
                    </Box>
                 </Grid>

               

                 
               </Grid>
            </Container>
         </Box>

      </footer>
   )
}