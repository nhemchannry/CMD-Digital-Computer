import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "Dell",
                Title : "Latitude 9420 ",
                ImgSrc :"/Dell/Dell_Latitude__9420_3_view.0.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i7",
                VGA:"VGA: GeForce RTX™ 1080",
                RAM:"RAM: 32GB DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" SREEN: 15.3 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Dell",
                PRICE :" $1,949"
},
        {
                Brand : "Dell XPS 17",
                Title : "Dell XPS 17",
                ImgSrc :"/Dell/Dell XPS 17.JPG",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i7",
                VGA:"VGA: GeForce RTX™ 2060, 6G",
                RAM:"RAM: 16GB DDR4",
                HDD:" HDD: 512GB M.2 ",
                SREEN:" SREEN: 17 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Dell",
                PRICE :" $1,799"
},
                {
                Brand : "Inspiron 15 3000",
                Title : "Inspiron 15 3000",
                ImgSrc :"/Dell/Inspiron 15 3000.JPG",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i7",
                VGA:"VGA: GeForce RTX™ 1080",
                RAM:"RAM: 32GB DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" SREEN: 15.6 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Dell",
                PRICE :" $1,949"
},
        {
                Brand : "Dell",
                Title : "Latitude 9420 ",
                ImgSrc :"/Dell/Dell_Latitude__9420_3_view.0.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i7",
                VGA:"VGA: GeForce RTX™ 1080",
                RAM:"RAM: 32GB DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" SREEN: 15.3 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Dell",
                PRICE :" $1,949"
                },
        {
                Brand : "Dell",
                Title : "Latitude 9420 ",
                ImgSrc :"/Dell/Dell_Latitude__9420_3_view.0.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i7",
                VGA:"VGA: GeForce RTX™ 1080",
                RAM:"RAM: 32GB DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" SREEN: 15.3 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Dell",
                PRICE :" $1,949"
                },
        {
                Brand : "Dell",
                Title : "Latitude 9420 ",
                ImgSrc :"/Dell/Dell_Latitude__9420_3_view.0.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i7",
                VGA:"VGA: GeForce RTX™ 1080",
                RAM:"RAM: 32GB DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" SREEN: 15.3 Full HD (1920x1080), IPS-level gaming panel",
                OTHER:"Dell",
                PRICE :" $1,949"
                },
       
]
export default function Dell() {
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




