import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
export default function Mac()

{
    return(
        <div>
        <Grid container spacing ={0}>

{/* 1*/}
        <Grid item>
        <ProductCard
        Brand = "Mac"
        Title = "MacBook Pro 2021 "
        ImgSrc ="/Mac/MacBook Pro 2021.jpg"
        OS ="OS: Big Sur"
        CPU="CPU: 8th Gen Intel® Core™ i10"
        VGA="VGA: Intel"
        RAM="RAM: 8GB DDR4"
        HDD=" HDD: 1TB M.2 "
        SREEN=" SREEN: 15.3 Full HD (1920x1080), IPS-level gaming panel"
        PRICE =" $4,949"
        />
        </Grid>

{/* 2 */}
        <Grid item>
        <ProductCard
        Brand = "Mac"
        Title = "MacBook Air 2020 "
        ImgSrc ="/Mac/MacBook Air 2020.jpg"
        OS ="OS: Catalina"
        CPU="CPU: 8th Gen Intel® Core™ i7"
        VGA="VGA: Intel"
        RAM="RAM: 8GB DDR4"
        HDD=" HDD: 1TB M.2 "
        SREEN=" SREEN: 15.3 Full HD (1920x1080), IPS-level gaming panel"
        PRICE =" $2,949"
        />
        </Grid>
{/* 3 */}
        <Grid item>
        <ProductCard
        Brand = "MSI DELTA 15, AMD ADVANTAGE™ EDITION"
        Title = "DELTA 15"
        ImgSrc ="/MSI/DELTA 15.png"
        OS ="OS:Windows 10 Pro"
        CPU="CPU: AMD Ryzen™ 9 5900HX Mobile Processors"
        VGA="VGA: AMD Radeon™ RX 6700M 10GB GDDR6 Graphics"
        RAM="RAM: 16G DDR4"
        HDD=" HDD: 1T SSD M2"
        SREEN=" 15.6” Full HD (1920x1080), 240 Hz Refresh Rate, IPS-Level panel "
        OTHER="2 fans and 11 heat pipes and Per-Key RGB gaming keyboard by SteelSeries "
        PRICE ="$2099"
        />
        </Grid>
{/* 4 */}
        <Grid item>
        <ProductCard
        Brand = "MSI GE75 RAIDER"
        Title = "GE75 RAIDER"
        ImgSrc ="/MSI/GE75 RAIDER.jpg"
        OS ="OS:Windows 10 Pro"
        CPU="CPU: Latest 10th Gen Intel® Core™ i9 processor"
        VGA="VGA: Latest GeForce® RTX SUPER™ 2080 graphics"
        RAM="RAM: 16G DDR4"
        HDD=" HDD: 1T SSD M2"
        SREEN=" 17.3” Full HD (1920x1080) 240Hz IPS-level gaming display  "
        OTHER="2 fans and 11 heat pipes and Per-Key RGB gaming keyboard by SteelSeries "
        PRICE ="$819"
        />
        </Grid>
{/* 5 */}
        <Grid item>
        <ProductCard
        Brand = "MSI KATANA GF66"
        Title = "KATANA GF66"
        ImgSrc ="/MSI/KATANA GF66.jpg"
        OS ="OS:Windows 10 Pro"
        CPU="CPU: latest 11th Gen Intel® Core™ i7 processor"
        VGA="VGA: GeForce® GTX 1650 Laptop GPU 4GB GDDR6"
        RAM="RAM: 16G DDR4"
        HDD=" HDD: 1T SSD M2"
        SREEN=" 15.6” Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel "
        OTHER="2 fans and 11 heat pipes and Per-Key RGB gaming keyboard by SteelSeries "
        PRICE ="$819"
        />
        </Grid>
{/* 6 */}
        <Grid item>
        <ProductCard
        Brand = "MSI GT76 TITAN"
        Title = "GT76 TITAN "
        ImgSrc ="/MSI/GT76 TITAN.jpg"
        OS ="OS:Windows 10 Pro"
        CPU="CPU: latest 10th Gen Intel® Core™ i9-10900K processor"
        VGA="VGA: GeForce® RTX SUPER™ 2080 graphics"
        RAM="RAM: 16G DDR4"
        HDD=" HDD: 1T SSD M2"
        SREEN=" SREEN:  UHD (3840x2160), 100% AdobeRGB, IPS-level"
        OTHER="4 fans and 11 heat pipes
        Mystic Light underglow and Per-Key RGB gaming keyboard by SteelSeries "
        PRICE ="$7999"
        />
        </Grid>
        </Grid>
            
            
            

        </div>
    )
}