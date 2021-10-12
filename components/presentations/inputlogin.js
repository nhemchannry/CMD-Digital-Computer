export default function InputLogin({label,type}){
    return(
        <div>
            <label>{label}</label>
         <input type={type} placeholder={label}/>
        </div>
    )
}