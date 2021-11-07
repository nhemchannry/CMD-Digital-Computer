import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "ThinkPad C13 Yoga",
                Title : "ThinkPad C13 Yoga ",
                ImgSrc :"/Lenovo/ThinkPad C13 Yoga.png",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 7th Gen Intel® Core™ i7 processor",
                VGA:"VGA: Intel",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 256 SSD M2",
                SREEN:" SREEN: 14 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Lenovo ",
                PRICE :"$879"
        },
        {
                Brand : "Lenovo Yoga 7i",
                Title : "Lenovo Yoga 7i ",
                ImgSrc :"/Lenovo/Yoga 7i .png",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 7th Gen Intel® Core™ i7 processor",
                VGA:"VGA: Intel",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 256 SSD M2",
                SREEN:" SREEN: 14 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Lenovo ",
                PRICE :"$779"
        },
                {
                Brand : "Lenovo",
                Title : "Lenovo_Y520 ",
                ImgSrc :"/Lenovo/Lenovo_Y520.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 7th Gen Intel® Core™ i7 processor",
                VGA:"VGA: GeForce® GTX 1050Ti 8GB SUPER™ with Max-Q Design",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 2T + 256 SSD M2",
                SREEN:" SREEN: 17.3 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"300Hz refresh rate gaming display  Per-Key RGB gaming  ",
                PRICE :"$1279"
                },
        {
                Brand : "ThinkPad C13 Yoga",
                Title : "ThinkPad C13 Yoga ",
                ImgSrc :"/Lenovo/ThinkPad C13 Yoga.png",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 7th Gen Intel® Core™ i7 processor",
                VGA:"VGA: Intel",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 256 SSD M2",
                SREEN:" SREEN: 14 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Lenovo ",
                PRICE :"$879"
                        },
        {
                Brand : "Lenovo",
                Title : "Lenovo_Y520 ",
                ImgSrc :"/Lenovo/Lenovo_Y520.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 7th Gen Intel® Core™ i7 processor",
                VGA:"VGA: GeForce® GTX 1050Ti 8GB SUPER™ with Max-Q Design",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 2T + 256 SSD M2",
                SREEN:" SREEN: 17.3 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"300Hz refresh rate gaming display Per-Key RGB gaming ",
                PRICE :"$1279"
                        },
        {
                Brand : "ThinkPad C13 Yoga",
                Title : "ThinkPad C13 Yoga ",
                ImgSrc :"/Lenovo/ThinkPad C13 Yoga.png",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 7th Gen Intel® Core™ i7 processor",
                VGA:"VGA: Intel",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 256 SSD M2",
                SREEN:" SREEN: 14 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Lenovo ",
                PRICE :"$879"
                        },
       
]
export default function Lenovo()
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
