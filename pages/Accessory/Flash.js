import React from 'react'
import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash.jpg",
                Describe : " Kingston Flash 32GB ",
                PRICE : "$10",
                                },
        {
                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash 64g.jpg",
                Describe : " Kingston Flash 64GB ",
                PRICE : "$16"
                                },
                {
                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash 16g.jpg",
                Describe : " Kingston Flash 16GB ",
                PRICE : "$8",
                                         },
        {
                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash 128g.jpg",
                Describe : " Kingston Flash 128GB ",
                PRICE : "$32"
                                                },
        {
                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash 16g.jpg",
                Describe : " Kingston Flash 16GB ",
                PRICE : "$8"
                                                },
        {
                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash.jpg",
                Describe : " Kingston Flash 32GB ",
                PRICE : "$10"
                                                },
        {
                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash 64g.jpg",
                Describe : " Kingston Flash 64GB ",
                PRICE : "$16"
                                                },
                {

                BrandName : "Kingston Flash",
                ImgSrc : "/USB Flash/Kingston Flash 128g.jpg",
                Describe : " Kingston Flash 128GB ",
                PRICE : "$32"
                                        },


                                
       
]
export default function Flash()
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
