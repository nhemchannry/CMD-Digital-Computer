
export default function Input({label,type,style}){
    return(
        <div>
            <input type={type} placeholder={label} style={{borderRadius:"15px", border:"1px solid #ccc", padding:"16px 20px", marginTop:"20px", boxSizing: "border-box", width: "100%"}}/>
        </div>
    )
}
