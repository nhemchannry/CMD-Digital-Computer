import ProductCard from "../../components/presentations/ProductCard"
export default function Mac_Desktop()

{
    return(
        <div>
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
        PRICE =" $1,949"
        />
        <ProductCard
        Brand = "Mac"
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