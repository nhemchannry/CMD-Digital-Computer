import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "MSI GS75 STEALTH",
                Title : "GS75 STEALTH ",
                ImgSrc :"/MSI/GS75 STEALTH.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i9 processor",
                VGA:"VGA: GeForce® RTX 2080 SUPER™ with Max-Q Design",
                RAM:"RAM: 8G DDR4",
                HDD:" HDD: 500G SSD M2",
                SREEN:" SREEN: 17.3 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"300Hz refresh rate gaming display Per-Key RGB gaming keyboard by SteelSeries ",
                PRICE :"$1099"
                        },
        {
                Brand : "MSI GP66 LEOPARD",
                Title : "GP66 LEOPARD",
                ImgSrc :"/MSI/GP66 LEOPARD.png",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: latest 10th Gen Intel® Core™ i7 processor",
                VGA:"VGA: Up to latest GeForce RTX™ 3080 Laptop GPU 8GB GDDR6",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 1T SSD M2",
                SREEN:" 15.6” Full HD (1920x1080), 144Hz, IPS-level gaming display ",
                OTHER:"Cooler Boost 5 with 2 fans and 6 heatpipe Per-Key RGB gaming keyboard by SteelSeries",
                PRICE :"$3099"
                        },
                {
                Brand : "MSI DELTA 15, AMD ADVANTAGE™ EDITION",
                Title : "DELTA 15",
                ImgSrc :"/MSI/DELTA 15.png",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: AMD Ryzen™ 9 5900HX Mobile Processors",
                VGA:"VGA: AMD Radeon™ RX 6700M 10GB GDDR6 Graphics",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 1T SSD M2",
                SREEN:" 15.6” Full HD (1920x1080), 240 Hz Refresh Rate, IPS-Level panel ",
                OTHER:"2 fans and RGB gaming keyboard by SteelSeries ",
                PRICE :"$2099"
                                                },
        {
                Brand : "MSI GE75 RAIDER",
                Title : "GE75 RAIDER",
                ImgSrc :"/MSI/GE75 RAIDER.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Latest 10th Gen Intel® Core™ i9 processor",
                VGA:"VGA: Latest GeForce® RTX SUPER™ 2080 graphics",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 1T SSD M2",
                SREEN:" 17.3” Full HD (1920x1080) 240Hz IPS-level gaming display  ",
                OTHER:"2 fans and 11 heat pipes and Per-Key RGB gaming keyboard by SteelSeries ",
                PRICE :"$819"
                                        },
        {
                Brand : "MSI KATANA GF66",
                Title : "KATANA GF66",
                ImgSrc :"/MSI/KATANA GF66.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: latest 11th Gen Intel® Core™ i7 processor",
                VGA:"VGA: GeForce® GTX 1650 Laptop GPU 4GB GDDR6",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 1T SSD M2",
                SREEN:" 15.6” Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel ",
                OTHER:"2 fans and 11 heat pipes and Per-Key RGB gaming keyboard by SteelSeries ",
                PRICE :"$819"
                                        },
        {
                Brand : "MSI GT76 TITAN",
                Brand : "MSI GT76 TITAN",
                Title : "GT76 TITAN ",
                ImgSrc :"/MSI/GT76 TITAN.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: latest 10th Gen Intel® Core™ i9-10900K processor",
                VGA:"VGA: GeForce® RTX SUPER™ 2080 graphics",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 1T SSD M2",
                SREEN:" SREEN:  UHD (3840x2160), 100% AdobeRGB, IPS-level",
                OTHER:"4 fans and 11 heat pipes Mystic Light underglow and Per-Key RGB gaming keyboard by SteelSeries ",
                PRICE :"$999"
                                        },
       
]
export default function MSI()
{
        const  {search} = React.useContext(SearchContext)
        return (
                <div style={{ marginTop: 80}}>

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


