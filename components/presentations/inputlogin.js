export default function InputLogin({label,type,style}){
    return(
        <div>
         <input type={type} placeholder={label} style={{width: "100%", padding: "16px 20px",margin: "8px 0", display: "inline-block", border: "1px solid #ccc",
borderRadius: "30px", boxSizing: "border-box"}}/>
        </div>
    )
}

