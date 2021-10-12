import Link from"next/link"
import style from"../styles/login.module.css"
import InputLogin from "../components/presentations/inputlogin"
export default function Login(){
    return(
     <div>
         <InputLogin label="Username" type="text"/>
         <InputLogin label="Password" type="Password"/>
         <button className={style.btn}><Link href="/">LOGIN</Link></button>
     </div>
        
    )
}