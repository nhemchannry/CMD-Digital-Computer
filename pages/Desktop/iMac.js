import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "iMac",
                Title : "iMac 2021 ",
                ImgSrc :"/Mac/iMac/iMac Pink.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 24-inch Liquid Retina XDR display",
                OTHER : "Color : Pink",
                PRICE :" $1,949"
                                                },
        {
                Brand : "iMac",
                Title : "iMac 2021 ",
                ImgSrc :"/Mac/iMac/iMac Purple.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 24-inch Liquid Retina XDR display",
                OTHER : "Color : Purple",
                PRICE :" $1,949"
                                                },
                {
                Brand : "iMac",
                Title : "iMac 2021 ",
                ImgSrc :"/Mac/iMac/iMac Blue.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 24-inch Liquid Retina XDR display",
                OTHER : "Color : Blue",
                PRICE :" $1,949"
                                                               },
        {
                Brand : "iMac",
                Title : "iMac 2021  ",
                ImgSrc :"/Mac/iMac/iMac Green.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 24-inch Liquid Retina XDR display",
                OTHER : "Color : Green",
                PRICE :" $1,949"
                                                                },
        {
                Brand : "iMac",
                Title : "iMac 2021 ",
                ImgSrc :"/Mac/iMac/iMac Yellow.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 24-inch Liquid Retina XDR display",
                OTHER : "Color :Yellow",
                PRICE :" $1,949"
                                                                },
        {
                Brand : "iMac",
                Title : "iMac 2021 ",
                ImgSrc :"/Mac/iMac/iMac Orange.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 24-inch Liquid Retina XDR display",
                OTHER : "Color : Orange",
                PRICE :" $1,949"
                                                                },
       
]
export default function Mac_Desktop()
{
        const  {search} = React.useContext(SearchContext)
        return (
                <div style={{ marginTop: 60}}>

                        <Grid container spacing={2}>
                                {
                                        products.filter((item)=>item.Title.includes(search)).map((item) => {
                                                return (
                                                        <Grid item xs={12} sm={4} md={4} >
                                                                <ProductCard
                                                                        Brand={item.Brand}
                                                                        Title={item.Title}
                                                                        ImgSrc={item.ImgSrc}
                                                                        OS={item.OS}
                                                                        CPU={item.CPU}
                                                                        VGA= {item.VGA}
                                                                        RAM= {item.RAM}
                                                                        HDD={item.HDD}
                                                                        SREEN={item.SREEN}
                                                                        OTHER={item.OTHER}
                                                                        PRICE={item.PRICE}
                                                                />
                                                        </Grid>
                                                )
                                        })
                                }
                                {
                                         products.filter((item)=>item.Brand.includes(search)).length===0&&(
                                                 <div>
                                                         <h1>Unknown</h1>
                                                </div>
                                         )
                                }
                        </Grid>

                </div>
        )
}
