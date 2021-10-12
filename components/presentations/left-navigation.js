import { useRouter } from"next/router"
import Link from"next/link"
export default function Left_Navigation({children,href}){
    const router = useRouter();
    const styles ={
        marginLeft:10,
        marginRight:15,
        color: router.pathname==href?"red":"black"
    }
    return(
        <button style={styles}><Link href={href}><a>{children}</a>
          </Link>
          </button>

    )
}