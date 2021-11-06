import AccessryCard from "../../components/presentations/AccessryCard"
import { Grid } from "@material-ui/core"
export default function Flash()

{
    return(
        <div>
        <Grid container spacing ={0}>
        
        {/* 1*/}
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash.jpg"
                Describe = " Kingston Flash 32GB "
                PRICE = "$10"
                />
                </Grid>
        
        {/* 2 */}
        
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash 64g.jpg"
                Describe = " Kingston Flash 64GB "
                PRICE = "$16"
                />
                </Grid>
        {/* 3 */}
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash 16g.jpg"
                Describe = " Kingston Flash 16GB "
                PRICE = "$8"
                />
                </Grid>
        {/* 4 */}
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash 128g.jpg"
                Describe = " Kingston Flash 128GB "
                PRICE = "$32"
                />
                </Grid>
        {/* 5 */}
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash 16g.jpg"
                Describe = " Kingston Flash 16GB "
                PRICE = "$8"
                />
                </Grid>
        {/* 6 */}
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash 128g.jpg"
                Describe = " Kingston Flash 128GB "
                PRICE = "$32"
                />
                </Grid>
        {/* 7*/}
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash.jpg"
                Describe = " Kingston Flash 32GB "
                PRICE = "$10"
                />
                </Grid>
        
        {/* 8 */}
        
                <Grid item>
                <AccessryCard
                BrandName = "Kingston Flash"
                ImgSrc = "/USB Flash/Kingston Flash 64g.jpg"
                Describe = " Kingston Flash 64GB "
                PRICE = "$16"
                />
                </Grid>
                </Grid>
                    
        
                </div>
            )
        }        
