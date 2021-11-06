import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
export default function Bag()

{
    return(
        <div>
        <Grid container spacing ={0}>
        
        {/* 1*/}
                <Grid item>
                <AccessryCard
                BrandName = "Alienware Bag"
                ImgSrc = "/Bag/Alienware Bag.jpg"
                Describe = " Alienware Bag "
                PRICE = "$99"
                />
                </Grid>
        
        {/* 2 */}
        
                <Grid item>
                <AccessryCard
                BrandName = "Legion Lenovo Bag"
                ImgSrc = "/Bag/Legion Lenovo Bag.jpg"
                Describe = " Legion Lenovo Bag.jpg"
                PRICE = "$49"
                />
                </Grid>
        {/* 3 */}
                <Grid item>
                <AccessryCard
                BrandName = "Asus ROG Bag"
                ImgSrc = "/Bag/Asus ROG Bag.jpg"
                Describe = " Asus ROG Bag"
                PRICE = "$69"
                />
                </Grid>
        {/* 4 */}
                <Grid item>
                <AccessryCard
                Brand = "MSI GAMMING BAG "
                BrandName = "MSI GAMMING BAG"
                ImgSrc = "/Bag/MSI GAMMING BAG.png"
                Describe = " MSI GAMMING BAG"
                PRICE = "$22.99"
                />
                </Grid>
        {/* 5*/}
                <Grid item>
                <AccessryCard
                BrandName = "Asus ROG Bag"
                ImgSrc = "/Bag/Asus ROG Bag.jpg"
                Describe = " Asus ROG Bag"
                PRICE = "$69"
                />
                </Grid>
        
        {/* 6 */}
        
                <Grid item>
                <AccessryCard
                Brand = "MSI GAMMING BAG "
                BrandName = "MSI GAMMING BAG"
                ImgSrc = "/Bag/MSI GAMMING BAG.png"
                Describe = " MSI GAMMING BAG"
                PRICE = "$22.99"
                />
                </Grid>
        {/* 7 */}
                <Grid item>
                <AccessryCard
                BrandName = "Alienware Bag"
                ImgSrc = "/Bag/Alienware Bag.jpg"
                Describe = " Alienware Bag "
                PRICE = "$99"
                />
                </Grid>
        {/* 8 */}
                <Grid item>
                <AccessryCard
                BrandName = "Legion Lenovo Bag"
                ImgSrc = "/Bag/Legion Lenovo Bag.jpg"
                Describe = " Legion Lenovo Bag.jpg"
                PRICE = "$49"
                />
                </Grid>
                </Grid>
                    
        
                </div>
            )
        }        
