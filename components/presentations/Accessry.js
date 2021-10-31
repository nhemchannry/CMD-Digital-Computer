import React from "react"
import Image from 'next/image'

import { Card, CardHeader, CardContent, CardActions, CardMedia, Button } from "@material-ui/core"
import { IconButton, Avatar } from "@material-ui/core"
import { FullscreenExit, More } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import { margin } from "@mui/system"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Typography } from "@material-ui/core"


const useStyles = makeStyles ((theme)=>({
    card:{
        maxWidth : 350,
        margin :20
    },

    // media:{
    //     width :'100%',
    //     height : '70vh'

    // },
    // CardActions:{
    //     marginLeft: 70
    // }

}) )

export default function AccessryCard({Brand, BrandName, ImgSrc, Describe, PRICE})

{
    const classes = useStyles()

    return(
        <div style = {{display : "flex"}}> 
            <Card className = {classes.card}>
                <CardHeader style = {{paddingTop:10, paddingBottom:0}}

                    // avatar = {<Avatar color= "secondary" >P</Avatar>}
                    action = {<IconButton color="primary" > <More/> </IconButton>}

                    title = {BrandName}
                />
                <CardMedia

                    style = {{width : '100%', height:'40vh'}}
                    image ={ImgSrc}
                    title = {BrandName}

                />

                <CardContent style = {{paddingTop:0, paddingBottom:0}}>
                <Typography variant="body2" color="textPrimary" >
                    <p style = {{margin:5}}>{Describe} </p>
                    <h2 style={{margin: 0 , fontSize : 25, fontWeight: 'bold'}}>{PRICE}</h2>
                    </Typography>
                </CardContent>

                <CardActions  >
                    <Button size="large" color="primary" style = {{ padding: 0}}> <FavoriteIcon/>Like </Button>
                    <Button size="large" color="primary" style = {{width: 300, padding: 0}}> <ShoppingCartIcon/> Add Card </Button>
                    <Button size="large" color="primary" style = {{ padding: 0}}><MailOutlineIcon/>Inbox</Button>
                    
                    <IconButton color="primary" style={{marginLeft:10}} > <Image src="/logo.png" alt="logo" width="35" height="35"  style = {{float:"right"}}/></IconButton>

                </CardActions>
              
            </Card>


        </div>
    )
}