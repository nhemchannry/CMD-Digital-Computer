import Link from"next/link"
export default function Navbar({lable}){
    return(
       <Link href="/login">
        <a>{lable}</a></Link>
    )
}