import styles from '../styles/about.module.css'

export default function About(){
  return(
    <div className={styles.aboutT}> 
      <h1>ABOUT US</h1>
      <p>Your computer’s BIOS is the first thing that loads when you start your computer. It initializes your hardware before booting an operating system from your hard drive or another device. Many low-level system settings are only available in your BIOS. Modern computers predominantly ship with UEFI firmware, which is the successor to the traditional BIOS. But UEFI firmware and the BIOS are fairly similar. We’ve even seen modern PCs refer to their UEFI firmware settings screen as the “BIOS”.</p>
    </div>
  )
}