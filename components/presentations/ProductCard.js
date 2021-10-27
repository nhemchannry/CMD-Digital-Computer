import React from "react"
import Image from 'next/image'

import { Card, CardHeader, CardContent, CardActions, CardMedia, Button } from "@material-ui/core"
import { IconButton, Avatar } from "@material-ui/core"
import { More } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import { margin } from "@mui/system"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Typography } from "@material-ui/core"


const useStyles = makeStyles ((theme)=>({
    card:{
        maxWidth : 450,
        margin :30
    },

    media:{
        width :'100%',
        height : '70vh'

    },
    CardActions:{
        marginLeft: 0
    }

}) )

export default function ProductCard({Title, ImgSrc,Brand, OS, CPU, VGA, RAM, HDD, SREEN, OTHER, PRICE})

{
    const classes = useStyles()

    return(
        <div>
            <Card className = {classes.card}>
                <CardHeader

                    // avatar = {<Avatar color= "secondary" >P</Avatar>}
                    action = {<IconButton color="primary" > <More/> </IconButton>}

                    title = {Title}
                />
                <CardMedia

                    style = {{width : '100%', height:'30vh'}}
                    image ={ImgSrc}
                    title = {Brand}

                />

                <CardContent>
                <Typography variant="body2" color="textPrimary">
                    <p>{OS}</p>
                    <p>{CPU}</p>
                    <p>{VGA}</p>
                    <p>{RAM}</p>
                    <p>{HDD}</p>
                    <p>{SREEN}</p>
                    <p>{OTHER} </p>
                    < span  style={{margin: 0 , fontSize : 25, fontWeight: 'bold'}}>{PRICE}</span>
                    </Typography>
                </CardContent>

                <CardActions  style={{marginTop: 0}}>
                    <Button size="large" color="primary"> <FavoriteIcon/>Like </Button>
                    <Button size="large" color="primary"> <ShoppingCartIcon/> Add Card </Button>
                    {/* <Button size="large" color="primary" > <ShareIcon/> Share </Button> */}
                    <Button size="large" color="primary" ><MailOutlineIcon/>Inbox</Button>
                    
                    <IconButton color="primary" style = {{float:"right"}}> <Image src="/logo.png" alt="logo" width="35" height="35" /></IconButton>

                </CardActions>
              
            </Card>


        </div>
    )
}