import ProductCard from "../../components/presentations/ProductCard"
import { Grid } from "@material-ui/core"

const products = [
        {
                Brand: "ProArt Studiobook 16OLED",
                Title: "ProArt Studiobook 16OLED",
                ImgSrc: "/ASUS/ProArt Studiobook 16OLED.png",
                OS: "OS: Windows 10 Pro",
                CPU: "CPU: Ryzen™ 5000 series",
                VGA: "VGA: GeForce RTX™ 3070",
                RAM: "RAM: 8G DDR4",
                HDD: " HDD: 1TB M.2 ",
                SREEN: " SREEN: 15.6 Full HD (1920x1080), IPS-level gaming panel",
                OTHER: "For Creators",
                PRICE: "$2099"
        },
        {
                Brand: "Asus Zenbook 14X",
                Title: "Zenbook 14X OLD ",
                ImgSrc: "/ASUS/Zenbook 14X OLD.png",
                OS: "OS:Windows 10 Pro",
                CPU: "CPU: 11th gen Intel® Core™ i7 processor",
                VGA: "VGA: Up to NVIDIA® GeForce MX450 discrete graphics",
                RAM: "RAM: 16G DDR4",
                HDD: " HDD: 1T SSD M2",
                SREEN: " SREEN:  3840 x 2400 4K UHD resolution",
                OTHER: "180˚ ErgoLift hinge for easy sharing ",
                PRICE: "$999"
        },
        {
                Brand: "ProArt Studiobook 16OLED",
                Title: "ProArt Studiobook 16OLED",
                ImgSrc: "/ASUS/ProArt Studiobook 16OLED.png",
                OS: "OS: Windows 10 Pro",
                CPU: "CPU: Ryzen™ 5000 series",
                VGA: "VGA: GeForce RTX™ 3070",
                RAM: "RAM: 8G DDR4",
                HDD: " HDD: 1TB M.2 ",
                SREEN: " SREEN: 15.6 Full HD (1920x1080), IPS-level gaming panel",
                OTHER: "For Creators",
                PRICE: "$2099"
        },
        {
                Brand: "Asus Zenbook 14X",
                Title: "Zenbook 14X OLD ",
                ImgSrc: "/ASUS/Zenbook 14X OLD.png",
                OS: "OS:Windows 10 Pro",
                CPU: "CPU: 11th gen Intel® Core™ i7 processor",
                VGA: "VGA: Up to NVIDIA® GeForce MX450 discrete graphics",
                RAM: "RAM: 16G DDR4",
                HDD: " HDD: 1T SSD M2",
                SREEN: " SREEN:  3840 x 2400 4K UHD resolution",
                OTHER: "180˚ ErgoLift hinge for easy sharing ",
                PRICE: "$999"
        },
        {
                Brand: "ProArt Studiobook 16OLED",
                Title: "ProArt Studiobook 16OLED",
                ImgSrc: "/ASUS/ProArt Studiobook 16OLED.png",
                OS: "OS: Windows 10 Pro",
                CPU: "CPU: Ryzen™ 5000 series",
                VGA: "VGA: GeForce RTX™ 3070",
                RAM: "RAM: 8G DDR4",
                HDD: " HDD: 1TB M.2 ",
                SREEN: " SREEN: 15.6 Full HD (1920x1080), IPS-level gaming panel",
                OTHER: "For Creators",
                PRICE: "$2099"
        },
        {
                Brand: "Asus Zenbook 14X",
                Title: "Zenbook 14X OLD ",
                ImgSrc: "/ASUS/Zenbook 14X OLD.png",
                OS: "OS:Windows 10 Pro",
                CPU: "CPU: 11th gen Intel® Core™ i7 processor",
                VGA: "VGA: Up to NVIDIA® GeForce MX450 discrete graphics",
                RAM: "RAM: 16G DDR4",
                HDD: " HDD: 1T SSD M2",
                SREEN: " SREEN:  3840 x 2400 4K UHD resolution",
                OTHER: "180˚ ErgoLift hinge for easy sharing ",
                PRICE: "$999"
        },
       
]
export default function Asus() {
        return (
                <div>

                        <Grid container spacing={2}>
                                {
                                        products.map((item) => {
                                                return (
                                                        <Grid item xs={12} sm={4} md={4} >
                                                                <ProductCard
                                                                        Brand={item.Brand}
                                                                        Title={item.Title}
                                                                        ImgSrc={item.ImgSrc}
                                                                        OS={item.OS}
                                                                        CPU="CPU: 11th gen Intel® Core™ i7 processor"
                                                                        VGA="VGA: Up to NVIDIA® GeForce MX450 discrete graphics"
                                                                        RAM="RAM: 16G DDR4"
                                                                        HDD=" HDD: 1T SSD M2"
                                                                        SREEN=" SREEN:  3840 x 2400 4K UHD resolution"
                                                                        OTHER="180˚ ErgoLift hinge for easy sharing "
                                                                        PRICE="$999"
                                                                />
                                                        </Grid>
                                                )
                                        })
                                }
                        </Grid>
                        {/* <Grid container spacing ={0}>

       

        <Grid item>
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
        PRICE ="$999"
        />
        </Grid>


        <Grid item>
        <ProductCard
        Brand = "Asus ROG Zephyrus S17 GX703"
        Title = "ROG Zephyrus S17 GX703 "
        ImgSrc ="/ASUS/ROG Zephyrus S17 GX703.PNG"
        OS ="OS: Windows 10 Pro"
        CPU="CPU:  11th Gen Intel® Core™ i9 CPU "
        VGA="VGA: GeForce RTX™ 3080 GPU"
        RAM="RAM: 8G DDR4"
        HDD=" HDD: 1TB M.2 "
        SREEN=" SREEN: 17.3 Full HD (1920x1080), IPS-level gaming panel"
        OTHER="RGB KEY"
        PRICE ="$2999"
        />
        </Grid>
        <Grid item>
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
        PRICE ="$999"
        />
        </Grid>


        <Grid item>
        <ProductCard
        Brand = "TUF Gaming FX505DY"
        Title = "TUF Gaming FX505DY "
        ImgSrc ="/ASUS/TUF Gaming FX505DY.png"
        OS ="OS: Windows 10 Pro"
        CPU="CPU:  11th Gen Intel® Core™ i9 CPU "
        VGA="VGA: GeForce RTX™ 3080 GPU"
        RAM="RAM: 8G DDR4"
        HDD=" HDD: 512 M.2 "
        SREEN=" SREEN: 15.6 Full HD (1920x1080), IPS-level gaming panel"
        OTHER="RGB KEY"
        PRICE ="$2099"
        />
        </Grid>

        <Grid item>
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
        </Grid>
        </Grid> */}



                </div>
        )
}