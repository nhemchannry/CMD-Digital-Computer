import React from 'react'
import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                Brand : "Aegis Ti3 8th.jpg",
                Title : "Aegis Ti3 8th.jpg",
                ImgSrc :"/MSI/MSIDesktop/Aegis Ti3 8th.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-8700K processor",
                VGA:"VGA: GeForce GTX 1080 Ti GAMING 11GB GDDR5X graphic",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB SSD M2",
                SREEN:" Intel® WiFi 6E AX210",
                OTHER:" Mystic Light RGB LED design to customize your Gaming PC",
                PRICE :"$1099"
                                                                },
        {
                Brand : "MEG Aegis Ti5 11th",
                Title : "MEG Aegis Ti5 11th",
                ImgSrc :"/MSI/MSIDesktop/MEG Aegis Ti5 11th.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 11th Gen Intel® Core™ i9-11900K processors",
                VGA:"VGA: GeForce® RTX 3090 GDDR6X 24GB**",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB SSD M2",
                SREEN:" Intel® WiFi 6E AX210",
                OTHER:" AC ADAPTER / PSU: 850W 80 Plus Gold certified (SFX)",
                PRICE :"$2099",
                                                                },
                {
                Brand : "Aegis Ti3 8th.jpg",
                Title : "Aegis Ti3 8th.jpg",
                ImgSrc :"/MSI/MSIDesktop/Aegis Ti3 8th.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-8700K processor",
                VGA:"VGA: GeForce GTX 1080 Ti GAMING 11GB GDDR5X graphic",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB SSD M2",
                SREEN:" Intel® WiFi 6E AX210",
                OTHER:" Mystic Light RGB LED design to customize your Gaming PC",
                PRICE :"$1099"
                                                                                               },
        {
                Brand : "MEG Aegis Ti5 11th",
                Title : "MEG Aegis Ti5 11th",
                ImgSrc :"/MSI/MSIDesktop/MEG Aegis Ti5 11th.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 11th Gen Intel® Core™ i9-11900K processors",
                VGA:"VGA: GeForce® RTX 3090 GDDR6X 24GB**",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB SSD M2",
                SREEN:" Intel® WiFi 6E AX210",
                OTHER:" AC ADAPTER / PSU: 850W 80 Plus Gold certified (SFX)",
                PRICE :"$2099"
                                                                                },
        {
                Brand : "Aegis Ti3 8th.jpg",
                Title : "Aegis Ti3 8th.jpg",
                ImgSrc :"/MSI/MSIDesktop/Aegis Ti3 8th.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: Intel® Core™ i7-8700K processor",
                VGA:"VGA: GeForce GTX 1080 Ti GAMING 11GB GDDR5X graphic",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB SSD M2",
                SREEN:" Intel® WiFi 6E AX210",
                OTHER:" Mystic Light RGB LED design to customize your Gaming PC",
                PRICE :"$1099"
                                                                                },
        {
                Brand : "MEG Aegis Ti5 11th",
                Title : "MEG Aegis Ti5 11th",
                ImgSrc :"/MSI/MSIDesktop/MEG Aegis Ti5 11th.jpg",
                OS :"OS:Windows 10 Pro",
                CPU:"CPU: 11th Gen Intel® Core™ i9-11900K processors",
                VGA:"VGA: GeForce® RTX 3090 GDDR6X 24GB**",
                RAM:"RAM: 32G DDR4",
                HDD:" HDD: 1TB SSD M2",
                SREEN:" Intel® WiFi 6E AX210",
                OTHER:" AC ADAPTER / PSU: 850W 80 Plus Gold certified (SFX)",
                PRICE :"$2099"
                                                                                },
       
]
export default function MSI_Desktop()
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
