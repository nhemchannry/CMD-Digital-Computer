export default function InputLogin({label,type,style}){
    return(
        <div>
         <input type={type} placeholder={label} style={{width:"100%", border:"16px 20px",display: "inline-block",border: "1px solid #ccc", borderRadius:"30px", padding:"15px", marginTop:"20px"}}/>
        </div>
    )
}