import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "Mac",
                Title : "MacBook Pro 2021 ",
                ImgSrc :"/Mac/MacBook Pro 2021.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 16-inch Liquid Retina XDR display",
                OTHER : "Magic Keyboard with Touch ID, 140W USB-C Power Adapter",
                PRICE :" $4,949"
                },
        {
                Brand : "Mac",
                Title : "MacBook Air 2020 ",
                ImgSrc :"/Mac/MacBook Air 2020.jpg",
                OS :"OS: Catalina, M1 Chip",
                CPU:"CPU: 8‑core CPU",
                VGA:"VGA: 8‑core GPU",
                RAM:"RAM: 8GB unified memory",
                HDD:" HDD: 512GB SSD storage",
                SREEN:" SREEN:  13-inch",
                OTHER : "Magic Keyboard, Touch ID",
                PRICE :" $1,249"
                },
                {
                Brand : "Mac",
                Title : "MacBook Air 2020 ",
                ImgSrc :"/Mac/MacBook Air 2020, 256.jpg",
                OS :"OS: Catalina, M1 Chip",
                CPU:"CPU: 8‑core CPU",
                VGA:"VGA: 7‑core GPU",
                RAM:"RAM: 8GB unified memory",
                HDD:" HDD: 256GB SSD storage",
                SREEN:" SREEN:  13-inch",
                OTHER : "Magic Keyboard, Touch ID",
                PRICE :" $999"
                                },
        {
                Brand : "Mac",
                Title : "MacBook Air 2020 ",
                ImgSrc :"/Mac/MacBook Air 2020.jpg",
                OS :"OS: Catalina, M1 Chip",
                CPU:"CPU: 8‑core CPU",
                VGA:"VGA: 8‑core GPU",
                RAM:"RAM: 8GB unified memory",
                HDD:" HDD: 512GB SSD storage",
                SREEN:" SREEN:  13-inch",
                OTHER : "Magic Keyboard, Touch ID",
                PRICE :" $1,249",
                                },
        {
                Brand : "Mac",
                Title : "MacBook Air 2020 ",
                ImgSrc :"/Mac/MacBook Air 2020, 256.jpg",
                OS :"OS: Catalina, M1 Chip",
                CPU:"CPU: 8‑core CPU",
                VGA:"VGA: 7‑core GPU",
                RAM:"RAM: 8GB unified memory",
                HDD:" HDD: 256GB SSD storage",
                SREEN:" SREEN:  13-inch",
                OTHER : "Magic Keyboard, Touch ID",
                PRICE :" $999"
                                },
        {
                Brand : "Mac",
                Title : "MacBook Pro 2021 ",
                ImgSrc :"/Mac/MacBook Pro 2021.jpg",
                OS :"OS: Big Sur, M1 Chip",
                CPU:"CPU: 10-Core CPU",
                VGA:"VGA: 16-Core GPU",
                RAM:"RAM: 16GB Unified Memory",
                HDD:" HDD: 512GB SSD Storage",
                SREEN:" SREEN: 16-inch Liquid Retina XDR display",
                OTHER : "Magic Keyboard with Touch ID, 140W USB-C Power Adapter",
                PRICE :" $4,949"
                                },
       
]
export default function Mac()
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

