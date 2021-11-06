import React from 'react'
import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                BrandName : "Level 20 GT RGB ",
                ImgSrc : "/Keyboard/Level 20 GT RGB Cherry MX.JPG",
                Describe : " Silver gaming keyboard ",
                PRICE : "$25"
                                },
        {
                BrandName : "HyperX",
                ImgSrc : "/Keyboard/HyperX.jpg",
                Describe : " HyperX Gamming Keyboard ",
                PRICE : "$99"
                                },
                {
                BrandName : "HAVIT KB487L TKL",
                ImgSrc : "/Keyboard/HAVIT KB487L.JPG",
                Describe : " Keyboard with 89 Keys PBT Keycaps",
                PRICE : "$42.99"
                                                         },
        {
                BrandName : "REDRAGON ZONE",
                ImgSrc : "/Keyboard/REDRAGON ZONE.JPG",
                Describe : " REDRAGON ZONE Keyboard",
                PRICE : "$35"
                                                },
        {
                BrandName : "Level 20 GT RGB ",
                ImgSrc : "/Keyboard/Level 20 GT RGB Cherry MX.JPG",
                Describe : " Silver gaming keyboard ",
                PRICE : "$25"
                                                },
        {
                BrandName : "HAVIT KB487L TKL",
                ImgSrc : "/Keyboard/HAVIT KB487L.JPG",
                Describe : " Keyboard with 89 Keys PBT Keycaps",
                PRICE : "$42.99"
                                                },
        
                {

                BrandName : "HyperX",
                ImgSrc : "/Keyboard/HyperX.jpg",
                Describe : " HyperX Gamming Keyboard ",
                PRICE : "$99"
                                                },
                {
                BrandName : "REDRAGON ZONE",
                ImgSrc : "/Keyboard/REDRAGON ZONE.JPG",
                Describe : " REDRAGON ZONE Keyboard",
                PRICE : "$35"
                                                }
       
]
export default function Keyboard()
{
        const  {search} = React.useContext(SearchContext)
        return (
                <div style={{ marginTop: 65}}>

                        <Grid container spacing={1}>
                                {
                                        products.filter((item)=>item.BrandName.includes(search)).map((item) => {
                                                return (
                                                        <Grid item xs={5} sm={3} md={3} >
                                                                <AccessryCard
                                                                        BrandName={item.BrandName}
                                                                        ImgSrc={item.ImgSrc}
                                                                        Describe={item.Describe}
                                                                        PRICE={item.PRICE}
                                                                />
                                                        </Grid>
                                                )
                                        })
                                }
                                {
                                         products.filter((item)=>item.BrandName.includes(search)).length===0&&(
                                                 <div>
                                                         <h1>Unknown</h1>
                                                </div>
                                         )
                                }
                        </Grid>

                </div>
        )
}
