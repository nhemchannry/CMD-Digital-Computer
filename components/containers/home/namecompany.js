import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
const useStyles=makeStyles((theme)=>({
    root:{
        textAlign:'center',
        fontFamily: 'Times New Roman, Times, serif',
        '& h1':{
            color : "#66304a",
        }
    }
}));
export default function NameCompany(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <h1>
                CMD-COMPUTER
            </h1>
        </div>
    )
}