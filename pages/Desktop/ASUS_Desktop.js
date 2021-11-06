import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "ROG Strix GT35",
                Title : "ROG Strix GT35 ",
                ImgSrc :"/ASUS/AsusDesktop/ROG Strix GT35.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i9",
                VGA:"VGA: GeForce RTX™ 3080",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" 4x DDR4 SO-DIMM slot",
                OTHER:" 4x M.2 connector for storage",
                PRICE :"$2099",
                                },
        {
                Brand : "ROG Strix GL10cs Gaming",
                Title : "ROG Strix GL10cs Gaming.jpg ",
                ImgSrc :"/ASUS/AsusDesktop/ROG Strix GL10cs Gaming.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 10th Gen Intel® Core™ i9",
                VGA:"VGA: GeForce RTX™ 2080",
                RAM:"RAM: 16G DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" 4x DDR4 SO-DIMM slot",
                OTHER:" 4x M.2 connector for storage",
                PRICE :"$1099"
                                },
                {
                Brand : "ROG Strix GA35",
                Title : "ROG Strix GTA35 ",
                ImgSrc :"/ASUS/AsusDesktop/ROG Strix GT35.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i9",
                VGA:"VGA: GeForce RTX™ 2080",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 512G M.2 ",
                SREEN:" 4x DDR4 SO-DIMM slot",
                OTHER:" 4x M.2 connector for storage",
                PRICE :"$999"
                                                                },
        {
                Brand : "ROG Strix GT35",
                Title : "ROG Strix GT35 ",
                ImgSrc :"/ASUS/AsusDesktop/ROG Strix GT35.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i9",
                VGA:"VGA: GeForce RTX™ 3080",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" 4x DDR4 SO-DIMM slot",
                OTHER:" 4x M.2 connector for storage",
                PRICE :"$2099"
                                                },
        {
                Brand : "ROG Strix GT35",
                Title : "ROG Strix GT35 ",
                ImgSrc :"/ASUS/AsusDesktop/ROG Strix GT35.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i9",
                VGA:"VGA: GeForce RTX™ 3080",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" 4x DDR4 SO-DIMM slot",
                OTHER:" 4x M.2 connector for storage",
                PRICE :"$2099"
                                                },
        {
                Brand : "ROG Strix GT35",
                Title : "ROG Strix GT35 ",
                ImgSrc :"/ASUS/AsusDesktop/ROG Strix GT35.jpg",
                OS :"OS: Windows 10 Pro",
                CPU:"CPU: 8th Gen Intel® Core™ i9",
                VGA:"VGA: GeForce RTX™ 3080",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB M.2 ",
                SREEN:" 4x DDR4 SO-DIMM slot",
                OTHER:" 4x M.2 connector for storage",
                PRICE :"$2099"
                                                },
       
]
export default function Asus_Desktop()
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
