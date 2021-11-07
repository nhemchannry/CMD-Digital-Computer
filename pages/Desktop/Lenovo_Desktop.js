import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "Lenovo Legion",
                Title : "Lenovo Legion ",
                ImgSrc :"/Lenovo/LenovoDesktop/Lenovo Legion.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-11700F",
                VGA:"VGA: NVIDIA® GeForce® GTX 1660 Super 6GB",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 512 SSD M2",
                SREEN:" Warranty : 1 Year ",
                OTHER:"Gaming PC with 11th",
                PRICE :"$1457"
                                                        },
        {
                Brand : "Lenovo Legion",
                Title : "Lenovo Legion ",
                ImgSrc :"/Lenovo/LenovoDesktop/Lenovo Legion 2.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-11700F",
                VGA:"VGA: NVIDIA® GeForce® GTX 1660 Super 6GB",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 512 SSD M2",
                SREEN:" Warranty : 1 Year ",
                OTHER:"Gaming PC with 11th",
                PRICE :"$1457"
                                                        },
                {
                Brand : "Lenovo Legion",
                Title : "Lenovo Legion ",
                ImgSrc :"/Lenovo/LenovoDesktop/Lenovo Legion.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-11700F",
                VGA:"VGA: NVIDIA® GeForce® GTX 1660 Super 6GB",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 512 SSD M2",
                SREEN:" Warranty : 1 Year ",
                OTHER:"Gaming PC with 11th",
                PRICE :"$1457"
                                                                               },
        {
                Brand : "Lenovo Legion",
                Title : "Lenovo Legion ",
                ImgSrc :"/Lenovo/LenovoDesktop/Lenovo Legion 2.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-11700F",
                VGA:"VGA: NVIDIA® GeForce® GTX 1660 Super 6GB",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 512 SSD M2",
                SREEN:" Warranty : 1 Year ",
                OTHER:"Gaming PC with 11th",
                PRICE :"$1457"
                                                                        },
        {
                Brand : "Lenovo Legion",
                Title : "Lenovo Legion ",
                ImgSrc :"/Lenovo/LenovoDesktop/Lenovo Legion.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-11700F",
                VGA:"VGA: NVIDIA® GeForce® GTX 1660 Super 6GB",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 512 SSD M2",
                SREEN:" Warranty : 1 Year ",
                OTHER:"Gaming PC with 11th",
                PRICE :"$1457"
                                                                        },
        {
                Brand : "Lenovo Legion",
                Title : "Lenovo Legion ",
                ImgSrc :"/Lenovo/LenovoDesktop/Lenovo Legion 2.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-11700F",
                VGA:"VGA: NVIDIA® GeForce® GTX 1660 Super 6GB",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 512 SSD M2",
                SREEN:" Warranty : 1 Year ",
                OTHER:"Gaming PC with 11th",
                PRICE :"$1457"
                                                                        },
       
]
export default function Lenovo_Desktop()
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
