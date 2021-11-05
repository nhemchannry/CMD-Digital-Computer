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
                BrandName = "HyperX"
                ImgSrc = "/Keyboard/HyperX.jpg"
                Describe = " HyperX Gamming Keyboard "
                PRICE = "$99"
                />
                </Grid>
        
        {/* 2 */}
        
                <Grid item>
                <AccessryCard
                Brand = "HAVIT KB487L TKL "
                BrandName = "HAVIT KB487L TKL"
                ImgSrc = "/Mouse/HAVIT KB487L TKL.jpg"
                Describe = " Keyboard with 89 Keys PBT Keycaps"
                PRICE = "$42.99"
                />
                </Grid>
        {/* 3 */}
                <Grid item>
                <AccessryCard
                BrandName = "MSI S12"
                ImgSrc = "/Mouse/MSI S12.jpg"
                Describe = " MSI Gamming Mouse "
                PRICE = "$70"
                />
                </Grid>
        {/* 4 */}
                <Grid item>
                <AccessryCard
                Brand = "Asus TUF Gamming M5"
                BrandName = "Asus TUF Gamming M5"
                ImgSrc = "/Mouse/Asus TUF Gamming M5.png"
                Describe = " Asus Gamming Mouse"
                PRICE = "$45"
                />
                </Grid>
        {/* 5 */}
                <Grid item>
                <AccessryCard
                Brand = "Lenovo Legion "
                BrandName = "Lenovo Legion"
                ImgSrc = "/Mouse/Lenovo Legion.jpg"
                Describe = " Lenovo Legion M200 RGB Gaming Mouse"
                PRICE = "$45"
                />
                </Grid>
        {/* 6 */}
                <Grid item>
                <AccessryCard
                Brand = "Asus TUF Gamming M5"
                BrandName = "Asus TUF Gamming M5"
                ImgSrc = "/Mouse/Asus TUF Gamming M5.png"
                Describe = " Asus Gamming Mouse"
                PRICE = "$45"
                />
                </Grid>
        {/* 7 */}
        <Grid item>
                <AccessryCard
                BrandName = "Clutch GM08"
                ImgSrc = "/Mouse/Clutch GM08.png"
                Describe = " MSI Gamming Mouse "
                PRICE = "$70"
                />
                </Grid>
        {/* 8 */}
        <Grid item>
                <AccessryCard
                Brand = "Lenovo Legion "
                BrandName = "Lenovo Legion"
                ImgSrc = "/Mouse/Lenovo Legion.jpg"
                Describe = " Lenovo Legion M200 RGB Gaming Mouse"
                PRICE = "$45"
                />
                </Grid>
                </Grid>
                    
        
                </div>
            )
        }        
