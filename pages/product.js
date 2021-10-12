import link from "next/link"
import styles from"../styles/text.module.css"
import Giutars from "../components/containers/giutars"
import Image from"next/image"
import Button from "../components/presentations/button"
export default function Index() {
  return (
    <div>
      <h1 style={{color:"red"}}>Shop Computer</h1>
      <Button lable="laptop"/>
      <Button lable="Desktop"/>
      <Button lable="Hardware"/>
      <Image src="/shop.png" alt=" shop pictuer" width="100" height="100"/>
      <Image src="/shop1.png" alt=" shop pictuer" width="100" height="100"/>
      <Image src="/shop2.jpg" alt=" shop pictuer" width="100" height="100"/>
      <Giutars/>
      <button style={{color:"red"}}>Button Test Style</button>
    <p className={styles.choose}><b>Choose color</b></p>
    <p className={styles.red}><b>Red</b></p>
    <p className={styles.blue}><b>Blue</b></p>
    <p className={styles.dark}><b>Yellow</b></p>
    </div>
  )
}
