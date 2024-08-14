import { useForm } from "react-hook-form";
import { FormDataProps, RegisterSchema } from "../Schema/LoginSchema";
import { LABELS, STYLE } from "../helper/constant";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../Routes/constant";
import useFirebase from "../../../Hooks/useFirebase";
const Register =()=>{
  const {createUser,isDisable}=useFirebase()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitClick=(data:any)=>{
     createUser(data?.email,data?.password,data?.name)
  }
    return (<>
      <form 
      className=""
      onSubmit={handleSubmit(handleSubmitClick)}>
       <h1 className={STYLE.FORM_TITLE}>{LABELS.SIGN_UP}</h1>
       {Object.keys(RegisterSchema).map((key:string)=>{
        const formdata:FormDataProps=RegisterSchema[key]
        return (
          <div key={key} className="flex flex-col">
          <label
          className={STYLE.LABEL}>
            {formdata.label}</label>
          <input 
            type={formdata.type} 
            className={STYLE.INPUT}
            placeholder={formdata.placeholder}
            {...register(key,formdata.schema)}
           />
           {errors[key] && <label className={STYLE.ERROR}>{errors[key]?.message}</label>}
          </div>
        )
       })}
       <button 
       disabled={isDisable}
       className={STYLE.BUTTON}
       type='submit'>{LABELS.SIGN_IN}</button>
      </form>
      <div className="py-4 my-3 text-2xl font-bold text-center">Already  have Account ? <span className="text-red-800 font-bold"> <Link to={ROUTE.LOGIN}> Sign In </Link></span></div>
    </>)
} 
export default Register