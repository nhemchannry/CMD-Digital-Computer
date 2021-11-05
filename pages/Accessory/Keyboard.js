import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
export default function Keyboard()

{
    return(
        <div>
        <Grid container spacing ={0}>
        {/* 1 */}
                <Grid item>
                <AccessryCard
                BrandName = "Level 20 GT RGB "
                ImgSrc = "/Keyboard/Level 20 GT RGB Cherry MX.JPG"
                Describe = " Silver gaming keyboard "
                PRICE = "$25"
                />
                </Grid>
        {/* 2 */}
                <Grid item>
                <AccessryCard
                BrandName = "HyperX"
                ImgSrc = "/Keyboard/HyperX.jpg"
                Describe = " HyperX Gamming Keyboard "
                PRICE = "$99"
                />
                </Grid>
        {/* 3 */}
        <Grid item>
                <AccessryCard
                Brand = "REDRAGON ZONE"
                BrandName = "REDRAGON ZONE"
                ImgSrc = "/Keyboard/REDRAGON ZONE.JPG"
                Describe = " REDRAGON ZONE Keyboard"
                PRICE = "$35"
                />
                </Grid>
        {/* 4 */}
        <Grid item>
                <AccessryCard
                Brand = "HAVIT KB487L TKL "
                BrandName = "HAVIT KB487L TKL"
                ImgSrc = "/Keyboard/HAVIT KB487L.JPG"
                Describe = " Keyboard with 89 Keys PBT Keycaps"
                PRICE = "$42.99"
                />
                </Grid>
        {/* 5*/}
                <Grid item>
                <AccessryCard
                Brand = "REDRAGON ZONE"
                BrandName = "REDRAGON ZONE"
                ImgSrc = "/Keyboard/REDRAGON ZONE.JPG"
                Describe = " REDRAGON ZONE Keyboard"
                PRICE = "$35"
                />
                </Grid>
        
        {/* 6 */}
        
                <Grid item>
                <AccessryCard
                BrandName = "Level 20 GT RGB "
                ImgSrc = "/Keyboard/Level 20 GT RGB Cherry MX.JPG"
                Describe = " Silver gaming keyboard "
                PRICE = "$25"
                />
                </Grid>
        {/* 7 */}
                <Grid item>
                <AccessryCard
                Brand = "HAVIT KB487L TKL "
                BrandName = "HAVIT KB487L TKL"
                ImgSrc = "/Keyboard/HAVIT KB487L.JPG"
                Describe = " Keyboard with 89 Keys PBT Keycaps"
                PRICE = "$42.99"
                />
                </Grid>
        {/* 8 */}
                <Grid item>
                <AccessryCard
                BrandName = "HyperX"
                ImgSrc = "/Keyboard/HyperX.jpg"
                Describe = " HyperX Gamming Keyboard "
                PRICE = "$99"
                />
                </Grid>
                </Grid>
                    
        
                </div>
            )
        }        
