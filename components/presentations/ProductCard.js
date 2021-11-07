import React from "react"
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardContent, CardActions, CardMedia, Button } from "@material-ui/core"
import { IconButton, Avatar } from "@material-ui/core"
import { FullscreenExit, More } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Typography } from "@material-ui/core";


const useStyles = makeStyles ((theme)=>({
    card:{
        maxWidth : 450,
        margin :25
    },

    // media:{
    //     width :'100%',
    //     height : '70vh'

    // },
    // CardActions:{
    //     marginLeft: 70
    // }

}) )

export default function ProductCard({Brand, Title, ImgSrc, OS, CPU, VGA, RAM, HDD, SREEN, OTHER, PRICE})

{
    const classes = useStyles()

    return(
        <div> 

            <Card className = {classes.card}>
                <CardHeader style = {{paddingTop:10, paddingBottom:0}}

                    // avatar = {<Avatar color= "secondary" >P</Avatar>}
                    action = {<IconButton color="primary" > <More/> </IconButton>}

                    title = {Title}
                />
                <CardMedia

                    style = {{width : '100%', height:'35vh'}}
                    image ={ImgSrc}
                    title = {Brand}

                />

                <CardContent style = {{paddingTop:0, paddingBottom:0}}>
                <Typography variant="body2" color="textPrimary" >
                    <h3 style = {{margin:5, paddingBottom : 5}}>{OS}</h3>
                    <p style = {{margin:5}}>{CPU}</p>
                    <p style = {{margin:5}}>{VGA}</p>
                    <p style = {{margin:5}}>{RAM}</p>
                    <p style = {{margin:5}}>{HDD}</p>
                    <p style = {{margin:5}}>{SREEN}</p>
                    <p style = {{margin:5}}>{OTHER} </p>
                    < span  style={{margin: 0 , fontSize : 25, fontWeight: 'bold'}}>{PRICE}</span>
                    </Typography>
                </CardContent>

                <CardActions  >
                    <Button size="large" color="primary"> <FavoriteIcon/>Like </Button>
                    <Button size="large" color="primary"> <ShoppingCartIcon/> Add Card </Button>
                    <Link href="../contact">
                    <Button size="large" color="primary" ><MailOutlineIcon/>Inbox</Button>
                    </Link>
                    <Link href="../home">
                    <IconButton color="primary" style={{marginLeft:60}} > <Image src="/logo.png" alt="logo" width="35" height="35"  style = {{float:"right"}}/></IconButton>
                    </Link>
                </CardActions>
              
            </Card>
        </div>
    )
}