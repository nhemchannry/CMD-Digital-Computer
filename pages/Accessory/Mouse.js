import React from 'react'
import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                BrandName : "Clutch GM08",
                ImgSrc : "/Mouse/Clutch GM08.png",
                Describe : " MSI Gamming Mouse ",
                PRICE : "$70"
                                },
        {
                BrandName : "Lenovo Legion",
                ImgSrc : "/Mouse/Lenovo Legion.jpg",
                Describe : " Lenovo Legion M200 RGB Gaming Mouse",
                PRICE : "$45"
                                },
                {
                BrandName : "MSI S12",
                ImgSrc : "/Mouse/MSI S12.jpg",
                Describe : " MSI Gamming Mouse ",
                PRICE : "$70"
                                                                 },
        {
                BrandName : "Asus TUF Gamming M5",
                ImgSrc : "/Mouse/Asus TUF Gamming M5.png",
                Describe : " Asus Gamming Mouse",
                PRICE : "$45"
                                                },
        {
                BrandName : "Lenovo Legion",
                ImgSrc : "/Mouse/Lenovo Legion.jpg",
                Describe : " Lenovo Legion M200 RGB Gaming Mouse",
                PRICE : "$45"
                                                },
        {
                BrandName : "Asus TUF Gamming M5",
                ImgSrc : "/Mouse/Asus TUF Gamming M5.png",
                Describe : " Asus Gamming Mouse",
                PRICE : "$45"
                                                },
        
                {
                BrandName : "Clutch GM08",
                ImgSrc : "/Mouse/Clutch GM08.png",
                Describe : " MSI Gamming Mouse ",
                PRICE : "$70"
                                                        },
                {
                BrandName : "Lenovo Legion",
                ImgSrc : "/Mouse/Lenovo Legion.jpg",
                Describe : " Lenovo Legion M200 RGB Gaming Mouse",
                PRICE : "$45"
                                                        }
       
]
export default function Mouse()
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
