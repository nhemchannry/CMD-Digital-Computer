import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"
export default function MSI_Desktop()

{
    return(
        <div>
        <Grid container spacing ={0}>

{/* 1*/}
        <Grid item>
        <ProductCard
        Brand = "MSI GS75 STEALTH"
        Title = "GS75 STEALTH "
        ImgSrc ="/MSI/GS75 STEALTH.jpg"
        OS ="OS:Windows 10 Pro"
        CPU="CPU: 10th Gen Intel® Core™ i9 processor"
        VGA="VGA: GeForce® RTX 2080 SUPER™ with Max-Q Design"
        RAM="RAM: 8G DDR4"
        HDD=" HDD: 500G SSD M2"
        SREEN=" SREEN: 17.3 Full HD (1920x1080), IPS-level gaming panel"
        OTHER="300Hz refresh rate gaming display 
        Per-Key RGB gaming keyboard by SteelSeries "
        PRICE ="$1099"
        />
        </Grid>

{/* 2 */}

        <Grid item>
        <ProductCard
        Brand = "MSI GP66 LEOPARD"
        Title = "GP66 LEOPARD"
        ImgSrc ="/MSI/GP66 LEOPARD.png"
        OS ="OS:Windows 10 Pro"
        CPU="CPU: latest 10th Gen Intel® Core™ i7 processor"
        VGA="VGA: Up to latest GeForce RTX™ 3080 Laptop GPU 8GB GDDR6"
        RAM="RAM: 16G DDR4"
        HDD=" HDD: 1T SSD M2"
        SREEN=" 15.6” Full HD (1920x1080), 144Hz, IPS-level gaming display "
        OTHER="Cooler Boost 5 with 2 fans and 6 heatpipes
        Per-Key RGB gaming keyboard by SteelSeries"
        PRICE ="$3099"
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