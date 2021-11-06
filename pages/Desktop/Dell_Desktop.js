import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "Alienware gaming",
                Title : "Alienware gaming",
                ImgSrc :"/Dell/DellDesktop/Alienware gaming.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i5-10400 processor",
                VGA:"VGA: Intel® UHD Graphics 630 ",
                RAM:"RAM: 8 GB, 1 x 8 GB, DDR4, 2666 MHz",
                HDD:" HDD: 512G M.2 ",
                SREEN:"1 Year Hardware Service",
                OTHER:" USB 3.2",
                PRICE :" $1099"
                                        },
        {
                Brand : "Alienware gaming",
                Title : "Alienware gaming",
                ImgSrc :"/Dell/DellDesktop/Alienware gaming pc.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i5-10400 processor",
                VGA:"VGA: Intel® UHD Graphics 630 ",
                RAM:"RAM: 8 GB, 1 x 8 GB, DDR4, 2666 MHz",
                HDD:" HDD: 512G M.2 ",
                SREEN:"1 Year Hardware Service",
                OTHER:" USB 3.2",
                PRICE :" $1099"
                                        },
                {
                Brand : "Vostro 5890",
                Title : "Vostro 5890 ",
                ImgSrc :"/Dell/DellDesktop/Vostro 5890.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i5-10400 processor",
                VGA:"VGA: Intel® UHD Graphics 630 ",
                RAM:"RAM: 8 GB, 1 x 8 GB, DDR4, 2666 MHz",
                HDD:" HDD: 512G M.2 ",
                SREEN:"1 Year Hardware Service",
                OTHER:" USB 3.2",
                PRICE :" $769"
                                               },
        {
                Brand : "Alienware gaming",
                Title : "Alienware gaming",
                ImgSrc :"/Dell/DellDesktop/Alienware gaming pc.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i5-10400 processor",
                VGA:"VGA: Intel® UHD Graphics 630 ",
                RAM:"RAM: 8 GB, 1 x 8 GB, DDR4, 2666 MHz",
                HDD:" HDD: 512G M.2 ",
                SREEN:"1 Year Hardware Service",
                OTHER:" USB 3.2",
                PRICE :" $1099"
                                                        },
        {
                Brand : "Vostro 5890",
                Title : "Vostro 5890 ",
                ImgSrc :"/Dell/DellDesktop/Vostro 5890.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i5-10400 processor",
                VGA:"VGA: Intel® UHD Graphics 630 ",
                RAM:"RAM: 8 GB, 1 x 8 GB, DDR4, 2666 MHz",
                HDD:" HDD: 512G M.2 ",
                SREEN:"1 Year Hardware Service",
                OTHER:" USB 3.2",
                PRICE :" $769"
                                                        },
        {
                Brand : "Alienware gaming",
                Title : "Alienware gaming",
                ImgSrc :"/Dell/DellDesktop/Alienware gaming pc.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i5-10400 processor",
                VGA:"VGA: Intel® UHD Graphics 630 ",
                RAM:"RAM: 8 GB, 1 x 8 GB, DDR4, 2666 MHz",
                HDD:" HDD: 512G M.2 ",
                SREEN:"1 Year Hardware Service",
                OTHER:" USB 3.2",
                PRICE :" $1099"
                                                        },
       
]
export default function Dell_Desktop()
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



