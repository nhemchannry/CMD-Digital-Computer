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

const useStyles = makeStyles ((theme)=>({
    card:{
        maxWidth : 450,
        margin :30
    },

    media:{
        width :'100%',
        height : '50vh'

    }

}) )

export default function ProductCard()

{
    const classes = useStyles()

    return(
        <div>
            <Card className = {classes.card}>
                <CardHeader

                    // avatar = {<Avatar color= "secondary" >P</Avatar>}
                    action = {<IconButton color="primary" > <More/> </IconButton>}

                    title = "GS75 STEALTH "
                />
                <CardMedia

                    style = {{width : '100%', height:'30vh'}}
                   image ="https://asset.msi.com/resize/image/global/product/product_6_20190311094950_5c85bebe95281.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
                    title = "MSI"

                />

                <CardContent>
                    
                    OS:Windows 10 Pro<br/><br/>
                    CPU: 10th Gen Intel® Core™ i9 processor<br/>
                    VGA: GeForce® RTX 2080 SUPER™ with Max-Q Design<br/>
                    RAM: 8G DDR4<br/>
                    HDD: 500G SSD M2<br/>
                    SREEN: 17.3" Full HD (1920x1080), IPS-level gaming panel<br/>
                    300Hz refresh rate gaming display<br/>
                    Per-Key RGB gaming keyboard by SteelSeries <br/>
                </CardContent>

                <CardActions>
                    <Button size="large" color="primary"> <FavoriteIcon/>Like </Button>
                    <Button size="large" color="primary"> <ShoppingCartIcon/> Add Card </Button>
                    {/* <Button size="large" color="primary" > <ShareIcon/> Share </Button> */}
                    <Button size="large" color="primary" ><MailOutlineIcon/>Inbox</Button>
                    
                    <Button size="large" color="primary" ><Image src="/logo.png" alt="logo" width="35" height="35" /></Button>

                </CardActions>
              
            </Card>

{/* 2 */}

            <Card className = {classes.card}>
                <CardHeader

                    // avatar = {<Avatar color= "secondary" >P</Avatar>}
                    action = {<IconButton color="primary" > <More/> </IconButton>}

                    title = "GS75 STEALTH "
                />
                <CardMedia

                    style = {{width : '100%', height:'30vh'}}
                   image ="https://asset.msi.com/resize/image/global/product/product_6_20190311094950_5c85bebe95281.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
                    title = "MSI"

                />

                <CardContent>
                    
                    OS:Windows 10 Pro<br/><br/>
                    CPU: 10th Gen Intel® Core™ i9 processor<br/>
                    VGA: GeForce® RTX 2080 SUPER™ with Max-Q Design<br/>
                    RAM: 8G DDR4<br/>
                    HDD: 500G SSD M2<br/>
                    SREEN: 17.3" Full HD (1920x1080), IPS-level gaming panel<br/>
                    300Hz refresh rate gaming display<br/>
                    Per-Key RGB gaming keyboard by SteelSeries <br/>
                </CardContent>

                <CardActions>
                    <Button size="large" color="primary"> <FavoriteIcon/>Like </Button>
                    <Button size="large" color="primary"> <ShoppingCartIcon/> Add Card </Button>
                    {/* <Button size="large" color="primary" > <ShareIcon/> Share </Button> */}
                    <Button size="large" color="primary" ><MailOutlineIcon/>Inbox</Button>
                    
                    <Button size="large" color="primary" ><Image src="/logo.png" alt="logo" width="35" height="35" /></Button>

                </CardActions>
              
            </Card>



        </div>
    )
}