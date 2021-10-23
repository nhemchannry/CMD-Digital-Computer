import ProductCard from "../components/presentations/ProductCard"
export default function Hometest()

{
   

    return(
        <div>
        <ProductCard
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
        <ProductCard
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


            
            

        </div>
    )
}