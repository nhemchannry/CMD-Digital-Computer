import React from 'react'
import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
import {SearchContext} from  './../../contexts/SearchContext'

const products = [
        {
                BrandName : "Alienware Bag",
                ImgSrc : "/Bag/Alienware Bag.jpg",
                Describe : " Alienware Bag ",
                PRICE : "$99"
                                },
        {
                BrandName : "Legion Lenovo Bag",
                ImgSrc : "/Bag/Legion Lenovo Bag.jpg",
                Describe : " Legion Lenovo Bag",
                PRICE : "$49"
                                },
                {
                BrandName : "Asus ROG Bag",
                ImgSrc : "/Bag/Asus ROG Bag.jpg",
                Describe : " Asus ROG Bag",
                PRICE : "$69"
                                 },
        {
                BrandName : "MSI GAMMING BAG",
                ImgSrc : "/Bag/MSI GAMMING BAG.png",
                Describe : " MSI GAMMING BAG",
                PRICE : "$22.99"
                                                },
        {
                BrandName : "Asus ROG Bag",
                ImgSrc : "/Bag/Asus ROG Bag.jpg",
                Describe : " Asus ROG Bag",
                PRICE : "$69"
                                                },
        {
                Brand : "MSI GAMMING BAG ",
                BrandName : "MSI GAMMING BAG",
                ImgSrc : "/Bag/MSI GAMMING BAG.png",
                Describe : " MSI GAMMING BAG",
                PRICE : "$22.99"
                                                },
        
                {

                BrandName : "Alienware Bag",
                ImgSrc : "/Bag/Alienware Bag.jpg",
                Describe : " Alienware Bag ",
                PRICE : "$99"
                                },
                {
                BrandName : "Legion Lenovo Bag",
                ImgSrc : "/Bag/Legion Lenovo Bag.jpg",
                Describe : " Legion Lenovo Bag",
                PRICE : "$49"
                                }
                                        


                                
       
]
export default function Bag()
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

