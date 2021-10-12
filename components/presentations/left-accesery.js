import React from "react"
import ToggleButton from '@mui/material/ToggleButton';
import Link from"next/link"
export default function Left_Accesery({children,href}) {
  return (
      <div> 
        <ToggleButton><Link href={href}>{children}</Link></ToggleButton>

      </div>
   
  )
}