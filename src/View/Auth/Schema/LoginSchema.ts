import { FORM_VALIDATION_MESSAGES, INPUT_TYPE, LABELS, VALIDATION_REGEX } from "../helper/constant";
export interface FormSchema {
   required?: string;
   pattern?: {
     value: RegExp;
     message: string;
   };
   minLength?: {
     value: number;
     message: string;
   };
   maxLength?: {
     value: number;
     message: string;
   };
}
export interface FormDataProps{
   type:string,
   label:string,
   placeholder:string,
   schema:FormSchema
}
export const LoginSchema:Record<string,FormDataProps>={
     email:{
        type:INPUT_TYPE.EMAIL,
        label:LABELS.EMAIL,
        placeholder:LABELS.EMAIL_PLACEHOLDER,
        schema:{
          required:FORM_VALIDATION_MESSAGES.REQUIRED,
          pattern:{
            value:VALIDATION_REGEX.EMAIL,
            message:FORM_VALIDATION_MESSAGES.VALID_EMAIL
          }
        }
     },
     password:{
      type:INPUT_TYPE.PASSWORD,
      label:LABELS.PASSWORD,
      placeholder:LABELS.PASSWORD_PLACEHOLDER,
      schema:{
         required:FORM_VALIDATION_MESSAGES.REQUIRED,
         pattern:{
            value:VALIDATION_REGEX.PASSWORD,
            message:FORM_VALIDATION_MESSAGES.VALID_PASSWORD
         }
      }
     }
}
export const RegisterSchema:Record<string,FormDataProps>={
  name:{
    type:INPUT_TYPE.TEXT,
    label:LABELS.NAME,
    placeholder:LABELS.NAME_PLACEHOLDER,
    schema:{
      required:FORM_VALIDATION_MESSAGES.REQUIRED,
    }
 },
  email:{
     type:INPUT_TYPE.EMAIL,
     label:LABELS.EMAIL,
     placeholder:LABELS.EMAIL_PLACEHOLDER,
     schema:{
       required:FORM_VALIDATION_MESSAGES.REQUIRED,
       pattern:{
         value:VALIDATION_REGEX.EMAIL,
         message:FORM_VALIDATION_MESSAGES.VALID_EMAIL
       }
     }
  },
  password:{
   type:INPUT_TYPE.PASSWORD,
   label:LABELS.PASSWORD,
   placeholder:LABELS.PASSWORD_PLACEHOLDER,
   schema:{
      required:FORM_VALIDATION_MESSAGES.REQUIRED,
      pattern:{
         value:VALIDATION_REGEX.PASSWORD,
         message:FORM_VALIDATION_MESSAGES.VALID_PASSWORD
      }
   }
  }
}