interface CustomInputProps{
    label:string,
    type:string,
    onChange?:()=>void,
    error?:string,
    placeholder:string
}
const CustomInput = ({
    label,
    type,
    placeholder,
    onChange=()=>{},
    error='Require Field'
}:CustomInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder}onChange={onChange}></input>
      <label>{error}</label>
    </div>
  )
}

export default CustomInput
