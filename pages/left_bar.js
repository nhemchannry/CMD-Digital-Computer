import ACCESERYS from "../components/containers/buttonacces";
import Desktops from "../components/containers/buttondesks";
import Loptops from "../components/containers/buttonlops";

import Left_Navigations from "../components/containers/left-navigations";

export default function LeftNavigationBar(){
    return(
        <div>

        <Left_Navigations/>
        <Desktops/>
        <Loptops/>
        <ACCESERYS/>
        </div>
    )
}