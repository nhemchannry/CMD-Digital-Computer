import React from 'react'
import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                BrandName : "SUMSUNG SSD 128GB",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 128 ",
                PRICE : "$30"
                                },
        {
                BrandName : "SUMSUNG SSD 512GB",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 512 ",
                PRICE : "$70"
                                },
                {
                BrandName : "SUMSUNG SSD 1T",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 1T ",
                PRICE : "$140"
                                         },
        {
                BrandName : "SUMSUNG SSD 2T",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 2T ",
                PRICE : "250"
                                                },
        {
                BrandName : "SUMSUNG SSD 128GB",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 128 ",
                PRICE : "$30"
                                                },
        {
                BrandName : "SUMSUNG SSD 128GB",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 128 ",
                PRICE : "$30"
                                                },
        
                {

                BrandName : "SUMSUNG SSD 128GB",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 128 ",
                PRICE : "$30"
                                        },
                {
                BrandName : "SUMSUNG SSD 128GB",
                ImgSrc : "/SSD/Sumsung SSD.jpg",
                Describe : " SUMSUNG SSD 128 ",
                PRICE : "$30"
                                        }
       
]
export default function HDD_SSD()
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

