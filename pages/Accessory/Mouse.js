import ProductCard from "../../components/presentations/ProductCard"
export default function Mouse()

{
    return(
        <div>
{/* 1 */}
        <ProductCard
        Brand = "Asus ROG G703GX-E5003T"
        Title = "ROG G703GX-E5003T "
        ImgSrc ="/ASUS/ROG G703.jpg"
        OS ="OS: Windows 10 Pro"
        CPU="CPU: 8th Gen Intel® Core™ i9"
        VGA="VGA: GeForce RTX™ 2080"
        RAM="RAM: 8G DDR4"
        HDD=" HDD: 1TB M.2 "
        SREEN=" SREEN: 17.3 Full HD (1920x1080), IPS-level gaming panel"
        OTHER="RGB KEY"
        PRICE ="$2099"
        />
{/* 2 */}
        <ProductCard
        Brand = "Asus Zenbook 14X"
        Title = "Zenbook 14X OLD "
        ImgSrc ="/ASUS/Zenbook 14X OLD.png"
        OS ="OS:Windows 10 Pro"
        CPU="CPU: 11th gen Intel® Core™ i7 processor"
        VGA="VGA: Up to NVIDIA® GeForce MX450 discrete graphics"
        RAM="RAM: 16G DDR4"
        HDD=" HDD: 1T SSD M2"
        SREEN=" SREEN:  3840 x 2400 4K UHD resolution"
        OTHER="180˚ ErgoLift hinge for easy sharing "
        PRICE ="$799"
        />
{/* 3 */}


            
            

        </div>
    )
}