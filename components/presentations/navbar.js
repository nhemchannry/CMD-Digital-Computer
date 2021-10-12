import Link from"next/link"
export default function Navbar({children,href}){
    return(
        <button style={styles}> 
            <Link href={href}>
         <a>{children}</a>
          </Link>
          </button>

    )
}